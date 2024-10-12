module.exports = ({
    name: "ban",
    aliases: ["бан"],
    code: `   
$suppressErrors[Роль бота ниже чем у этого участника]  
$ban[$guildID;$mentioned[1];$message[2];забанен пользователем]
$onlyIf[$rolePosition[$userHighestRole[$authorID;$guildID];$guildID]<$rolePosition[$userHighestRole[$clientID;$guildID];$guildID];не могу, роль бота ниже чем роль участника]
$sendDM[Вы были забанены на сервере **$guildName[$guildID]** на $message[2] по причине: $replaceText[$noMentionMessage;$message[2];]]
$title[Участник забанен]
$description[Участник $userTag[$mentioned[1]] был забанен на $message[2] день(дней).]
$addfield[Причина;$replaceText[$noMentionMessage;$message[2];];no]
$footer[Выполнил: $username[$authorID]#$discriminator[$authorID];$authorAvatar] $addTimestamp
$onlyIf[$authorID!=$mentioned[1];Вы не можете забанить себя]
$onlyIf[$clientOwnerIds!=$mentioned[1];Вы не можете забанить разраба, ещё раз и в глаз]
$onlyPerms[banmembers;У вас нет прав!]
$argsCheck[>1;Используйте: .ban [Упоминание] [Длительность (указывается ТОЛЬКО в днях)] [Причина]]  
`
});