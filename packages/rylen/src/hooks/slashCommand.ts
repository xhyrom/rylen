import Commands from "../stores/Commands";
import { SlashCommandData } from "./types";

export function $slashCommand(data: SlashCommandData) {
    Commands.addCommand(data);
}
