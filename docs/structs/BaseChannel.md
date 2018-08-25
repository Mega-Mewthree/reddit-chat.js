<a name="BaseChannel"></a>

## BaseChannel
The BaseChannel class.

**Kind**: global class  

* [BaseChannel](#BaseChannel)
    * [new BaseChannel(data)](#new_BaseChannel_new)
    * [.type](#BaseChannel+type) : <code>string</code>
    * [.ownerID](#BaseChannel+ownerID) : <code>string</code>
    * [.description](#BaseChannel+description) : <code>string</code>
    * [.createdTimestamp](#BaseChannel+createdTimestamp) : <code>number</code>
    * [.invitedTimestamp](#BaseChannel+invitedTimestamp) : <code>number</code>
    * [.inviter](#BaseChannel+inviter) : [<code>ChannelMember</code>](#ChannelMember)
    * [.name](#BaseChannel+name) : <code>string</code>
    * [.url](#BaseChannel+url) : <code>string</code>
    * [.lastMessage](#BaseChannel+lastMessage) : [<code>UserMessage</code>](#UserMessage) \| [<code>BaseMessage</code>](#BaseMessage)
    * [.subreddit](#BaseChannel+subreddit) : [<code>Subreddit</code>](#Subreddit)
    * [.isPublic](#BaseChannel+isPublic) : <code>boolean</code>
    * [.isLocked](#BaseChannel+isLocked) : <code>boolean</code>
    * [.invitationPending](#BaseChannel+invitationPending) : <code>boolean</code>
    * [.createdAt](#BaseChannel+createdAt) : <code>Date</code>
    * [.inChannel](#BaseChannel+inChannel) : <code>boolean</code>
    * [.memberCount](#BaseChannel+memberCount) : <code>number</code>
    * [.members](#BaseChannel+members) : [<code>Array.&lt;ChannelMember&gt;</code>](#ChannelMember)
    * [.fetchIsModerator()](#BaseChannel+fetchIsModerator) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.acceptInvitation()](#BaseChannel+acceptInvitation) ⇒ <code>Promise</code>
    * [.sendMessage(string)](#BaseChannel+sendMessage) ⇒ [<code>Promise.&lt;UserMessage&gt;</code>](#UserMessage)
    * [.startTyping()](#BaseChannel+startTyping)
    * [.stopTyping()](#BaseChannel+stopTyping)
    * [.refresh()](#BaseChannel+refresh) ⇒ <code>Promise</code>
    * [.channelMember(user)](#BaseChannel+channelMember) ⇒ [<code>ChannelMember</code>](#ChannelMember)
    * [.kick(user, seconds)](#BaseChannel+kick) ⇒ <code>Promise</code>
    * [.ban(user)](#BaseChannel+ban) ⇒ <code>Promise</code>
    * [.inviteUsers(user)](#BaseChannel+inviteUsers) ⇒ <code>Promise</code>
    * [.leave()](#BaseChannel+leave) ⇒ <code>Promise</code>

<a name="new_BaseChannel_new"></a>

### new BaseChannel(data)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>data</td><td><code>Object</code></td><td><p>The Sendbird channel object.</p>
</td>
    </tr>  </tbody>
</table>

<a name="BaseChannel+type"></a>

### baseChannel.type : <code>string</code>
The channel's type.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
<a name="BaseChannel+ownerID"></a>

### baseChannel.ownerID : <code>string</code>
The user ID of the channel owner.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
<a name="BaseChannel+description"></a>

### baseChannel.description : <code>string</code>
The description of the channel.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
<a name="BaseChannel+createdTimestamp"></a>

### baseChannel.createdTimestamp : <code>number</code>
The UNIX timestamp of the channel's creation.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
<a name="BaseChannel+invitedTimestamp"></a>

### baseChannel.invitedTimestamp : <code>number</code>
The UNIX timestamp of when the client user was invited.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
<a name="BaseChannel+inviter"></a>

### baseChannel.inviter : [<code>ChannelMember</code>](#ChannelMember)
The ChannelMember that invited the client user.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
<a name="BaseChannel+name"></a>

### baseChannel.name : <code>string</code>
The channel name.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
<a name="BaseChannel+url"></a>

### baseChannel.url : <code>string</code>
The channel url.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
<a name="BaseChannel+lastMessage"></a>

### baseChannel.lastMessage : [<code>UserMessage</code>](#UserMessage) \| [<code>BaseMessage</code>](#BaseMessage)
The last message in this channel.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
<a name="BaseChannel+subreddit"></a>

### baseChannel.subreddit : [<code>Subreddit</code>](#Subreddit)
The subreddit the channel belongs to.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
<a name="BaseChannel+isPublic"></a>

### baseChannel.isPublic : <code>boolean</code>
Indicates if the channel is public.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
**Read only**: true  
<a name="BaseChannel+isLocked"></a>

### baseChannel.isLocked : <code>boolean</code>
Indicates if the channel is locked.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
**Read only**: true  
<a name="BaseChannel+invitationPending"></a>

### baseChannel.invitationPending : <code>boolean</code>
Indicates if an invitation is pending for the channel.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
**Read only**: true  
<a name="BaseChannel+createdAt"></a>

### baseChannel.createdAt : <code>Date</code>
The Date the channel was created at.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
**Read only**: true  
<a name="BaseChannel+inChannel"></a>

### baseChannel.inChannel : <code>boolean</code>
Indicates if the client user is in the channel.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
**Read only**: true  
<a name="BaseChannel+memberCount"></a>

### baseChannel.memberCount : <code>number</code>
The number of members in this channel.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
**Read only**: true  
<a name="BaseChannel+members"></a>

### baseChannel.members : [<code>Array.&lt;ChannelMember&gt;</code>](#ChannelMember)
The members in this channel.

**Kind**: instance property of [<code>BaseChannel</code>](#BaseChannel)  
**Read only**: true  
<a name="BaseChannel+fetchIsModerator"></a>

### baseChannel.fetchIsModerator() ⇒ <code>Promise.&lt;boolean&gt;</code>
Checks if the client user has moderation permissions in the channel.

**Kind**: instance method of [<code>BaseChannel</code>](#BaseChannel)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - Indicates if the client user has moderation permissions in the channel.  
<a name="BaseChannel+acceptInvitation"></a>

### baseChannel.acceptInvitation() ⇒ <code>Promise</code>
Accepts a pending channel invitation.

**Kind**: instance method of [<code>BaseChannel</code>](#BaseChannel)  
**Returns**: <code>Promise</code> - Resolves if successful.  
<a name="BaseChannel+sendMessage"></a>

### baseChannel.sendMessage(string) ⇒ [<code>Promise.&lt;UserMessage&gt;</code>](#UserMessage)
Send a message to the channel.

**Kind**: instance method of [<code>BaseChannel</code>](#BaseChannel)  
**Returns**: [<code>Promise.&lt;UserMessage&gt;</code>](#UserMessage) - The created message.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>string</td><td><code>string</code></td><td><p>The message to send.</p>
</td>
    </tr>  </tbody>
</table>

<a name="BaseChannel+startTyping"></a>

### baseChannel.startTyping()
Starts the typing indicator. Lasts for a few seconds.

**Kind**: instance method of [<code>BaseChannel</code>](#BaseChannel)  
<a name="BaseChannel+stopTyping"></a>

### baseChannel.stopTyping()
Stops the typing indicator.

**Kind**: instance method of [<code>BaseChannel</code>](#BaseChannel)  
<a name="BaseChannel+refresh"></a>

### baseChannel.refresh() ⇒ <code>Promise</code>
Refreshes the channel's Sendbird instance.

**Kind**: instance method of [<code>BaseChannel</code>](#BaseChannel)  
**Returns**: <code>Promise</code> - Resolves if successful.  
<a name="BaseChannel+channelMember"></a>

### baseChannel.channelMember(user) ⇒ [<code>ChannelMember</code>](#ChannelMember)
Refreshes the channel's Sendbird instance.

**Kind**: instance method of [<code>BaseChannel</code>](#BaseChannel)  
**Returns**: [<code>ChannelMember</code>](#ChannelMember) - The ChannelMember.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>user</td><td><code><a href="#User">User</a></code></td><td><p>The User to convert to a ChannelMember.</p>
</td>
    </tr>  </tbody>
</table>

<a name="BaseChannel+kick"></a>

### baseChannel.kick(user, seconds) ⇒ <code>Promise</code>
Kicks a user from the channel.

**Kind**: instance method of [<code>BaseChannel</code>](#BaseChannel)  
**Returns**: <code>Promise</code> - Resolves if successful.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>user</td><td><code><a href="#ChannelMember">ChannelMember</a></code> | <code><a href="#User">User</a></code> | <code>string</code></td><td><p>The user to kick.</p>
</td>
    </tr><tr>
    <td>seconds</td><td><code>number</code></td><td><p>The amount of time, in seconds, to kick the user.</p>
</td>
    </tr>  </tbody>
</table>

<a name="BaseChannel+ban"></a>

### baseChannel.ban(user) ⇒ <code>Promise</code>
Bans a user from the channel.

**Kind**: instance method of [<code>BaseChannel</code>](#BaseChannel)  
**Returns**: <code>Promise</code> - Resolves if successful.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>user</td><td><code><a href="#ChannelMember">ChannelMember</a></code> | <code><a href="#User">User</a></code> | <code>string</code></td><td><p>The user to kick.</p>
</td>
    </tr>  </tbody>
</table>

<a name="BaseChannel+inviteUsers"></a>

### baseChannel.inviteUsers(user) ⇒ <code>Promise</code>
Invites users to the channel.

**Kind**: instance method of [<code>BaseChannel</code>](#BaseChannel)  
**Returns**: <code>Promise</code> - Resolves if successful.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>user</td><td><code>Array.&lt;(User|ChannelMember)&gt;</code></td><td><p>The user to kick.</p>
</td>
    </tr>  </tbody>
</table>

<a name="BaseChannel+leave"></a>

### baseChannel.leave() ⇒ <code>Promise</code>
Leaves the channel.

**Kind**: instance method of [<code>BaseChannel</code>](#BaseChannel)  
**Returns**: <code>Promise</code> - Resolves if successful.  
