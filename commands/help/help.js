module.exports = ({
    name: "help",
    code: `$title[Меню помощи.]
    $addField[🛠️ | Developer - команды которые могут выполниться только создателем бота.;.cmds developers;false]
    $addField[📎 | Утилиты - всякие интересные команды.;.cmds utility;false]
    $addField[📜 | Информация - разная информация, про бота, про сервер, про пользователя.;.cmds information;false]
    $addField[🛡️ | Модерация - команды для модерирования своим сервером, поддержания порядка.;.cmds moderation;false]
    $addField[😏 | RP - команды для взаимодействий.;.cmds rp;false]
    $addTimestamp

`
});
