require('dotenv').config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('@discordjs');
const { CLIENT_ID: clientId, DISCORD_TOKEN: discordToken } = process.env;

const rest = new REST({ version: '10' }).setToken(discordToken);

rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);