"use strict";

/**
 * The PartialChannel class.
 */
class PartialChannel {

  /**
   * @param {Object} data - The partial channel data.
   * @param {string} data.type - The channel's type.
   * @param {string} data.url - The channel's URL.
   * @hideconstructor
   */
  constructor(data) {

    /**
     * The channel's type.
     * @type {string}
     */
    this.type = data.type;

    /**
     * The channel's URL.
     * @type {string}
     */
    this.url = data.url;
  }
}

module.exports = PartialChannel;
