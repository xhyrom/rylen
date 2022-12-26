import { APIApplicationCommandOption, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { BasicOptionBuilder } from './BasicOptionBuilder';
import { SubcommandGroupOptionBuilder } from './SubcommandGroupOptionBuilder';

export class OptionBuilder extends BasicOptionBuilder {
    private __options: APIApplicationCommandOption[] = [];

    public subcommand(name: string, description: string, options: BasicOptionBuilder): this {
        this.__options.push({
            type: ApplicationCommandOptionType.Subcommand,
            name,
            description,
            options: options.buildBasic() ?? [],
        });

        return this;
    }

    public subcommandGroup(name: string, description: string, options: SubcommandGroupOptionBuilder): this {
        this.__options.push({
            type: ApplicationCommandOptionType.SubcommandGroup,
            name,
            description,
            options: options.buildSub() ?? [],
        });

        return this;
    }
     
    public static create(): OptionBuilder {
        return new OptionBuilder();
    }

    public build(): APIApplicationCommandOption[] {
        return {
            ...this.__options,
            ...super.buildBasic()
        };
    }
}