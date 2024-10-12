module.exports = ({
    name: "botinfo", // Имя команды
    aliases: ["ботинфо", "bot-info"], // Алиасы
    code: `
$title[Информация о боте]
$thumbnail[$userAvatar[$clientID]]
$addField[Пинг:;$ping ms;yes]
$addField[Время работы:;$uptime;yes]
$addField[Пользователи:;$allMembersCount;yes]
$addField[Сервера:;$guildCount;yes]
$addField[Библиотека:;aoi.js;yes]
$addField[Разработчик:;<@$clientOwnerIDs>]
    `
})