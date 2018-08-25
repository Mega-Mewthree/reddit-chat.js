"use strict";

const User = require("./User");

/**
 * The ClientUser class.
 * @extends User
 */
class ClientUser extends User {

  /**
   * @param {Object} data - The Sendbird channel object.
   * @param {Object} sendbird - The Sendbird instance.
   * @hideconstructor
   */
  constructor(data, sendbird) {
    super(data);
    this._sendbirdObject = sendbird;
  }

  /**
   * Fetches a channel by its URL.
   * @param {string} url - The channel URL.
   * @returns {Promise<BaseChannel>} The channel.
   */
  fetchChannelByURL(url) {
    return new Promise((resolve, reject) => {
      if (!url) return reject(new TypeError("Not a valid channel URL."));
      if (this._sendbirdObject.GroupChannel.cachedChannels[url]) {
        return resolve(new BaseChannel(this._sendbirdObject.GroupChannel.cachedChannels[url]));
      }
      this._sendbirdObject.GroupChannel.getChannel(url, (channel, error) => {
        if (error) return reject(error);
        resolve(new BaseChannel(channel));
      });
    });
  }

  /**
   * Fetches all channels the client user can see.
   * @param {Object} [options] - The fetch query options.
   * @param {boolean} [options.includeEmpty = true] - Include empty channels.
   * @param {number} [options.limit = 100] - The number of channels to get at a time. Must be between 1 and 100, inclusive.
   * @returns {Promise<Array<BaseChannel>>} The channels that the client user can see.
   */
  fetchAllChannels(options = {}) {
    const channelListQuery = this._sendbirdObject.GroupChannel.createMyGroupChannelListQuery();
    channelListQuery.includeEmpty = options.includeEmpty === undefined ? true : options.includeEmpty;
    channelListQuery.limit = options.channelsPerPage === undefined ? 100 : options.channelsPerPage;
    const channels = [];
    return new Promise((resolve, reject) => {
      (function getNext() {
        if (channelListQuery.hasNext) {
          channelListQuery.next((pageOfChannels, error) => {
            if (error) return reject(error);
            channels.push(...pageOfChannels.map(c => new BaseChannel(c)));
            setImmediate(getNext);
          });
        } else {
          resolve(channels);
        }
      })();
    });
  }
}

module.exports = ClientUser;

const BaseChannel = require("./BaseChannel");
