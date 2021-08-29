import { Client, Message, MessageEmbed, Snowflake } from "discord.js";
interface pagesInt {
    value: string;
    embed: MessageEmbed;
    label: string;
    description?: string;
    emoji?: string | Snowflake;
};

declare module "discord.js-embed-pages" {
        export function pages(message: Message, pages: MessageEmbed[], timeout: number, MovingButtonStyle: 'PRIMARY' | 'SECONDARY' | 'SUCCESS' | 'DANGER'): Promise<void>;
        export function menuPages(message: Message, pages: pagesInt[], timeout: number): Promise<void>;
        export function reactionPages(message: Message, pages: MessageEmbed[], timeout: number): Promise<void>;
}