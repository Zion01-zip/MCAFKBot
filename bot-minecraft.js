const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'REIGNOFKINGS4.aternos.me', // Replace with your server address
    port: '55997', // <<< ADD THIS LINE
    username: 'STAFF', 
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

bot.on('spawn', welcome)
