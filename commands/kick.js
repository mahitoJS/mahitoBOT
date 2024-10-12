module.exports = ({
    name: "kick", 
    aliases: ["кик"],
    code: `
    $kick[$guildID;$mentioned[1];{пользователь был кикнут из-за: $noMentionMessage}]
    $onlyIf[$rolePosition[$userHighestRole[$authorID;$guildID];$guildID]<$rolePosition[$userHighestRole[$clientID;$guildID];$guildID];не могу, роль бота ниже чем роль участника]
    $sendDm[Вы были кикнуты с сервера **$guildName[$guildID]** по причине: $noMentionMessage;$mentioned[1];]
    $title[Участник кикнут]
    $description[Участник $userTag[$mentioned[1]] был кикнут.] 
    $addField[Причина;$noMentionMessage;no]
    $footer[Выполнил: $username[$authorID]$discriminator[$authorID];$authorAvatar] $addTimestamp
    $onlyIf[$authorID!=$mentioned[1];Вы не можете кикнуть себя] 
    $onlyPerms[kickmembers;У вас нет прав для использования этой команды] 
    $argsCheck[>1;Используйте: .kick [Упоминание] [Причина]]
    $suppressErrors[$description[Роль бота ниже чем у этого участника!]]
    `
});