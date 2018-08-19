class User {
  constructor(data) {
    this._sendbirdObject = data;
    this.id = data.userId;
    this.isActive = data.isActive;
    this.isBlocked = data.isBlockedByMe;
    this.isBlockingMe = data.isBlockingMe;
    this.username = data.nickname;
    this.status = data.connectionStatus;
  }
}

module.exports = User;
