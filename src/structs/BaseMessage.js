class BaseMessage {
  constructor(data) {
    this._sendbirdObject = data;
    this.data = data.data;
    this.id = data.messageId;
    this.type = data.messageType;
    this.customType = data.customType;
    this.createdTimestamp = data.createdAt;
    this.updatedTimestamp = data.updatedTimestamp;
    this.channel = {
      url: data.channelUrl,
      type: data.channelType
    };
  }
  get createdAt() {
    return this._createdAt || (this._createdAt = new Date(this.createdTimestamp));
  }
  get updatedAt() {
    return this._updatedAt || (this._updatedAt = new Date(this.updatedTimestamp));
  }
}

module.exports = BaseMessage;
