const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'duyvienamvn.aternos.me', // Replace with your server IP
  port: 25565, // Default port for Minecraft
  username: 'minecraft-bot', // Replace with your bot's name
});

bot.on('spawn', () => {
  console.log('Bot has spawned in the game!');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return; // Ignore messages from the bot
  if (message === 'hello') {
    bot.chat('Hello! I am a bot!');
  }
});

// Error handling
bot.on('error', (err) => {
  console.error('Error occurred:', err);
});

bot.on('end', () => {
  console.log('Bot has disconnected from the server. Attempting to reconnect...');
  // Optionally, you can implement reconnection logic here
});
