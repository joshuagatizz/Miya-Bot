const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('heeee')
		.setDescription('Sends Shimamura\'s heeee-ing GIF'),
	async execute(interaction) {
		await interaction.reply('https://cdn.discordapp.com/attachments/947808071407775755/950404616523223070/20220307_214807.gif');
	},
};