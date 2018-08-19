const User = require("./User");

class ChannelUser extends User {
  constructor(data, channel) {
    super(data);
    this.channel = channel;
  }
}

module.exports = ChannelUser;
