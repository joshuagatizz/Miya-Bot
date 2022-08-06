const { SlashCommandBuilder, bold } = require('discord.js');
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
                    { name: 'Rock 🪨', value: 'rock' },
                    { name: 'Paper 📃', value: 'paper' },
                    { name: 'Scissors ✂️', value: 'scissors' },
                    { name: 'Choose for me 😵‍💫', value: 'random' },
                )),
	async execute(interaction) {
        const options = ['rock', 'paper', 'scissors'];
        const botChoice = _.sample(options);
        let userChoice = interaction.options.getString('weapon');
        if (userChoice === 'random') userChoice = _.sample(options);

        const winResult = 'you win! ✨';
        const loseResult = 'you lose! 🌧️';
        let result = 'draw 🤝';

        if (userChoice === 'rock' && botChoice === 'scissors') result = winResult;
        else if (userChoice === 'rock' && botChoice === 'paper') result = loseResult;
        else if (userChoice === 'paper' && botChoice === 'rock') result = winResult;
        else if (userChoice === 'paper' && botChoice === 'scissors') result = loseResult;
        else if (userChoice === 'scissors' && botChoice === 'paper') result = winResult;
        else if (userChoice === 'scissors' && botChoice === 'rock') result = loseResult;
        await interaction.reply(`your pick: ${userChoice}\nmy pick  : ${botChoice}\n\n${bold(result)}`);
	},
};