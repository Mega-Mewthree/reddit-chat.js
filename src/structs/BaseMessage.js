"use strict";

/**
 * The BaseMessage class.
 */
class BaseMessage {

  /**
   * @param {Object} data - The Sendbird message object.
   * @param {BaseChannel} [channel] - The channel the message came from.
   * @hideconstructor
   */
  constructor(data, channel) {
    this._sendbirdObject = data;

    /**
     * The message's ID.
     * @type {number}
     */
    this.id = data.messageId;

    /**
     * The message's type.
     * @type {string}
     */
    this.type = data.messageType;

    /**
     * The UNIX timestamp of the message's creation.
     * @type {number}
     */
    this.createdTimestamp = data.createdAt;

    /**
     * The UNIX timestamp of the message's last update.
     * @type {number}
     */
    this.updatedTimestamp = data.updatedTimestamp;

    /**
     * The channel that the message is in.
     * @type {BaseChannel|PartialChannel}
     */
    this.channel = channel || new PartialChannel({
      url: data.channelUrl,
      type: data.channelType
    });
  }

  /**
   * The Date the message was created at.
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return this._createdAt || (this._createdAt = new Date(this.createdTimestamp));
  }

  /**
   * The Date the message was updated at.
   * @type {Date}
   * @readonly
   */
  get updatedAt() {
    return this._updatedAt || (this._updatedAt = new Date(this.updatedTimestamp));
  }

  /**
   * Deletes the message.
   * @param {number} [time = 0] - The amount of time to wait before deleting the message.
   * @returns {Promise} Resolves if successful.
   */
  delete(time) {
    return new Promise(async (resolve, reject) => {
      if (time) await utils.wait(time);
      if (this.channel._sendbirdObject) {
        this.channel._sendbirdObject.deleteMessage(this._sendbirdObject, (_, error) => {
          if (error) return reject(error);
          resolve();
        });
      } else {
        reject(new Error("Message's channel is not a complete channel."));
      }
    });
  }
}

module.exports = BaseMessage;

const PartialChannel = require("./PartialChannel");
const utils = require("../utils.js");
