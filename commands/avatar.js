const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Sends the avatar of the server or a user')
		.addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Sends a user\'s avatar')
                .addUserOption(option => option.setName('target').setDescription('The user')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Sends server\'s avatar')),
	async execute(interaction) {
        const embedReply = new EmbedBuilder()
            .setColor('Random')
            .setTimestamp();

        if (interaction.options.getSubcommand() === 'user') {
            const user = interaction.options.getUser('target');
            if (user) {
                embedReply.setImage(`${user.displayAvatarURL()}?size=1024`);
                embedReply.setFooter({ text: user.tag });
            } else {
                embedReply.setImage(`${interaction.user.displayAvatarURL()}?size=1024`);
                embedReply.setFooter({ text: interaction.user.tag });
            }
        } else if (interaction.options.getSubcommand() === 'server') {
            embedReply.setImage(`${interaction.guild.iconURL()}?size=1024`);
            embedReply.setFooter({ text: interaction.guild.name });
        }

        await interaction.reply({ embeds: [embedReply] });
	},
};