import { $slashCommand, ButtonBuilder, Commands, use } from "rylen";
import nodeIntegration from "@rylen/node";

use(
    nodeIntegration({
        port: 8080,
        stores: { commands: Commands },
        auth: {
            publicKey:
                "6b295920e4c882c3173206fb50cde243f2aff29f8ddd5dcaa9e9f7bc230683ff",
        },
    })
);

$slashCommand({
    name: "ping",
    description: "ping",
    handle(ctx, interaction) {
        console.log("hm");
        ctx.reply({
            content: "lol",
            components: [
                {
                    type: 1,
                    components: [
                        ButtonBuilder.create()
                            .label("Ahoj")
                            .style(1)
                            .customId("ahoj")
                            .build(),
                    ],
                },
            ],
        });
    },
});
