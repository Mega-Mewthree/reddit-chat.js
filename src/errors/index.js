class AuthenticationError extends Error {
  constructor() {
    super(...arguments);
    this.name = "AuthenticationError";
    Error.captureStackTrace(this, AuthenticationError);
  }
}

module.exports = {
  AuthenticationError
};
