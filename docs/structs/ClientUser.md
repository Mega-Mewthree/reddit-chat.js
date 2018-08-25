<a name="ClientUser"></a>

## ClientUser ⇐ [<code>User</code>](#User)
The ClientUser class.

**Kind**: global class  
**Extends**: [<code>User</code>](#User)  

* [ClientUser](#ClientUser) ⇐ [<code>User</code>](#User)
    * [new ClientUser(data, sendbird)](#new_ClientUser_new)
    * [.id](#User+id) : <code>string</code>
    * [.username](#User+username) : <code>string</code>
    * [.status](#User+status) : <code>boolean</code>
    * [.fetchChannelByURL(url)](#ClientUser+fetchChannelByURL) ⇒ [<code>Promise.&lt;BaseChannel&gt;</code>](#BaseChannel)
    * [.fetchAllChannels([options])](#ClientUser+fetchAllChannels) ⇒ <code>Promise.&lt;Array.&lt;BaseChannel&gt;&gt;</code>

<a name="new_ClientUser_new"></a>

### new ClientUser(data, sendbird)
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
    </tr><tr>
    <td>sendbird</td><td><code>Object</code></td><td><p>The Sendbird instance.</p>
</td>
    </tr>  </tbody>
</table>

<a name="User+id"></a>

### clientUser.id : <code>string</code>
The user's ID.

**Kind**: instance property of [<code>ClientUser</code>](#ClientUser)  
<a name="User+username"></a>

### clientUser.username : <code>string</code>
The user's username.

**Kind**: instance property of [<code>ClientUser</code>](#ClientUser)  
<a name="User+status"></a>

### clientUser.status : <code>boolean</code>
The user's status ("offline" for offline, "nonavailable" for online).

**Kind**: instance property of [<code>ClientUser</code>](#ClientUser)  
**Read only**: true  
<a name="ClientUser+fetchChannelByURL"></a>

### clientUser.fetchChannelByURL(url) ⇒ [<code>Promise.&lt;BaseChannel&gt;</code>](#BaseChannel)
Fetches a channel by its URL.

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: [<code>Promise.&lt;BaseChannel&gt;</code>](#BaseChannel) - The channel.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>url</td><td><code>string</code></td><td><p>The channel URL.</p>
</td>
    </tr>  </tbody>
</table>

<a name="ClientUser+fetchAllChannels"></a>

### clientUser.fetchAllChannels([options]) ⇒ <code>Promise.&lt;Array.&lt;BaseChannel&gt;&gt;</code>
Fetches all channels the client user can see.

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: <code>Promise.&lt;Array.&lt;BaseChannel&gt;&gt;</code> - The channels that the client user can see.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[options]</td><td><code>Object</code></td><td></td><td><p>The fetch query options.</p>
</td>
    </tr><tr>
    <td>[options.includeEmpty]</td><td><code>boolean</code></td><td><code>true</code></td><td><p>Include empty channels.</p>
</td>
    </tr><tr>
    <td>[options.limit]</td><td><code>number</code></td><td><code>100</code></td><td><p>The number of channels to get at a time. Must be between 1 and 100, inclusive.</p>
</td>
    </tr>  </tbody>
</table>

