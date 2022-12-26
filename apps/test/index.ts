import { $slashCommand, BasicOptionBuilder, OptionBuilder } from 'rylen';

$slashCommand({
    name: 'test',
    description: 'test',
    options: OptionBuilder.create()
        .subcommand(
            'test',
            'Hello',
            BasicOptionBuilder.create()
                .mentionable('Lol', 'Lolík', { required: true })
        )
        .build()
})