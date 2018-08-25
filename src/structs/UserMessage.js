"use strict";

const BaseMessage = require("./BaseMessage");

/**
 * The UserMessage class.
 * @extends BaseMessage
 */
class UserMessage extends BaseMessage {

  /**
   * @param {Object} data - The Sendbird message object.
   * @param {BaseChannel} channel - The channel the message was sent in.
   * @hideconstructor
   */
  constructor(data, channel) {
    super(data, channel);

    /**
     * The author of the message.
     * @type {User}
     */
    this.author = new User(data.sender);

    /**
     * The channel member of the message.
     * @type {ChannelMember}
     */
    this.channelMember = new ChannelMember(this.author, this.channel);

    /**
     * The content of the message.
     * @type {string}
     */
    this.content = data.message;
  }

  /**
   * Any /u/ mentions or /r/ mentions in the message. Returns the name after the /u/ or /r/.
   * @type {{users: Array<string>, subreddits: Array<string>}}
   */
  get mentions() {
    if (!this._mentionedUsers) {
      this._mentionedUsers = utils.getMentionedUsersFromString(this.content);
    }
    if (!this._mentionedSubreddits) {
      this._mentionedSubreddits = utils.getMentionedSubredditsFromString(this.content);
    }
    return {
      users: this._mentionedUsers,
      subreddits: this._mentionedSubreddits
    };
  }
}

module.exports = UserMessage;

const User = require("./User");
const ChannelMember = require("./ChannelMember");
const utils = require("../utils.js");
