"use strict";

/**
 * The BaseChannel class.
 */
class BaseChannel {

  /**
   * @param {Object} data - The Sendbird channel object.
   * @hideconstructor
   */
  constructor(data) {
    const parsedData = JSON.parse(data.data);
    this._sendbirdObject = data;

    /**
     * The channel's type.
     * @type {string}
     */
    this.type = data.channelType;

    /**
     * The user ID of the channel owner.
     * @type {string}
     */
    this.ownerID = data.customType;

    /**
     * The description of the channel.
     * @type {string}
     */
    this.description = parsedData.room_description;

    /**
     * The UNIX timestamp of the channel's creation.
     * @type {number}
     */
    this.createdTimestamp = data.createdAt;

    /**
     * The UNIX timestamp of when the client user was invited.
     * @type {number}
     */
    this.invitedTimestamp = data.invitedAt;

    /**
     * The ChannelMember that invited the client user.
     * @type {ChannelMember}
     */
    this.inviter = new ChannelMember(data.inviter);

    /**
     * The channel name.
     * @type {string}
     */
    this.name = data.name;

    /**
     * The channel url.
     * @type {string}
     */
    this.url = data.url;


    if (data.lastMessage) {
      /**
       * The last message in this channel.
       * @type {UserMessage|BaseMessage}
       */
      this.lastMessage = utils.createMessageFromSendbird(data.lastMessage, this);
    }

    /**
     * The subreddit the channel belongs to.
     * @type {Subreddit}
     */
    this.subreddit = new Subreddit({
      id: parsedData.subreddit.id,
      name: parsedData.subreddit.name,
      nsfw: parsedData.subreddit.nsfw,
      description: parsedData.subreddit.description,
      iconImageURL: parsedData.subreddit.icon_img,
      themeColor: parsedData.subreddit.key_color.slice(1)
    });
  }

  /**
   * Indicates if the channel is public.
   * @type {boolean}
   * @readonly
   */
  get isPublic() {
    return this._sendbirdObject.isPublic;
  }

  /**
   * Indicates if the channel is locked.
   * @type {boolean}
   * @readonly
   */
  get isLocked() {
    return this._sendbirdObject.isFrozen;
  }

  /**
   * Indicates if an invitation is pending for the channel.
   * @type {boolean}
   * @readonly
   */
  get invitationPending() {
    return this._sendbirdObject.myMemberState === "invited" ? true : false;
  }

  /**
   * The Date the channel was created at.
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return this._createdAt || (this._createdAt = new Date(this.createdTimestamp));
  }

  /**
   * Indicates if the client user is in the channel.
   * @type {boolean}
   * @readonly
   */
  get inChannel() {
    return this._sendbirdObject.myMemberState === "joined" ? true : false;
  }

  /**
   * The number of members in this channel.
   * @type {number}
   * @readonly
   */
  get memberCount() {
    return this._sendbirdObject.memberCount;
  }

  /**
   * The members in this channel.
   * @type {Array<ChannelMember>}
   * @readonly
   */
  get members() {
    return this._sendbirdObject.members.map(m => new ChannelMember(m, this));
  }

  /**
   * Checks if the client user has moderation permissions in the channel.
   * @returns {Promise<boolean>} Indicates if the client user has moderation permissions in the channel.
   */
  async fetchIsModerator() {
    await this.refresh();
    return this._sendbirdObject.myRole === "operator";
  }

  /**
   * Accepts a pending channel invitation.
   * @returns {Promise} Resolves if successful.
   */
  acceptInvitation() {
    return new Promise((resolve, reject) => {
      this._sendbirdObject.acceptInvitation((_, error) => {
        if (error) return reject(error);
        resolve();
      });
    });
  }

  /**
   * Send a message to the channel.
   * @param {string} string - The message to send.
   * @returns {Promise<UserMessage>} The created message.
   */
  sendMessage(string = "") {
    if (typeof string !== "string") string += "";
    return new Promise((resolve, reject) => {
      this._sendbirdObject.sendUserMessage(string, (message, error) => {
        if (error) return reject(error);
        message = new UserMessage(message);
        message.channel = this;
        resolve(message);
      });
    });
  }

  /**
   * Starts the typing indicator. Lasts for a few seconds.
   */
  startTyping() {
    this._sendbirdObject.startTyping();
  }

  /**
   * Stops the typing indicator.
   */
  stopTyping() {
    this._sendbirdObject.endTyping();
  }

  /**
   * Refreshes the channel's Sendbird instance.
   * @returns {Promise} Resolves if successful.
   */
  refresh() {
    return new Promise((resolve, reject) => {
      this._sendbirdObject.update((_, error) => {
        if (error) return reject(error);
        resolve();
      });
    });
  }

  /**
   * Refreshes the channel's Sendbird instance.
   * @param {User} user - The User to convert to a ChannelMember.
   * @returns {ChannelMember} The ChannelMember.
   */
  channelMember(user) {
    return new ChannelMember(user, this);
  }

  /**
   * Kicks a user from the channel.
   * @param {ChannelMember|User|string} user - The user to kick.
   * @param {number} seconds - The amount of time, in seconds, to kick the user.
   * @returns {Promise} Resolves if successful.
   */
  kick(user, seconds) {
    if (user instanceof ChannelMember) {
      return user.kick(seconds);
    }
    return new Promise((resolve, reject) => {
      if (!user) return reject(new TypeError("Not a valid user."));
      if (user instanceof User || user instanceof ClientUser) {
        this._sendbirdObject.banUserWithUserId(user.id, seconds, (_, error) => {
          if (error) return reject(error);
          resolve();
        });
      } else if (typeof user === "string") {
        this._sendbirdObject.banUserWithUserId(user, seconds, (_, error) => {
          if (error) return reject(error);
          resolve();
        });
      } else {
        reject(new TypeError("Not a valid user."));
      }
    });
  }

  /**
   * Bans a user from the channel.
   * @param {ChannelMember|User|string} user - The user to kick.
   * @returns {Promise} Resolves if successful.
   */
  ban(user) {
    if (user instanceof ChannelMember) {
      return user.ban();
    }
    return new Promise((resolve, reject) => {
      if (!user) return reject(new TypeError("Not a valid user."));
      if (user instanceof User || user instanceof ClientUser) {
        this._sendbirdObject.banUserWithUserId(user.id, (_, error) => {
          if (error) return reject(error);
          resolve();
        });
      } else if (typeof user === "string") {
        this._sendbirdObject.banUserWithUserId(user, (_, error) => {
          if (error) return reject(error);
          resolve();
        });
      } else {
        reject(new TypeError("Not a valid user."));
      }
    });
  }

  /**
   * Invites users to the channel.
   * @param {Array<User|ChannelMember>} user - The user to kick.
   * @returns {Promise} Resolves if successful.
   */
  inviteUsers(users = []) {
    return new Promise(async (resolve, reject) => {
      users = users.map(u => {
        if (u instanceof ChannelMember || u instanceof User || user instanceof ClientUser) return u.id;
        if (typeof u !== "string") return reject(new TypeError("Not a valid user."));
        return u;
      });
      this._sendbirdObject.inviteWithUserIds(users, (_, error) => {
        if (error) return reject(error);
        resolve();
      });
    });
  }

  /**
   * Leaves the channel.
   * @returns {Promise} Resolves if successful.
   */
  leave() {
    return new Promise(async (resolve, reject) => {
      this._sendbirdObject.leave((_, error) => {
        if (error) return reject(error);
        resolve();
      });
    });
  }
}

module.exports = BaseChannel;

const ChannelMember = require("./ChannelMember");
const User = require("./User");
const ClientUser = require("./ClientUser");
const Subreddit = require("./Subreddit");
const UserMessage = require("./UserMessage");
const utils = require("../utils.js");
