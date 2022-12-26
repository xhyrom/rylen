import { APIApplicationCommandBasicOption, APIApplicationCommandOption, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { StringOption, IntegerOption, NumberOption, BooleanOption, UserOption, ChannelOption, RoleOption, MentionableOption } from './types';

export class BasicOptionBuilder {
    private basicOptions: APIApplicationCommandBasicOption[] = [];

    public string(name: string, description: string, options: StringOption): this {
        this.basicOptions.push({
            type: ApplicationCommandOptionType.String,
            name,
            name_localizations: options.nameLocalizations ?? {},
            description,
            description_localizations: options.descriptionLocalizations ?? {},
            max_length: options.maxLength,
            min_length: options.minLength,
            required: options.required,
            autocomplete: options.autocomplete,
        })

        return this;
    }

    public integer(name: string, description: string, options: IntegerOption): this {
        this.basicOptions.push({
            type: ApplicationCommandOptionType.Integer,
            name,
            name_localizations: options.nameLocalizations ?? {},
            description,
            description_localizations: options.descriptionLocalizations ?? {},
            max_value: options.maxValue,
            min_value: options.minValue,
            required: options.required,
            autocomplete: options.autocomplete,
        })

        return this;
    }

    public number(name: string, description: string, options: NumberOption): this {
        this.basicOptions.push({
            type: ApplicationCommandOptionType.Integer,
            name,
            name_localizations: options.nameLocalizations ?? {},
            description,
            description_localizations: options.descriptionLocalizations ?? {},
            max_value: options.maxValue,
            min_value: options.minValue,
            required: options.required,
            autocomplete: options.autocomplete,
        })

        return this;
    }

    public boolean(name: string, description: string, options: BooleanOption): this {
        this.basicOptions.push({
            type: ApplicationCommandOptionType.Boolean,
            name,
            name_localizations: options.nameLocalizations ?? {},
            description,
            description_localizations: options.descriptionLocalizations ?? {},
            required: options.required,
        })

        return this;
    }

    public user(name: string, description: string, options: UserOption): this {
        this.basicOptions.push({
            type: ApplicationCommandOptionType.User,
            name,
            name_localizations: options.nameLocalizations ?? {},
            description,
            description_localizations: options.descriptionLocalizations ?? {},
            required: options.required,
        })

        return this;
    }

    public channel(name: string, description: string, options: ChannelOption): this {
        this.basicOptions.push({
            type: ApplicationCommandOptionType.Channel,
            name,
            name_localizations: options.nameLocalizations ?? {},
            description,
            description_localizations: options.descriptionLocalizations ?? {},
            required: options.required,
            channel_types: options.channelTypes,
        })

        return this;
    }

    public role(name: string, description: string, options: RoleOption): this {
        this.basicOptions.push({
            type: ApplicationCommandOptionType.Role,
            name,
            name_localizations: options.nameLocalizations ?? {},
            description,
            description_localizations: options.descriptionLocalizations ?? {},
            required: options.required,
        })

        return this;
    }

    public mentionable(name: string, description: string, options: MentionableOption): this {
        this.basicOptions.push({
            type: ApplicationCommandOptionType.Role,
            name,
            name_localizations: options.nameLocalizations ?? {},
            description,
            description_localizations: options.descriptionLocalizations ?? {},
            required: options.required,
        })

        return this;
    }

    public static create(): BasicOptionBuilder {
        return new BasicOptionBuilder();
    }

    public buildBasic(): APIApplicationCommandBasicOption[] {
        return this.basicOptions;
    }
}