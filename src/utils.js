"use strict";

const util = {
  createMessageFromSendbird(data, channel) {
    if (data.messageType === "user") {
      return new UserMessage(data, channel);
    } else {
      return new BaseMessage(data, channel);
    }
  },
  getMentionedUsersFromString(string) {
    return this.removeDuplicatesFromArray(string.trim().split(/ +/g).map(s => s.match(constants.USER_MENTION_REGEX)).filter(m => m).map(m => m[1]));
  },
  getMentionedSubredditsFromString(string) {
    return this.removeDuplicatesFromArray(string.trim().split(/ +/g).map(s => s.match(constants.SUBREDDIT_MENTION_REGEX)).filter(m => m).map(m => m[1]));
  },
  removeDuplicatesFromArray(array) {
    const seen = {};
    return array.filter(item => seen.hasOwnProperty(item) ? false : (seen[item] = true));
  },
  wait(ms = 0) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
};

module.exports = util;

let BaseMessage;
let UserMessage;
const constants = require("./constants.js");

process.nextTick(() => {
  BaseMessage = require("./structs/BaseMessage");
  UserMessage = require("./structs/UserMessage");
});
