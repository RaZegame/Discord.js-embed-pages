const Discord = require("discord.js");

exports.pages = async function (/** @type {Discord.Message} */ message, pages, timeout, MovingButtonSytle) {


    const pageMovingButtons1 = new Discord.MessageButton()
        .setCustomId(`forward_button_embed`)
        .setLabel("")
        .setEmoji("⏩")
        .setStyle(MovingButtonSytle)
    const pageMovingButtons2 = new Discord.MessageButton()
        .setCustomId(`back_button_embed`)
        .setLabel("")
        .setEmoji("⏪")
        .setStyle(MovingButtonSytle);
    const deleteB = new Discord.MessageButton()
        .setCustomId('del_button')
        .setEmoji("🗑")
        .setStyle('SECONDARY');

    var pageMovingButtons = new Discord.MessageActionRow()
        .addComponents(pageMovingButtons2, pageMovingButtons1, deleteB)
    var currentPage = 0;
    var m = await message.channel.send({ components: [pageMovingButtons], embeds: [pages[0]] });
    const col = await m.channel.createMessageComponentCollector({ componentType: "BUTTON", dispose: true, filter: (button) => button.user.id === message.author.id, time: timeout, idle: timeout / 2 })
    col.on("collect", (int) => {
        if (int.isButton()) {
            if(int.customId === "del_button") {
                col.stop()
                m.delete().catch(() => {});
            }
            if (int.customId === "back_button_embed") {
                if (currentPage - 1 < 0) {
                    currentPage = pages.length - 1
                } else {
                    currentPage -= 1;
                }
            } else if (int.customId === "forward_button_embed") {
                if (currentPage + 1 == pages.length) {
                    currentPage = 0;
                } else {
                    currentPage += 1;
                }
            }
            if (int.customId == "back_button_embed" || int.customId == "forward_button_embed") {
                m.edit({ embeds: [pages[currentPage]], components: [pageMovingButtons] });
                int.deferUpdate().catch(() => { });
            }
        }
    });
    col.on("end", () => {
        const disrow = new Discord.MessageActionRow().addComponents(pageMovingButtons.components[0].setDisabled(true), pageMovingButtons.components[1].setDisabled(true), pageMovingButtons.components[2].setDisabled(true));
        if(m.editable) {
            m.edit({ embeds: [pages[0]], components: [disrow] }).catch(() => {})
        } else {
            return;
        }
    });

}
