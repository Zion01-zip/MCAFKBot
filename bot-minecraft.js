const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'Lys_DeaDtest.aternos.me', // Replace with your server address
    username: 'LysBotAFK', 
    version: '1.20.1', // Replace with your server version
    auth: 'offline', // Make your world cracked friendly
    checkTimeoutInterval: 300*1000 // Set a timeout to check if the bot is still connected (default is 5 minutes)
    
})

const welcome = async () => {
    await bot.waitForTicks(100);

    bot.setControlState('jump', true);

    await bot.waitForTicks(10);
    bot.clearControlStates();

    welcome();
}
const advertise = () => {
    bot.chat('AFK Bot By Lys_DeaD');
}

bot.on('spawn', advertise)
bot.on('spawn', welcome)
