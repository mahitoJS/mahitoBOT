module.exports = ({
    name: "hug",
    code: `      
    $description[<@$authorID> обнял(а) <@$mentioned[1]> 😘]
    $image[$randomText[https://cdn.discordapp.com/attachments/1188761125605605377/1288903512230727712/sad-hug-anime.gif?ex=66f6e06f&is=66f58eef&hm=00065b941a760e90c51888132cb7bcea03a4f381d18fa3a907931d15497fb25d&;https://cdn.discordapp.com/attachments/1188761125605605377/1288903512708616284/cuddle-anime.gif?ex=66f6e070&is=66f58ef0&hm=53d6effef3e11a942a53c838f14427051aead86384eb29031c78e9ebff66aaea&;https://cdn.discordapp.com/attachments/1188761125605605377/1288903513157664920/cuddle-bed-hug.gif?ex=66f6e070&is=66f58ef0&hm=5572121326be2ad8906dd0611b84d4d6bd5815bebe38ddcf1709c102ec30b94b&;https://cdn.discordapp.com/attachments/1188761125605605377/1288903513518112841/enage-kiss-anime-hug.gif?ex=66f6e070&is=66f58ef0&hm=550a8eabb4f7ef7f38a6504b68e6233b045da76a8f08249e812533058f164590&]]
    $onlyIf[$mentioned[1]!=$authorID;Самовлюбленность на высоте, но упомяните другово пользователя!]  
    $addTimestamp
`
});