"use strict";

/**
 * The Subreddit class.
 */
class Subreddit {

  /**
   * @param {Object} data - The subreddit data.
   * @param {string} data.id - The subreddit's ID.
   * @param {string} data.name - The subreddit's name.
   * @param {boolean} data.nsfw - Indicates if the subreddit is marked as NSFW.
   * @param {string} data.description - The subreddit's description.
   * @param {string} data.iconImageURL - The subreddit's icon image's URL.
   * @param {string} data.themeColor - The subreddit's 6-digit theme color hex code (without the leading #).
   * @hideconstructor
   */
  constructor(data) {

    /**
     * The subreddit's ID.
     * @type {string}
     */
    this.id = data.id;

    /**
     * The subreddit's name.
     * @type {string}
     */
    this.name = data.name;

    /**
     * Indicates if the subreddit is marked as NSFW.
     * @type {boolean}
     */
    this.nsfw = data.nsfw;

    /**
     * The subreddit's description.
     * @type {string}
     */
    this.description = data.description;

    /**
     * The subreddit's icon image's URL.
     * @type {string}
     */
    this.iconImageURL = data.iconImageURL;

    /**
     * The subreddit's 6-digit theme color hex code (without the leading #).
     * @type {string}
     */
    this.themeColor = data.themeColor;
  }
}

module.exports = Subreddit;
