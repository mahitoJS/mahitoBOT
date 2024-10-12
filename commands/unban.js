module.exports = ({
    name: "unban",
    code: `$unban[$guildID;$message[1];false]
    $suppressErrors[$title[Ошибка!] $description[Этот пользователь не забанен!]]
    $title[Успешно!]
    $description[Вы сняли бан с пользователя $message]
    $addTimestamp
`
});