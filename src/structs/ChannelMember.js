"use strict";

/**
 * The ChannelMember class.
 * @extends BaseMessage
 */
class ChannelMember {

  /**
   * @param {User} user - The User.
   * @param {BaseChannel} channel - The channel.
   * @hideconstructor
   */
  constructor(user, channel) {
    this.user = user;
    this.channel = channel;
  }

  /**
   * Kicks a member from the channel.
   * @param {number} [seconds = 3600] - The number of seconds to kick the channel member.
   * @returns {Promise} Resolves if successful.
   */
  kick(seconds = 3600) {
    return new Promise(async (resolve, reject) => {
      this.channel._sendbirdObject.banUserWithUserId(this.user.id, seconds, (_, error) => {
        if (error) return reject(error);
        resolve();
      });
    });
  }

  /**
   * Bans a member from the channel.
   * @returns {Promise} Resolves if successful.
   */
  ban() {
    return new Promise(async (resolve, reject) => {
      this.channel._sendbirdObject.banUserWithUserId(this.user.id, (_, error) => {
        if (error) return reject(error);
        resolve();
      });
    });
  }
}

module.exports = ChannelMember;
