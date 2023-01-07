import {
    APIButtonComponentWithCustomId,
    APIButtonComponentWithURL,
    APIMessageComponentEmoji,
    APIButtonComponent,
    ButtonStyle,
    ComponentType,
} from "discord-api-types/v10";

export class ButtonBuilder {
    private data: Partial<APIButtonComponent> = {};

    public label(string: string): this {
        this.data.label = string;
        return this;
    }

    public style(style: ButtonStyle): this {
        this.data.style = style;
        return this;
    }

    public emoji(emoji: APIMessageComponentEmoji): this {
        this.data.emoji = {
            name: emoji.name,
            id: emoji.id,
            animated: emoji.animated,
        };
        return this;
    }

    public disabled(boolean: boolean): this {
        this.data.disabled = boolean;
        return this;
    }

    public url(string: string): this {
        (this.data as APIButtonComponentWithURL).url = string;
        return this;
    }

    public customId(string: string): this {
        (this.data as APIButtonComponentWithCustomId).custom_id = string;
        return this;
    }

    public static create(): ButtonBuilder {
        return new ButtonBuilder();
    }

    public build(): APIButtonComponent {
        return {
            ...this.data,
            type: ComponentType.Button,
        } as APIButtonComponent;
    }
}
