require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const GeminiAi = require("./services");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log("Bot is ready!");
});

client.on("messageCreate", async (message) => {
  const imageType = message.attachments.map((e) => e.contentType);
  const toStringImage = imageType.toString();
  const text = message.content;
  const imageUrl = message.attachments.first()?.url;
  if (message.author.bot) return;

  if (imageUrl) {
    const fetchData = await fetch(imageUrl);
    const bufferInfo = await fetchData.arrayBuffer();
    const base64Image = Buffer.from(bufferInfo).toString("base64");
    const aiRes = await GeminiAi(text, base64Image, toStringImage);
    message.reply(aiRes);
  } else {
    const aiRes = await GeminiAi(text);
    message.reply(aiRes);
  }
});

client.login(process.env.DISCORD_TOKEN);
