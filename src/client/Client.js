const EventEmitter = require("events");
const errors = require("../errors");
const structs = require("../structs");
const utils = require("../utils.js");
const Sendbird = require("sendbird");

class Client extends EventEmitter {
  /**
   * Create a new Reddit Chat Client.
   * @constructor Client
   * @extends EventEmitter
   * @param {object} options - Configuration options.
   * @public
   */
  constructor(options) {
    super();
    this.settings = {
      autoJoinChannels: true
    };
    if (typeof options === "object") {
      if (options.autoJoinChannels !== undefined) this.settings.autoJoinChannels = options.autoJoinChannels;
    }
    this._sendbird = new Sendbird({
      appId: "2515BDA8-9D3A-47CF-9325-330BC37ADA13"
    });
    this._sendbirdChannelHandler = new this.sendbird.ChannelHandler();
    this.createChannelEventEmitters();
    this.sendbird.addChannelHandler("channelHandler", this.sendbirdChannelHandler);
  }
  /**
   * Get the Sendbird instance of the client.
   * @readonly
   * @private
   */
  get sendbird() {
    return this._sendbird;
  }
  get sendbirdUser() {
    return this._sendbirdUser;
  }
  get sendbirdChannelHandler() {
    return this._sendbirdChannelHandler;
  }
  /**
   * Connect to reddit chat.
   * @param {string} userID - The user ID of the bot.
   * @param {string} accessToken - The access token of the bot.
   * @throws {TypeError} Non-string arguments.
   * @returns {Promise} Resolves if successful, else rejects.
   * @public
   */
  connect(userID, accessToken) {
    return new Promise((resolve, reject) => {
      this.sendbird.connect(userID, accessToken, (user, error) => {
        if (error) return reject(error);
        this.user = new structs.User(user);
        this.emit("ready", Date.now());
        resolve();
      });
    });
  }
  createChannelEventEmitters() {
    const handler = this.sendbirdChannelHandler;
    handler.onMessageReceived = (channel, message) => {
      message = utils.createMessageFromSendbird(message);
      message.channel = new structs.BaseChannel(channel);
      this.emit("message", message);
    };
    handler.onUserReceivedInvitation = (channel, inviter, invitedUsers) => {
      invitedUsers.forEach(user => {
        if (user.nickname === this.sendbirdUser.nickname) {
          this.emit("channelInvite", channel, inviter);
          if (this.settings.autoJoinChannels) {
            channel.acceptInvitation((channel, error) => {
              if (error) this.emit("error", error);
            });
          }
        } else {
          this.emit("channelUserInvite", user, channel, inviter);
        }
      });
    };
    handler.onUserJoined = (channel, user) => {
      if (user.userId === this.sendbirdUser.userId) {
        this.emit("channelJoin", channel);
      } else {
        this.emit("channelUserJoin", user, channel);
      }
    };
    handler.onUserLeft = (channel, user) => {
      if (user.userId === this.sendbirdUser.userId) {
        this.emit("channelLeave", channel);
      } else {
        this.emit("channelUserLeave", user, channel);
      }
    };
  }
}

module.exports = Client;
