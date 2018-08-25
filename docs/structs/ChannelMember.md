<a name="ChannelMember"></a>

## ChannelMember ⇐ [<code>BaseMessage</code>](#BaseMessage)
The ChannelMember class.

**Kind**: global class  
**Extends**: [<code>BaseMessage</code>](#BaseMessage)  

* [ChannelMember](#ChannelMember) ⇐ [<code>BaseMessage</code>](#BaseMessage)
    * [new ChannelMember(user, channel)](#new_ChannelMember_new)
    * [.id](#BaseMessage+id) : <code>number</code>
    * [.type](#BaseMessage+type) : <code>string</code>
    * [.createdTimestamp](#BaseMessage+createdTimestamp) : <code>number</code>
    * [.updatedTimestamp](#BaseMessage+updatedTimestamp) : <code>number</code>
    * [.channel](#BaseMessage+channel) : [<code>BaseChannel</code>](#BaseChannel) \| [<code>PartialChannel</code>](#PartialChannel)
    * [.createdAt](#BaseMessage+createdAt) : <code>Date</code>
    * [.updatedAt](#BaseMessage+updatedAt) : <code>Date</code>
    * [.kick([seconds])](#ChannelMember+kick) ⇒ <code>Promise</code>
    * [.ban()](#ChannelMember+ban) ⇒ <code>Promise</code>
    * [.delete([time])](#BaseMessage+delete) ⇒ <code>Promise</code>

<a name="new_ChannelMember_new"></a>

### new ChannelMember(user, channel)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>user</td><td><code><a href="#User">User</a></code></td><td><p>The User.</p>
</td>
    </tr><tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel.</p>
</td>
    </tr>  </tbody>
</table>

<a name="BaseMessage+id"></a>

### channelMember.id : <code>number</code>
The message's ID.

**Kind**: instance property of [<code>ChannelMember</code>](#ChannelMember)  
<a name="BaseMessage+type"></a>

### channelMember.type : <code>string</code>
The message's type.

**Kind**: instance property of [<code>ChannelMember</code>](#ChannelMember)  
<a name="BaseMessage+createdTimestamp"></a>

### channelMember.createdTimestamp : <code>number</code>
The UNIX timestamp of the message's creation.

**Kind**: instance property of [<code>ChannelMember</code>](#ChannelMember)  
<a name="BaseMessage+updatedTimestamp"></a>

### channelMember.updatedTimestamp : <code>number</code>
The UNIX timestamp of the message's last update.

**Kind**: instance property of [<code>ChannelMember</code>](#ChannelMember)  
<a name="BaseMessage+channel"></a>

### channelMember.channel : [<code>BaseChannel</code>](#BaseChannel) \| [<code>PartialChannel</code>](#PartialChannel)
The channel that the message is in.

**Kind**: instance property of [<code>ChannelMember</code>](#ChannelMember)  
**Overrides**: [<code>channel</code>](#BaseMessage+channel)  
<a name="BaseMessage+createdAt"></a>

### channelMember.createdAt : <code>Date</code>
The Date the message was created at.

**Kind**: instance property of [<code>ChannelMember</code>](#ChannelMember)  
**Read only**: true  
<a name="BaseMessage+updatedAt"></a>

### channelMember.updatedAt : <code>Date</code>
The Date the message was updated at.

**Kind**: instance property of [<code>ChannelMember</code>](#ChannelMember)  
**Read only**: true  
<a name="ChannelMember+kick"></a>

### channelMember.kick([seconds]) ⇒ <code>Promise</code>
Kicks a member from the channel.

**Kind**: instance method of [<code>ChannelMember</code>](#ChannelMember)  
**Returns**: <code>Promise</code> - Resolves if successful.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[seconds]</td><td><code>number</code></td><td><code>3600</code></td><td><p>The number of seconds to kick the channel member.</p>
</td>
    </tr>  </tbody>
</table>

<a name="ChannelMember+ban"></a>

### channelMember.ban() ⇒ <code>Promise</code>
Bans a member from the channel.

**Kind**: instance method of [<code>ChannelMember</code>](#ChannelMember)  
**Returns**: <code>Promise</code> - Resolves if successful.  
<a name="BaseMessage+delete"></a>

### channelMember.delete([time]) ⇒ <code>Promise</code>
Deletes the message.

**Kind**: instance method of [<code>ChannelMember</code>](#ChannelMember)  
**Returns**: <code>Promise</code> - Resolves if successful.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[time]</td><td><code>number</code></td><td><code>0</code></td><td><p>The amount of time to wait before deleting the message.</p>
</td>
    </tr>  </tbody>
</table>

