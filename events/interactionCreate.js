module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(
			`#interaction by ${interaction.user.tag} in server #${interaction.guild.name} channel #${interaction.channel.name}`);
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) return;

		try {
			command.execute(interaction);
		} catch (error) {
			console.error(error);
			interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};