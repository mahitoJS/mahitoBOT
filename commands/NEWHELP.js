module.exports = [{
    name: "help menu",
    code: ` $title[Хелп меню (БЕТА)]
    $color[Random]
      $addSelectMenu[1;string;1s;Помощь;0;1;false;Информация:Информация:2s:false:📜;Модерация:Модерация:3s:false:🛡️;РП:Взаимодействия:4s:false:😏;Утилиты:Интересности:5s:false:📎] `
    
    // YouID, YouID1 и YouID2 - замените на любое значение
    // string - позволяет добавлять пользовательские варианты выбора
    // 0 - минимальное количество для выбора в меню
    // 1 - максимальное количество для выбора в меню
    // false - говорит о том что это меню можно использовать, если заменить на true то вы не сможете пользоваться меню
    // Название меню, Название 1, Описание 1... - замените на то что вам требуется
    },{
    name: "1s", // Или на то что вы заменили
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $onlyIf[$advancedTextSplit[$interactionData[1s];_;2]==$interactionData[author.id];{newEmbed:{title:📜 | Информация}{description:.ping - Посмотреть пинг бота.
.userinfo - Посмотреть информацию о участнике (ТОЛЬКО ПОЛЬЗОВАТЕЛЬ, не доделанно)
.botinfo - Посмотреть информацию о боте.
.invite - Пригласить бота.}{footer:$addTimestamp}{color:Random}} {ephemeral}
    {interaction}]
    
    $onlyIf[$advancedTextSplit[$interactionData[1s];_;2]!=$interactionData[author.id];{newEmbed:{title:Ошибка!}{description:Данная команда пренадлежит не вам!}{footer:$addTimestamp}} {ephemeral}
    {interaction}]


    $onlyIf[$interactionData[values[0]]==2s;]` // Или на то что вы заменили
    },
    {
      
    name: "1s", // Или на то что вы заменили
    type: "interaction",
    prototype: "selectMenu",
    code: `
$onlyIf[$advancedTextSplit[$interactionData[3s];_;2]==$interactionData[author.id];{newEmbed:{title:🛡️ | Модерация}{description:.kick - Кик пользователя.
.ban - Бан пользователя на время.
.mute - Мут пользователя на время. (снимать вручную)
.unban - Снять бан с пользователя.}{footer:$addTimestamp}{color:Random}} {ephemeral}
    {interaction}]
    
    $onlyIf[$advancedTextSplit[$interactionData[3s];_;2]!=$interactionData[author.id];{newEmbed:{title:Ошибка!}{description:Данная команда пренадлежит не вам!}{footer:$addTimestamp}} {ephemeral}
    {interaction}]


    $onlyIf[$interactionData[values[0]]==3s;]` // Или на то что вы заменили
    },{
      name: "1s", // Или на то что вы заменили
      type: "interaction",
      prototype: "selectMenu",
      code: `
      $onlyIf[$advancedTextSplit[$interactionData[4s];_;2]==$interactionData[author.id];{newEmbed:{title:😏 | RP}{description:.angry - Злиться.
    .kiss - Поцеловать пользователя.
    .hug - Обнять пользователя.
    .pat - Погладить пользователя.
    .sad - Грустить.}{footer:$addTimestamp}{color:Random}} {ephemeral}
      {interaction}]
      
      $onlyIf[$advancedTextSplit[$interactionData[4s];_;2]!=$interactionData[author.id];{newEmbed:{title:Ошибка!}{description:Данная команда пренадлежит не вам!}{footer:$addTimestamp}} {ephemeral}
      {interaction}]
  
  
      $onlyIf[$interactionData[values[0]]==4s;]` // Или на то что вы заменили
      },{
        name: "1s", // Или на то что вы заменили
        type: "interaction",
        prototype: "selectMenu",
        code: `
        $onlyIf[$advancedTextSplit[$interactionData[5s];_;2]==$interactionData[author.id];{newEmbed:{title:📎 | Утилиты}{description:Пусто (Пока что)}{footer:$addTimestamp}{color:Random}} {ephemeral}
        {interaction}]
        
        $onlyIf[$advancedTextSplit[$interactionData[5s];_;2]!=$interactionData[author.id];{newEmbed:{title:Ошибка!}{description:Данная команда пренадлежит не вам!}{footer:$addTimestamp}} {ephemeral}
        {interaction}]
    
    
        $onlyIf[$interactionData[values[0]]==5s;]` // Или на то что вы заменили
        }]