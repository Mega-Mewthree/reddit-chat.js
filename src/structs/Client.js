"use strict";

const EventEmitter = require("events");
const ClientUser = require("./ClientUser");
const User = require("./User");
const BaseChannel = require("./BaseChannel");
const PartialChannel = require("./PartialChannel");
const ChannelMember = require("./ChannelMember");
const utils = require("../utils.js");
const Sendbird = require("sendbird");

/**
 * The class used to access the reddit chat API.
 * @extends EventEmitter
 */
class Client extends EventEmitter {

  /**
   * @param {Object} options - Configuration options.
   * @param {boolean} [options.autoJoinChannels = true] - Set the bot to automatically join channels when invited.
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
    this._sendbirdChannelHandler = new this._sendbird.ChannelHandler();
    this.createChannelEventEmitters();
    this._sendbird.addChannelHandler("channelHandler", this._sendbirdChannelHandler);
  }

  /**
   * Connect to reddit chat.
   * @param {string} userID - The user ID of the bot.
   * @param {string} accessToken - The access token of the bot.
   * @returns {Promise} Resolves if successful.
   */
  connect(userID, accessToken) {
    return new Promise((resolve, reject) => {
      this._sendbird.connect(userID, accessToken, (user, error) => {
        if (error) return reject(error);
        this.user = new ClientUser(user, this._sendbird);
        if (this.settings.autoJoinChannels) {
          this.user.fetchAllChannels().then(channels => {
            let len = channels.length;
            let channel;
            while (len--) {
              channel = channels[len];
              if (channel.invitationPending) {
                channel.acceptInvitation().catch(error => this.emit("error", error));
              }
            }
            this.emit("ready", Date.now());
            resolve();
          }).catch(reject);
        } else {
          this.emit("ready", Date.now());
          resolve();
        }
      });
    });
  }

  /**
   * Creates the event emitters.
   * @private
   * @returns {void}
   */
  createChannelEventEmitters() {
    const handler = this._sendbirdChannelHandler;
    handler.onMessageReceived = (channel, message) => {
      message = utils.createMessageFromSendbird(message, new BaseChannel(channel));
      this.emit("message", message);
    };
    handler.onMessageDeleted = (channel, messageID) => {
      this.emit("messageDelete", messageID);
    };
    handler.onUserReceivedInvitation = (channel, inviter, invitedUsers) => {
      channel = new BaseChannel(channel);
      inviter = new User(inviter);
      invitedUsers.forEach(user => {
        user = new User(user);
        if (user.username === this.user.username) {
          this.emit("channelInvite", channel, new ChannelMember(inviter, channel));
          if (this.settings.autoJoinChannels) {
            channel.acceptInvitation().catch(error => this.emit("error", error));
          }
        } else {
          this.emit("channelMemberInvite", channel, new ChannelMember(user, channel), new ChannelMember(inviter, channel));
        }
      });
    };
    handler.onUserJoined = (channel, user) => {
      channel = new BaseChannel(channel);
      user = new User(user);
      if (user.id === this.user.id) {
        this.emit("channelJoin", channel);
      } else {
        this.emit("channelMemberJoin", channel, new ChannelMember(user, channel));
      }
    };
    handler.onUserLeft = (channel, user) => {
      channel = new BaseChannel(channel);
      user = new User(user);
      if (user.id === this.user.id) {
        this.emit("channelLeave", channel);
      } else {
        this.emit("channelMemberLeave", channel, new ChannelMember(user, channel));
      }
    };
    handler.onUserBanned = (channel, user) => {
      channel = new BaseChannel(channel);
      user = new User(user);
      if (user.id === this.user.id) {
        this.emit("channelLeave", channel);
        this.emit("channelBan", channel);
      }
      this.emit("channelMemberBan", channel, new ChannelMember(user, channel));
    };
    handler.onUserUnbanned = (channel, user) => {
      channel = new BaseChannel(channel);
      user = new User(user);
      this.emit("channelMemberUnban", channel, new ChannelMember(user, channel));
    };
    handler.onChannelChanged = channel => {
      channel = new BaseChannel(channel);
      this.emit("channelUpdate", channel);
    };
    handler.onChannelDeleted = (url, type) => {
      const channel = new PartialChannel({
        url,
        type
      });
      this.emit("channelDelete", channel);
    };
    handler.onChannelFrozen = channel => {
      channel = new BaseChannel(channel);
      this.emit("channelLock", channel);
    };
    handler.onChannelUnfrozen = channel => {
      channel = new BaseChannel(channel);
      this.emit("channelUnlock", channel);
    };
    handler.onTypingStatusUpdated = channel => {
      channel = new BaseChannel(channel);
      this.emit("typingUpdate", channel);
    };
  }
}

/**
 * Ready event.
 * @event Client#ready
 * @param {number} timestamp - The UNIX timestamp the client was ready at.
 */

/**
 * Error event.
 * @event Client#error
 * @param {Error} error - An error that occurred.
 */

/**
 * Message event.
 * @event Client#message
 * @param {UserMessage|BaseMessage} message - The received message.
 */

/**
 * Message delete event.
 * @event Client#messageDelete
 * @param {number} id - The ID of the deleted message.
 */

/**
 * Channel invite event.
 * @event Client#channelInvite
 * @param {BaseChannel} channel - The channel the client was invited to.
 * @param {ChannelMember} inviter - The channel member who invited the client user.
 */

/**
 * Channel member invite event.
 * @event Client#channelMemberInvite
 * @param {BaseChannel} channel - The channel the client was invited to.
 * @param {ChannelMember} user - The invited user.
 * @param {ChannelMember} inviter - The channel member who invited the client user.
 */

/**
 * Channel join event.
 * @event Client#channelJoin
 * @param {BaseChannel} channel - The channel the client joined.
 */

/**
 * Channel member join event.
 * @event Client#channelMemberJoin
 * @param {BaseChannel} channel - The channel the member joined.
 * @param {ChannelMember} member - The member that joined the channel.
 */

/**
 * Channel leave event.
 * @event Client#channelLeave
 * @param {BaseChannel} channel - The channel the client left.
 */

/**
 * Channel member leave event.
 * @event Client#channelMemberLeave
 * @param {BaseChannel} channel - The channel the member left.
 * @param {ChannelMember} member - The member that left the channel.
 */

/**
 * Channel ban event.
 * @event Client#channelBan
 * @param {BaseChannel} channel - The channel the client was banned from.
 */

/**
 * Channel member ban event.
 * @event Client#channelMemberBan
 * @param {BaseChannel} channel - The channel the member was banned from.
 * @param {ChannelMember} member - The member that was banned.
 */

/**
 * Channel member unban event.
 * @event Client#channelMemberUnban
 * @param {BaseChannel} channel - The channel the member was unbanned from.
 * @param {ChannelMember} user - The user that was unbanned.
 */

/**
 * Channel member unban event.
 * @event Client#channelMemberUnban
 * @param {BaseChannel} channel - The channel the member was unbanned from.
 * @param {ChannelMember} user - The user that was unbanned.
 */

/**
 * Channel update event.
 * @event Client#channelUpdate
 * @param {BaseChannel} channel - The channel that was updated.
 */

/**
 * Channel delete event.
 * @event Client#channelDelete
 * @param {PartialChannel} channel - The channel that was deleted.
 */

/**
 * Channel locked event.
 * @event Client#channelLocked
 * @param {BaseChannel} channel - The channel that was locked.
 */

/**
 * Channel unlocked event.
 * @event Client#channelUnlocked
 * @param {BaseChannel} channel - The channel that was unlocked.
 */

/**
 * Typing update event.
 * @event Client#typingUpdate
 * @param {BaseChannel} channel - The channel that had a change in typing status.
 */

module.exports = Client;
