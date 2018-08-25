"use strict";

/**
 * The User class.
 */
class User {

  /**
   * @param {Object} data - The Sendbird user object.
   * @hideconstructor
   */
  constructor(data) {
    this._sendbirdObject = data;

    /**
     * The user's ID.
     * @type {string}
     */
    this.id = data.userId;

    /**
     * The user's username.
     * @type {string}
     */
    this.username = data.nickname;
  }

  /**
   * The user's status ("offline" for offline, "nonavailable" for online).
   * @type {boolean}
   * @readonly
   */
  get status() {
    return this._sendbirdObject.connectionStatus;
  }
}

module.exports = User;
