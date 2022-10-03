const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const _ = require('lodash');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yesno')
		.setDescription('Gives a yes or no answer')
		.addStringOption(option =>
			option.setName('question')
				.setDescription('Given question')
				.setRequired(true)),
	async execute(interaction) {
		const q = interaction.options.getString('question');
		const a = _.sample(['Yes', 'No']);

		const embedQuestion = new EmbedBuilder()
			.setColor('White')
			.setTitle(`Q: ${q}`);
		const embedAnswer = new EmbedBuilder()
			.setColor(a === 'Yes' ? 'Green' : 'Red')
			.setTitle(`A: ${a}`);

		await interaction.reply({ embeds: [embedQuestion, embedAnswer] });
	},
};