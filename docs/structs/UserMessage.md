<a name="UserMessage"></a>

## UserMessage ⇐ [<code>BaseMessage</code>](#BaseMessage)
The UserMessage class.

**Kind**: global class  
**Extends**: [<code>BaseMessage</code>](#BaseMessage)  

* [UserMessage](#UserMessage) ⇐ [<code>BaseMessage</code>](#BaseMessage)
    * [new UserMessage(data, channel)](#new_UserMessage_new)
    * [.author](#UserMessage+author) : [<code>User</code>](#User)
    * [.channelMember](#UserMessage+channelMember) : [<code>ChannelMember</code>](#ChannelMember)
    * [.content](#UserMessage+content) : <code>string</code>
    * [.mentions](#UserMessage+mentions) : <code>Object</code>
    * [.id](#BaseMessage+id) : <code>number</code>
    * [.type](#BaseMessage+type) : <code>string</code>
    * [.createdTimestamp](#BaseMessage+createdTimestamp) : <code>number</code>
    * [.updatedTimestamp](#BaseMessage+updatedTimestamp) : <code>number</code>
    * [.channel](#BaseMessage+channel) : [<code>BaseChannel</code>](#BaseChannel) \| [<code>PartialChannel</code>](#PartialChannel)
    * [.createdAt](#BaseMessage+createdAt) : <code>Date</code>
    * [.updatedAt](#BaseMessage+updatedAt) : <code>Date</code>
    * [.delete([time])](#BaseMessage+delete) ⇒ <code>Promise</code>

<a name="new_UserMessage_new"></a>

### new UserMessage(data, channel)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>data</td><td><code>Object</code></td><td><p>The Sendbird message object.</p>
</td>
    </tr><tr>
    <td>channel</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel the message was sent in.</p>
</td>
    </tr>  </tbody>
</table>

<a name="UserMessage+author"></a>

### userMessage.author : [<code>User</code>](#User)
The author of the message.

**Kind**: instance property of [<code>UserMessage</code>](#UserMessage)  
<a name="UserMessage+channelMember"></a>

### userMessage.channelMember : [<code>ChannelMember</code>](#ChannelMember)
The channel member of the message.

**Kind**: instance property of [<code>UserMessage</code>](#UserMessage)  
<a name="UserMessage+content"></a>

### userMessage.content : <code>string</code>
The content of the message.

**Kind**: instance property of [<code>UserMessage</code>](#UserMessage)  
<a name="UserMessage+mentions"></a>

### userMessage.mentions : <code>Object</code>
Any /u/ mentions or /r/ mentions in the message. Returns the name after the /u/ or /r/.

**Kind**: instance property of [<code>UserMessage</code>](#UserMessage)  
<a name="BaseMessage+id"></a>

### userMessage.id : <code>number</code>
The message's ID.

**Kind**: instance property of [<code>UserMessage</code>](#UserMessage)  
<a name="BaseMessage+type"></a>

### userMessage.type : <code>string</code>
The message's type.

**Kind**: instance property of [<code>UserMessage</code>](#UserMessage)  
<a name="BaseMessage+createdTimestamp"></a>

### userMessage.createdTimestamp : <code>number</code>
The UNIX timestamp of the message's creation.

**Kind**: instance property of [<code>UserMessage</code>](#UserMessage)  
<a name="BaseMessage+updatedTimestamp"></a>

### userMessage.updatedTimestamp : <code>number</code>
The UNIX timestamp of the message's last update.

**Kind**: instance property of [<code>UserMessage</code>](#UserMessage)  
<a name="BaseMessage+channel"></a>

### userMessage.channel : [<code>BaseChannel</code>](#BaseChannel) \| [<code>PartialChannel</code>](#PartialChannel)
The channel that the message is in.

**Kind**: instance property of [<code>UserMessage</code>](#UserMessage)  
<a name="BaseMessage+createdAt"></a>

### userMessage.createdAt : <code>Date</code>
The Date the message was created at.

**Kind**: instance property of [<code>UserMessage</code>](#UserMessage)  
**Read only**: true  
<a name="BaseMessage+updatedAt"></a>

### userMessage.updatedAt : <code>Date</code>
The Date the message was updated at.

**Kind**: instance property of [<code>UserMessage</code>](#UserMessage)  
**Read only**: true  
<a name="BaseMessage+delete"></a>

### userMessage.delete([time]) ⇒ <code>Promise</code>
Deletes the message.

**Kind**: instance method of [<code>UserMessage</code>](#UserMessage)  
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

