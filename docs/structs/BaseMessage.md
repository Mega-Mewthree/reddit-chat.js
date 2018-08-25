<a name="BaseMessage"></a>

## BaseMessage
The BaseMessage class.

**Kind**: global class  

* [BaseMessage](#BaseMessage)
    * [new BaseMessage(data, [channel])](#new_BaseMessage_new)
    * [.id](#BaseMessage+id) : <code>number</code>
    * [.type](#BaseMessage+type) : <code>string</code>
    * [.createdTimestamp](#BaseMessage+createdTimestamp) : <code>number</code>
    * [.updatedTimestamp](#BaseMessage+updatedTimestamp) : <code>number</code>
    * [.channel](#BaseMessage+channel) : [<code>BaseChannel</code>](#BaseChannel) \| [<code>PartialChannel</code>](#PartialChannel)
    * [.createdAt](#BaseMessage+createdAt) : <code>Date</code>
    * [.updatedAt](#BaseMessage+updatedAt) : <code>Date</code>
    * [.delete([time])](#BaseMessage+delete) ⇒ <code>Promise</code>

<a name="new_BaseMessage_new"></a>

### new BaseMessage(data, [channel])
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
    <td>[channel]</td><td><code><a href="#BaseChannel">BaseChannel</a></code></td><td><p>The channel the message came from.</p>
</td>
    </tr>  </tbody>
</table>

<a name="BaseMessage+id"></a>

### baseMessage.id : <code>number</code>
The message's ID.

**Kind**: instance property of [<code>BaseMessage</code>](#BaseMessage)  
<a name="BaseMessage+type"></a>

### baseMessage.type : <code>string</code>
The message's type.

**Kind**: instance property of [<code>BaseMessage</code>](#BaseMessage)  
<a name="BaseMessage+createdTimestamp"></a>

### baseMessage.createdTimestamp : <code>number</code>
The UNIX timestamp of the message's creation.

**Kind**: instance property of [<code>BaseMessage</code>](#BaseMessage)  
<a name="BaseMessage+updatedTimestamp"></a>

### baseMessage.updatedTimestamp : <code>number</code>
The UNIX timestamp of the message's last update.

**Kind**: instance property of [<code>BaseMessage</code>](#BaseMessage)  
<a name="BaseMessage+channel"></a>

### baseMessage.channel : [<code>BaseChannel</code>](#BaseChannel) \| [<code>PartialChannel</code>](#PartialChannel)
The channel that the message is in.

**Kind**: instance property of [<code>BaseMessage</code>](#BaseMessage)  
<a name="BaseMessage+createdAt"></a>

### baseMessage.createdAt : <code>Date</code>
The Date the message was created at.

**Kind**: instance property of [<code>BaseMessage</code>](#BaseMessage)  
**Read only**: true  
<a name="BaseMessage+updatedAt"></a>

### baseMessage.updatedAt : <code>Date</code>
The Date the message was updated at.

**Kind**: instance property of [<code>BaseMessage</code>](#BaseMessage)  
**Read only**: true  
<a name="BaseMessage+delete"></a>

### baseMessage.delete([time]) ⇒ <code>Promise</code>
Deletes the message.

**Kind**: instance method of [<code>BaseMessage</code>](#BaseMessage)  
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

