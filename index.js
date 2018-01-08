((bot, config) => bot
    .on('ready', () => bot.user.bot
        && (console.error('This bot is only useable by users! Please enter your user token.'), process.exit(1))
        || console.log(`Connected to ${bot.user.tag} (ID: ${bot.user.id})\nWatching ${bot.guilds.size} guilds\nPrefix: ${config.prefix}`))
    .on('message', msg =>
        msg.author.id === bot.user.id &&
        msg.content === `${config.prefix}ping` &&
        msg.edit('Ping!').then(() => msg.edit(`Pong! \`${msg.editedTimestamp - msg.createdTimestamp}ms\``)))
    .login(config.token)
)(new (require('discord.js').Client), require('./config'));