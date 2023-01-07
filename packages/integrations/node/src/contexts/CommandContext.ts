import { ICommandContext } from "rylen";
import {
    APIInteractionResponseCallbackData,
    InteractionResponseType,
} from "discord-api-types/v10";
import { FastifyReply } from "fastify";

export class CommandContext implements ICommandContext {
    private fastifyReply: FastifyReply;

    constructor(reply: FastifyReply) {
        this.fastifyReply = reply;
    }

    public reply(content: APIInteractionResponseCallbackData): void {
        this.fastifyReply.send({
            type: InteractionResponseType.ChannelMessageWithSource,
            data: content,
        });
    }
}
