<a name="Client"></a>

## Client ⇐ <code>EventEmitter</code>
The class used to access the reddit chat API.

**Kind**: global class  
**Extends**: <code>EventEmitter</code>  

* [Client](#Client) ⇐ <code>EventEmitter</code>
    * [new Client(options)](#new_Client_new)
    * [.connect(userID, accessToken)](#Client+connect) ⇒ <code>Promise</code>
    * ["ready" (timestamp)](#Client+event_ready)
    * ["error" (error)](#Client+event_error)
    * ["message" (message)](#Client+event_message)
    * ["messageDelete" (id)](#Client+event_messageDelete)
    * ["channelInvite" (channel, inviter)](#Client+event_channelInvite)
    * ["channelMemberInvite" (channel, user, inviter)](#Client+event_channelMemberInvite)
    * ["channelJoin" (channel)](#Client+event_channelJoin)
    * ["channelMemberJoin" (channel, member)](#Client+event_channelMemberJoin)
    * ["channelLeave" (channel)](#Client+event_channelLeave)
    * ["channelMemberLeave" (channel, member)](#Client+event_channelMemberLeave)
    * ["channelBan" (channel)](#Client+event_channelBan)
    * ["channelMemberBan" (channel, member)](#Client+event_channelMemberBan)
    * ["channelMemberUnban" (channel, user)](#Client+event_channelMemberUnban)
    * ["channelMemberUnban" (channel, user)](#Client+event_channelMemberUnban)
    * ["channelUpdate" (channel)](#Client+event_channelUpdate)
    * ["channelDelete" (channel)](#Client+event_channelDelete)
    * ["channelLocked" (channel)](#Client+event_channelLocked)
    * ["channelUnlocked" (channel)](#Client+event_channelUnlocked)
    * ["typingUpdate" (channel)](#Client+event_typingUpdate)

<a name="new_Client_new"></a>

### new Client(options)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>options</td><td><code>Object</code></td><td></td><td><p>Configuration options.</p>
</td>
    </tr><tr>
    <td>[options.autoJoinChannels]</td><td><code>boolean</code></td><td><code>true</code></td><td><p>Set the bot to automatically join channels when invited.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+connect"></a>

### client.connect(userID, accessToken) ⇒ <code>Promise</code>
Connect to reddit chat.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: <code>Promise</code> - Resolves if successful.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>userID</td><td><code>string</code></td><td><p>The user ID of the bot.</p>
</td>
    </tr><tr>
    <td>accessToken</td><td><code>string</code></td><td><p>The access token of the bot.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_ready"></a>

### "ready" (timestamp)
Ready event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>timestamp</td><td><code>number</code></td><td><p>The UNIX timestamp the client was ready at.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_error"></a>

### "error" (error)
Error event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>error</td><td><code>Error</code></td><td><p>An error that occurred.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_message"></a>

### "message" (message)
Message event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>message</td><td><code><a href="#UserMessage">UserMessage</a></code> | <code><a href="#BaseMessage">BaseMessage</a></code></td><td><p>The received message.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_messageDelete"></a>

### "messageDelete" (id)
Message delete event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>id</td><td><code>number</code></td><td><p>The ID of the deleted message.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_channelInvite"></a>

### "channelInvite" (channel, inviter)
Channel invite event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel the client was invited to.</p>
</td>
    </tr><tr>
    <td>inviter</td><td><code><a href="#ChannelMember">ChannelMember</a></code></td><td><p>The channel member who invited the client user.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_channelMemberInvite"></a>

### "channelMemberInvite" (channel, user, inviter)
Channel member invite event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel the client was invited to.</p>
</td>
    </tr><tr>
    <td>user</td><td><code><a href="#ChannelMember">ChannelMember</a></code></td><td><p>The invited user.</p>
</td>
    </tr><tr>
    <td>inviter</td><td><code><a href="#ChannelMember">ChannelMember</a></code></td><td><p>The channel member who invited the client user.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_channelJoin"></a>

### "channelJoin" (channel)
Channel join event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel the client joined.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_channelMemberJoin"></a>

### "channelMemberJoin" (channel, member)
Channel member join event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel the member joined.</p>
</td>
    </tr><tr>
    <td>member</td><td><code><a href="#ChannelMember">ChannelMember</a></code></td><td><p>The member that joined the channel.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_channelLeave"></a>

### "channelLeave" (channel)
Channel leave event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel the client left.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_channelMemberLeave"></a>

### "channelMemberLeave" (channel, member)
Channel member leave event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel the member left.</p>
</td>
    </tr><tr>
    <td>member</td><td><code><a href="#ChannelMember">ChannelMember</a></code></td><td><p>The member that left the channel.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_channelBan"></a>

### "channelBan" (channel)
Channel ban event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel the client was banned from.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_channelMemberBan"></a>

### "channelMemberBan" (channel, member)
Channel member ban event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel the member was banned from.</p>
</td>
    </tr><tr>
    <td>member</td><td><code><a href="#ChannelMember">ChannelMember</a></code></td><td><p>The member that was banned.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_channelMemberUnban"></a>

### "channelMemberUnban" (channel, user)
Channel member unban event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel the member was unbanned from.</p>
</td>
    </tr><tr>
    <td>user</td><td><code><a href="#ChannelMember">ChannelMember</a></code></td><td><p>The user that was unbanned.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_channelMemberUnban"></a>

### "channelMemberUnban" (channel, user)
Channel member unban event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel the member was unbanned from.</p>
</td>
    </tr><tr>
    <td>user</td><td><code><a href="#ChannelMember">ChannelMember</a></code></td><td><p>The user that was unbanned.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_channelUpdate"></a>

### "channelUpdate" (channel)
Channel update event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel that was updated.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_channelDelete"></a>

### "channelDelete" (channel)
Channel delete event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#PartialChannel">PartialChannel</a></code></td><td><p>The channel that was deleted.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_channelLocked"></a>

### "channelLocked" (channel)
Channel locked event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel that was locked.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_channelUnlocked"></a>

### "channelUnlocked" (channel)
Channel unlocked event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel that was unlocked.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Client+event_typingUpdate"></a>

### "typingUpdate" (channel)
Typing update event.

**Kind**: event emitted by [<code>Client</code>](#Client)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel that had a change in typing status.</p>
</td>
    </tr>  </tbody>
</table>

