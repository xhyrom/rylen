import { SelectMenuComponentData } from "../hooks/types";
import { Store } from "./Store";

class SelectMenus extends Store<SelectMenuComponentData> {
    public addSelectMenu(button: SelectMenuComponentData): this {
        this.set(button.customId, button);

        return this;
    }

    public getSelectMenu(name: string): SelectMenuComponentData | undefined {
        return this.get(name);
    }

    public removeSelectMenu(name: string): boolean {
        return this.delete(name);
    }
}

export default new SelectMenus();
