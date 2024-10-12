module.exports = ({
    name: "userinfo",
    code: ` 
$title[**⊰👥⊱・Информация о пользователе**]
$description[**⚙️ | Профиль**

**👥 | Никнейм :** <@$mentioned[1]>
**🖇️ | Айди:** $mentioned[1]
**#️⃣ | Дискриминатор**: #$discriminator[$mentioned[1]]

**🛠️ | Информация**

**⭐ | Активность:**   $userActivity[$guildID;$mentioned[1]]
**🏅 | Банджики:** $userBadges[$mentioned[1];, ]
**🔒 | Статус:** $userStatus[$guildID;$mentioned[1]]
**🔒 |Статус пидораса: ** $randomText[не пидорас;пидорас]
$footer[Запросил: $username[$authorID]]
$thumbnail[$userAvatar[$mentioned[1]]]
$addTimestamp
`
});