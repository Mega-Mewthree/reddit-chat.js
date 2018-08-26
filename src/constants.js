"use strict";

const constants = {
  USER_MENTION_REGEX: /^\/?u\/([\w-]{3,20})([^\w-].*)?$/,
  SUBREDDIT_MENTION_REGEX: /^\/?r\/([\w-]{3,20})([^\w-].*)?$/
};

module.exports = constants;
