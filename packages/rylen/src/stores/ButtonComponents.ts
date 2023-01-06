import { ButtonComponentDataWithCustomId } from "../hooks/types";
import { Store } from "./Store";

class Buttons extends Store<ButtonComponentDataWithCustomId> {
    public addButton(button: ButtonComponentDataWithCustomId): this {
        this.set(button.customId, button);

        return this;
    }

    public getButton(
        name: string
    ): ButtonComponentDataWithCustomId | undefined {
        return this.get(name);
    }

    public removeButton(name: string): boolean {
        return this.delete(name);
    }
}

export default new Buttons();
