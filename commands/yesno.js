const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yesno')
		.setDescription('Gives a yes or no answer')
		.addStringOption(option =>
			option.setName('question')
				.setDescription('Given question')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.reply('Yes');
	},
};