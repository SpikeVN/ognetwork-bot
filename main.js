import mineflayer from "mineflayer"
import minecraftData from "minecraft-data"

import mccmd from "mineflayer-cmd"


const cmd = mccmd.plugin
const mc = minecraftData("1.20")

const bot = mineflayer.createBot({
    host: "og-network.net",
    port: 25565,
    username: process.argv[2],
    auth: "microsoft"
})

bot.loadPlugin(cmd)

let CLICKED_COMPASS = false;

bot.once("spawn", () => {
        console.log("Clicking compass");
})

bot.once("windowOpen", (window) => {
    console.log("GUI opened")
    bot.deactivateItem()
    window.slots.forEach(async (i) => {
        if (i != null) {
            if (i["name"] === "grass_block") {
                const mouseButton = 0 // 0: left click, 1: right click
                const mode = 0 // 0: single click
                console.log(i)
                await bot.clickWindow(i["slot"], mouseButton, mode)
                CLICKED_COMPASS = true;
            }
        }
    })
    
})
