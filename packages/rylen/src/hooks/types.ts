import {
    APIApplicationCommandOption,
    APISelectMenuComponent,
    APIMessageComponentButtonInteraction,
    APIMessageComponentSelectMenuInteraction,
    APIApplicationCommandInteraction,
    ButtonStyle,
    APIMessageComponentEmoji,
} from "discord-api-types/v10";

export interface SlashCommandData {
    name: string;
    description: string;
    options?: APIApplicationCommandOption[];
    handle: (interaction: APIApplicationCommandInteraction) => void;
}

export interface ButtonComponentDataBase {
    label: string;
    emoji?: APIMessageComponentEmoji;
}

export type ButtonComponentData =
    | ButtonComponentDataWithCustomId
    | ButtonComponentDataWithURL;

export interface ButtonComponentDataWithCustomId
    extends ButtonComponentDataBase {
    customId: string;
    style: Omit<ButtonStyle, ButtonStyle.Link>;
    handle: (interaction: APIMessageComponentButtonInteraction) => void;
}

export interface ButtonComponentDataWithURL extends ButtonComponentDataBase {
    url: string;
    style: ButtonStyle.Link;
}

export interface SelectMenuComponentData {
    component: APISelectMenuComponent;
    customId?: string;
    handle: (interaction: APIMessageComponentSelectMenuInteraction) => void;
}
