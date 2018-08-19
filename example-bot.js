const RedditChat = require("reddit-chat.js");

const prefix = "!";

const client = new RedditChat.Client();

client.on("ready", timestamp => {
  console.log(`Bot ready at ${timestamp}`);
});

client.on("channelJoin", channel => {
  channel.sendMessage("Hello World!").catch(console.error);
});

client.on("message", message => {
  if (message.author.id === client.user.id) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.trim().slice(prefix.length).split(/ +/g);
  const command = args.shift();
  if (command === "say") {
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
});

client.on("error", console.error);

// You can get these by logging in to your bot's reddit account, opening dev tools,
// going to the Network tab, filtering for WS, opening reddit chat, clicking on
// the resource that appears in dev tools, and copying the user_id and access_token
// parameters from the websocket URL.
client.connect("User ID", "Access Token");
