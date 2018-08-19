const ChannelUser = require("./ChannelUser");
const utils = require("../utils.js");

class BaseChannel {
  constructor(data) {
    this._sendbirdObject = data;
    this.type = data.channelType;
    this.ownerID = data.customType;
    this.createdTimestamp = data.createdAt;
    this.invitedTimestamp = data.invitedAt;
    this.inviter = data.inviter;
    this.isFrozen = data.isFrozen;
    this.isPublic = data.isPublic;
    this.memberCount = data.memberCount;
    this.name = data.name;
    this.url = data.url;
    this.lastMessage = utils.createMessageFromSendbird(data.lastMessage);
    this.members = data.members.map(m => new ChannelUser(m, this));
  }
  get isTyping() {
    return this._sendbirdObject.isTyping();
  }
  sendMessage(string) {
    if (typeof string !== "string") string += "";
    return new Promise((resolve, reject) => {
      this._sendbirdObject.sendUserMessage(string, (message, error) => {
        if (error) return reject(error);
        message = utils.createMessageFromSendbird(message);
        message.channel = this;
        resolve(message);
      });
    });
  }
}

module.exports = BaseChannel;
