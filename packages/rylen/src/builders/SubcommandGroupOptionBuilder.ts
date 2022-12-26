import { APIApplicationCommandSubcommandOption, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { BasicOptionBuilder } from './BasicOptionBuilder';

export class SubcommandGroupOptionBuilder {
    private subCommandGroupOptions: APIApplicationCommandSubcommandOption[] = [];

    public subcommand(name: string, description: string, options: BasicOptionBuilder): this {
        this.subCommandGroupOptions.push({
            type: ApplicationCommandOptionType.Subcommand,
            name,
            description,
            options: options.buildBasic() ?? [],
        });

        return this;
    }

    public static create(): SubcommandGroupOptionBuilder {
        return new SubcommandGroupOptionBuilder();
    }

    public buildSub(): APIApplicationCommandSubcommandOption[] {
        return this.subCommandGroupOptions;
    }
}