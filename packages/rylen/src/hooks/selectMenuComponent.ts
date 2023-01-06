import SelectMenuComponents from "../stores/SelectMenuComponents";
import { SelectMenuComponentData } from "./types";

export function $selectMenuComponent(data: SelectMenuComponentData) {
    SelectMenuComponents.addSelectMenu(data);
}
