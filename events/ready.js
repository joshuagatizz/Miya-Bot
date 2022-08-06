const { ActivityType } = require('discord.js');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user.setPresence({
			activities: [{ name: 'fireworks 🎆', type: ActivityType.Watching }],
			status: 'online',
		});
		console.log(`#ready, logged in as ${client.user.tag}`);
	},
};