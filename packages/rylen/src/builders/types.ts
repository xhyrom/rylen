import { APIApplicationCommandOptionChoice, ChannelType, LocalizationMap } from 'discord-api-types/v10';

export interface Option {
    nameLocalizations?: LocalizationMap;
    descriptionLocalizations?: LocalizationMap;
    required?: boolean;
    autocomplete?: boolean;
}

export interface StringOption extends Option {
    minLength?: number;
    maxLength?: number;
    choices?: APIApplicationCommandOptionChoice<string>
}

export interface IntegerOption extends Option {
    minValue?: number;
    maxValue?: number;
    choices?: APIApplicationCommandOptionChoice<number>
}
export type NumberOption = IntegerOption;

export type BooleanOption = Omit<Option, 'autocomplete'>;
export type UserOption = Omit<Option, 'autocomplete'>;

export interface ChannelOption extends Option {
    channelTypes?: Exclude<ChannelType, ChannelType.DM | ChannelType.GroupDM>[];
}

export type RoleOption = Omit<Option, 'autocomplete'>;
export type MentionableOption = Omit<Option, 'autocomplete'>;