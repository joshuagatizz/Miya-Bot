const { SlashCommandBuilder, EmbedBuilder, bold } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const _ = require('lodash');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rps')
		.setDescription('Play rock-paper-scissors')
		.addStringOption(option =>
            option
                .setName('weapon')
                .setDescription('Your weapon of choice')
                .setRequired(true)
                .addChoices(
                    { name: 'Rock 🪨', value: 'Rock' },
                    { name: 'Paper 📃', value: 'Paper' },
                    { name: 'Scissors ✂️', value: 'Scissors' },
                    { name: 'Choose for me 😵‍💫', value: 'Random' },
                )),
	async execute(interaction) {
        const options = ['Rock', 'Paper', 'Scissors'];
        const botChoice = _.sample(options);
        let userChoice = interaction.options.getString('weapon');
        if (userChoice === 'Random') userChoice = _.sample(options);

        const winResult = 'You win! ✨';
        const loseResult = 'You lose! 🌧️';
        let result = 'Draw 🤝';

        if (userChoice === 'Rock' && botChoice === 'Scissors') result = winResult;
        else if (userChoice === 'Rock' && botChoice === 'Paper') result = loseResult;
        else if (userChoice === 'Paper' && botChoice === 'Rock') result = winResult;
        else if (userChoice === 'Paper' && botChoice === 'Scissors') result = loseResult;
        else if (userChoice === 'Scissors' && botChoice === 'Paper') result = winResult;
        else if (userChoice === 'Scissors' && botChoice === 'Rock') result = loseResult;

        const embedInfo = new EmbedBuilder()
            .setColor('Random')
            .setTitle(`Your weapon: ${userChoice}`)
            .addFields({ name: '\u200b', value: 'Initiating battle...' });

        const embedResult = new EmbedBuilder()
            .setColor('Gold')
            .setTitle(`${userChoice} vs ${botChoice}`)
            .setDescription(bold(result));

        await interaction.reply({ embeds: [embedInfo] });
        await wait(3000);
        await interaction.followUp({ embeds: [embedResult] });
	},
};