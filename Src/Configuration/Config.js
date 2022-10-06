const { ButtonStyle } = require("discord.js");
require("dotenv").config();
module.exports = {
    Token: process.env.Token || "MTAxODg5MDU3MzYyNjc0NDg0Mg.G80yg7.Swqe3xu5oqHmUtUm5dSVWWTQ-_M9GFLlkbvLKI", //Here Goes Your TOKEN
    Prefix: process.env.Prefix || "?", //Here Goes Your Prefix
    Client: {
        ID: process.env.ClientID || "937003232474046554", //Here Goes Your Bot Client Id
        Secret: process.env.ClientSecret || "" //Here Goes Your Bot Client Secret
    },
    button: {
        "styles": {
            "grey": ButtonStyle.Secondary,
            "blue": ButtonStyle.Primary,
            "link": ButtonStyle.Link,
            "red": ButtonStyle.Danger,
            "green": ButtonStyle.Success
        }
    },
    MongoData: process.env.MongoDB || "mongodb+srv://Apera:6291@cluster0.7qkb4.mongodb.net/aperaCanary", //Here Goes Your MongoDb Url
    EmbedColor: process.env.EmbedColor || "#10a464", //Here Goes Your EmbedColor
    Owners: ["588659781930188811"],
    links: {
        invite: "https://moebot.xyz/vote",
        bg: "https://moebot.xyz/vote",
        support: "https://moebot.xyz/vote",
        vote: "https://moebot.xyz/vote"
    }
}