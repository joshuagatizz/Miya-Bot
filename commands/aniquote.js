const axios = require('axios').default;
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('aniquote')
		.setDescription('Sends random anime quote'),
	async execute(interaction) {
		const message = await axios.get('https://animechan.vercel.app/api/random').then(result => result.data);
		await interaction.reply(
			`Quote by **${message.character}** from **${message.anime}**\`\`\`"${message.quote}"\n\`\`\``,
		);
	},
};