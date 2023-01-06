import ButtonComponents from "../stores/ButtonComponents";
import { ButtonComponentData } from "./types";

export function $buttonComponent(data: ButtonComponentData) {
    if (!("customId" in data)) return;

    ButtonComponents.addButton(data);
}
