const axios = require('axios').default;
const { SlashCommandBuilder, EmbedBuilder, bold } = require('discord.js');
const url = 'https://animechan.vercel.app/api/random';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('aniquote')
		.setDescription('Sends random anime quote'),
	async execute(interaction) {
		const message = await axios.get(url)
			.then(result => result.data);
		const embedReply = new EmbedBuilder()
			.setColor('Random')
			.setTitle(message.character)
			.addFields({ name: '\u200b', value: message.quote })
			.setDescription(bold(message.anime));

		await interaction.reply({ embeds: [embedReply] });
	},
};