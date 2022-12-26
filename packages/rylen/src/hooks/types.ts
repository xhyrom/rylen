import { APIApplicationCommandOption } from "discord-api-types/v10";

export interface SlashCommandData {
    name: string;
    description: string;
    options?: APIApplicationCommandOption[];
}