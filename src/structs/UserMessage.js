const BaseMessage = require("./BaseMessage");
const User = require("./User");

class UserMessage extends BaseMessage {
  constructor(data) {
    super(data);
    this.author = new User(data.sender);
    this.reqID = data.reqId;
    this.content = data.message;
  }
}

module.exports = UserMessage;
