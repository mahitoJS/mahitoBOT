module.exports = ({
    name: "pat",
    code: `      
    $description[<@$authorID> погладил(а) <@$mentioned[1]>! 😘]
    $image[$randomText[https://cdn.discordapp.com/attachments/1188761125605605377/1288904178193797120/menhera-chan-anime.gif?ex=66f6e10e&is=66f58f8e&hm=83bb65bf4202e214b8d629e1650f2aa80b0f1b2f611253079f47ae9c944a9bbb&;https://cdn.discordapp.com/attachments/1188761125605605377/1288904178672078910/pat-pat.gif?ex=66f6e10e&is=66f58f8e&hm=94e93df3534e388dad8f0b38be8e91d55e23ad3eee08b5cb8a5a3ce14267d976&;https://cdn.discordapp.com/attachments/1188761125605605377/1288904179343163443/anime-pat.gif?ex=66f6e10f&is=66f58f8f&hm=7f4569df39b2f1155d633d95881a617f45e7d98721895a6f8ead11eca97e913d&;https://cdn.discordapp.com/attachments/1188761125605605377/1288904179775180842/tsumiki-anime.gif?ex=66f6e10f&is=66f58f8f&hm=6b10d55e06efd56751e6fa1436f6a04d239a9fb080537e424d18e782180f474c&]]
    $onlyIf[$mentioned[1]!=$authorID;Самовлюбленность на высоте, но упомяните другово пользователя!]   
    $addTimestamp
`
});