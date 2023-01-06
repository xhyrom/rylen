import {
    $slashCommand,
    $buttonComponent,
    BasicOptionBuilder,
    OptionBuilder,
} from "rylen";
import ButtonComponents from "rylen/src/stores/ButtonComponents";
import Commands from "rylen/src/stores/Commands";

const button = $buttonComponent({
    label: "Hello",
    style: 4,
    customId: "hello",

    handle: (interaction) => {
        console.log(interaction);
    },
});

$slashCommand({
    name: "test",
    description: "test",
    options: OptionBuilder.create()
        .subcommand(
            "test",
            "Hello",
            BasicOptionBuilder.create().mentionable("Lol", "Lolík", {
                required: true,
            })
        )
        .build(),
    handle(interaction) {
        this.reply("ahoj").addComponents([button]);
    },
});

console.log(ButtonComponents.getButton("hello"), Commands);
