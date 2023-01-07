import Fastify from "fastify";
import type { Commands } from "rylen";
import { verify } from "discord-verify/node";
import { subtle } from "node:crypto";
import { CommandContext } from "./contexts/CommandContext";
import {
    APIInteraction,
    InteractionType,
    InteractionResponseType,
} from "discord-api-types/v10";

interface NodeIntegrationOptions {
    port: number;
    auth: {
        publicKey: string;
    };
    stores: {
        commands: typeof Commands;
    };
}

export default (options: NodeIntegrationOptions) => {
    return () => {
        const app = Fastify();

        app.addContentTypeParser(
            "application/json",
            { parseAs: "string" },
            function (req, body, done) {
                try {
                    var json = JSON.parse(body.toString());
                    done(null, json);
                } catch (err) {
                    err.statusCode = 400;
                    done(err, undefined);
                }
            }
        );

        app.post("/", async (request, reply) => {
            const signature = request.headers["x-signature-ed25519"] as string;
            const timestamp = request.headers[
                "x-signature-timestamp"
            ] as string;
            const rawBody = JSON.stringify(request.body);

            const isValid = await verify(
                rawBody,
                signature,
                timestamp,
                options.auth.publicKey,
                subtle
            );

            if (!isValid) {
                return reply.code(401).send("Invalid signature");
            }

            const body = request.body as unknown as APIInteraction;

            if (body.type == InteractionType.Ping) {
                return reply.send({ type: InteractionResponseType.Pong });
            }

            if (body.type == InteractionType.ApplicationCommand) {
                const command = options.stores.commands.getCommand(
                    body.data.name
                );
                command.handle(new CommandContext(reply), body);
            }

            reply.send(options.stores.commands);
        });

        app.listen({ port: options.port });
    };
};
