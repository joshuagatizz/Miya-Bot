const { SlashCommandBuilder } = require('discord.js');
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
		const ans = _.sample(['yes', 'no']);
		await interaction.reply(ans);
	},
};