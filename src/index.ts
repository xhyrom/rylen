import './stores/slash-commands';
import { isValidRequest } from 'discord-verify';
import {
    type APIPingInteraction,
    type APIApplicationCommandInteraction,
    type APIMessageComponentInteraction,
    InteractionType,
    ApplicationCommandType
} from 'discord-api-types/v10';
import slashCommands from './stores/slash-commands';

interface HandleConfig {
    publicKey: string;
}

export const handle = async(
    config: HandleConfig,
    request: Request
) => {
    if (request.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 });
    }

    const isValid = await isValidRequest(request, config.publicKey);

    if (!isValid) {
        return new Response('Invalid request', { status: 401 });
    }

    const interaction = await request.json() as APIPingInteraction | APIApplicationCommandInteraction | APIMessageComponentInteraction;
    if (interaction.type === InteractionType.Ping) return Response.json({ type: 1 });

    if (interaction.type === InteractionType.ApplicationCommand) {
        switch (interaction.data.type) {
            case ApplicationCommandType.ChatInput:
                return Response.json(slashCommands.getCommand(interaction.data.name)?.run?.(interaction));
        }
    }
}

export * from './hooks';
export * from './structs';