import { SlashCommandData } from "../hooks/types";
import { Store } from "./Store";

export const Commands = new (class Commands extends Store<SlashCommandData> {
    public addCommand(command: SlashCommandData): this {
        this.set(command.name, command);

        return this;
    }

    public getCommand(name: string): SlashCommandData | undefined {
        return this.get(name);
    }

    public removeCommand(name: string): boolean {
        return this.delete(name);
    }
})();

export const Test = Math.random();
