const BaseMessage = require("./structs/BaseMessage");
const UserMessage = require("./structs/UserMessage");

const util = {
  createMessageFromSendbird(data) {
    console.log(data);
    if (data.messageType === "user") {
      return new UserMessage(data);
    } else {
      return new BaseMessage(data);
    }
  }
};

module.exports = util;
