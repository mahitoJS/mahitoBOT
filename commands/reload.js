module.exports = ({
    name: "reload",
    code: `
    $updateCommands
    $title[Успешно!]
    $description[Команды бота были \`перезагружены!\`]
    $addField[Пинг бота:;$ping;yes]
    $addField[Время работы:;$uptime;yes]
    $addTimestamp
    $onlyForIDs[$clientOwnerIds;$title[Ошибка!] $description[Недостаточно прав!]]
`
});