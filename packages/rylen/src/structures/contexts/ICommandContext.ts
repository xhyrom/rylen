import { APIInteractionResponseCallbackData } from "discord-api-types/v10";

export interface ICommandContext {
    reply(content: APIInteractionResponseCallbackData): void;
}
