module.exports = ({
    name: "mute",
    aliases: ["мут"],
    code: `   
$timeoutMember[$guildID;$mentioned[1];$message[2];false]
$onlyIf[$rolePosition[$userHighestRole[$authorID;$guildID];$guildID]<$rolePosition[$userHighestRole[$clientID;$guildID];$guildID];не могу, роль бота ниже чем роль участника]
$sendDM[Вы были замучены на сервере **$guildName[$guildID]** на $message[2] по причине: $replaceText[$noMentionMessage;$message[2];];$mentioned[1]]
$title[Участник замучен]
$description[Участник $userTag[$mentioned[1]] был замучен на $message[2].
(Чтобы снять наказание раньше, просто уберите тайм аут у пользователя.)]
$addfield[Причина;$replaceText[$noMentionMessage;$message[2];];no]
$footer[Выполнил: $username[$authorID]#$discriminator[$authorID];$authorAvatar] $addTimestamp
$color[Random]
$onlyIf[$authorID!=$mentioned[1];Вы не можете замутить себя]
$onlyPerms[administrator;У вас нет прав!]
$argsCheck[>1;Используйте: .mute [Упоминание] [Длительность (1d, 1s, 1m)] [Причина]]    

`
});