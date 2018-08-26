"use strict";

if (!process.version.startsWith("v8.")) {
  /* eslint-disable no-console */
  console.log("WARNING: reddit-chat.js has only been confirmed");
  console.log("to work with Node.js v8.x.x.");
  console.log("If you are not using Node.js v8.x.x and this library");
  console.log("works, please contact this library's creator.");
  /* eslint-enable no-console */
}

module.exports = {
  Client: require("./structs").Client,
  structs: require("./structs")
};
