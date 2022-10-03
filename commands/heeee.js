const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const gif = 'https://cdn.discordapp.com/attachments/947808071407775755/950404616523223070/20220307_214807.gif';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('heeee')
		.setDescription('Sends Shimamura\'s heeee-ing GIF'),
	async execute(interaction) {
		const embedReply = new EmbedBuilder()
			.setImage(gif)
			.setColor('Random');

		await interaction.reply({ embeds: [embedReply] });
	},
};