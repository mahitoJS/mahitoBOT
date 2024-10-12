module.exports = ({
    name: "cmds developers", //название команды
    code: `$title[🛠️ | Developer]
$description[.reload - Перезагрузка всех комманд.]    
$addTimestamp
$onlyForIDs[$clientOwnerIds;false]
` //структура команды
});