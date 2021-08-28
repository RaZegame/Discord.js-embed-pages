import { Client, Message, MessageEmbed } from "discord.js";

declare module "discord.js-embed-pages" {
    export function pages(message: Message, pages: MessageEmbed[], timeout: number, MovingButtonSytle: 'PRIMARY' | 'SECONDARY' | 'SUCCESS' | 'DANGER' )
}