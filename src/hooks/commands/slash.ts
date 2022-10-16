import slashCommands, { SlashCommand } from '../../stores/slash-commands';

export function $slashCommand(data: SlashCommand) {
    slashCommands.addCommand(data);
}