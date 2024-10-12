module.exports = ({
    name: "kiss",
    code: `      
    $description[$username[$authorID] поцеловал(а) $username[$mentioned[1]]! 😘]
    $image[$randomText[https://cdn.discordapp.com/attachments/1188761125605605377/1288897559615770697/jun-lemon-loved.gif?ex=66f6dae4&is=66f58964&hm=8135226d7c23acc235aca72918d128be40b03e6206971a5d6085822fd4a1b0e5&;https://cdn.discordapp.com/attachments/1188761125605605377/1288897560022482974/anime-matching-pfp-by-val.gif?ex=66f6dae4&is=66f58964&hm=3fb7d31404ba4ee9e43c8fa0e08a84d6e14ed584ceb89d7712233c534476cd6d&;https://cdn.discordapp.com/attachments/1188761125605605377/1288897560479666308/kiss-anime-anime.gif?ex=66f6dae4&is=66f58964&hm=14d63507dc4ce975349ca443b50b760a585dcdd6dcc6587f2cc84e02bb585a2f&]]
    $onlyIf[$mentioned[1]!=$authorID;Самовлюбленность на высоте, но упомяните другово пользователя!]  
    $addTimestamp
`
});