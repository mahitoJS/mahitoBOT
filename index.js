require('dotenv').config();
const { AoiClient } = require("aoi.js");


const TOKEN = process.env.SECRETSSS;

const client = new AoiClient({
    token: TOKEN, //НУЖНО ЗАМЕНИТЬ НА СВОЕ
    prefix: ".", //НУЖНО ЗАМЕНИТЬ НА СВОЕ
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers"],
    events: ["onMessage", "onInteractionCreate", "onJoin"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "f2hn5j6sjg8cx845nfhskeisnhgher42"
    }
});


client.status({
    name: ".help | $guildCount серверов.",
    type: "COMPETING",
    time: 12
});

client.status({
    name: ".help | v 0.3",
    type: "COMPETING",
    time: 12
});

client.loadCommands("./commands/", true);
client.variables(require("./variables.js"))