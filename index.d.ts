import { Client, Message, MessageEmbed } from "discord.js";
interface pagesInt {
    value: string;
    embed: MessageEmbed;
    label: string;
    description?: string;
    emoji?: string | Snowflake;
}   
declare module "discord.js-embed-pages" {
    export function pages(message: Message, pages: MessageEmbed[], timeout: number, MovingButtonSytle: 'PRIMARY' | 'SECONDARY' | 'SUCCESS' | 'DANGER'): void;
    export function menuPages(message: Message, pages: pagesInt[], timeout: number)
}