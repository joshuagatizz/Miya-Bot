const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Sends info about server or a user')
		.addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info about a user')
                .addUserOption(option => option.setName('target').setDescription('The user')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Info about the server')),
	async execute(interaction) {
        const embedReply = new EmbedBuilder().setColor('Fuchsia');

        if (interaction.options.getSubcommand() === 'user') {
            const user = interaction.options.getUser('target');
            if (user) {
                embedReply.setThumbnail(user.displayAvatarURL());
                embedReply.setTitle(user.tag);
                embedReply.setDescription(`Id: ${user.id}`);
            } else {
                embedReply.setThumbnail(interaction.user.displayAvatarURL());
                embedReply.setTitle(interaction.user.tag);
                embedReply.setDescription(`Your Id: ${interaction.user.id}`);
            }
        } else if (interaction.options.getSubcommand() === 'server') {
            embedReply.setThumbnail(interaction.guild.iconURL());
            embedReply.setTitle(interaction.guild.name);
            embedReply.setDescription(`Id: ${interaction.guild.id}\nTotal members: ${interaction.guild.memberCount}`);
        }

        await interaction.reply({ embeds: [embedReply] });
	},
};