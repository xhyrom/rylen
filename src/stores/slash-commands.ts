import type { APIApplicationCommandInteraction, APIInteractionResponse } from 'discord-api-types/v10';
import { Command } from '../structs/Command';
import { Store } from '../structs/Store';

export type SlashCommand = Command<APIApplicationCommandInteraction, APIInteractionResponse>;

class SlashCommands extends Store<Command<APIApplicationCommandInteraction, APIInteractionResponse>> {
    public addCommand(command: SlashCommand) {
        this.set(command.name, command);
    }

    public getCommand(name: string) {
        return this.get(name);
    }
}

export default new SlashCommands();