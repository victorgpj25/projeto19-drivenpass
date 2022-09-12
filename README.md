# DrivenPass API

This is an API developed to organize user credentials, cards, notes and connections. It is developped in `node.js` using `express`. This is a project created to study and learn express and should not be used as a operating finished product.

## Features

This API counts with the following routes

### Authentication

#### Sign Up

You can sign-up to this API by making a POST request to route `/signup` with a object like

```js
{
  email, // string with email format and required
  password // string with at least 10 characters and required
}
```

If everything is ok, it will return status code 201. If any key is improperly passed it will return status code 422. If the email is already being used it will return status code 409. If anything breaks internally it will return status code 500.

#### Sign In

You can login to this API by making a POST request to route `/signin` with a object like

```js
{
  email, // string with email format and required
  password, // string with at least 10 characters and required
}
```

If everything is ok, it will return status code 200 and a object like

```js
{
  token, // jwt string
}
```

If any key is improperly passed it will return status code 422. If the email or the password is wrong it will return status code 401. If anything breaks internally it will return status code 500.

### Card

#### Register Card

You can register a card into this API by making a POST request to route `/cards` with a object like

```js
{
  tag, // String and required - same user can not register same tag twice
  number, // String and required - card number
  owner, // String and required - card owner
  securityCode, // String and required - card security code
  expirationDate, // String and required - card expiration date
  password, // String and required - card password
  isVirtual, // Boolean and required - information if card is virtual
  type // String and required - one of given types: 'credit', 'debit' or 'both'
}
```

And headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 201. If any key is improperly passed it will return status code 422. If the given auhtentication token is not valid or not sent, it will return status code 401. If anything breaks internally it will return status code 500.

#### Get User Cards

You can get all user cards from this API by making a GET request to route `/cards` with headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 200 and user registered cards. If the given auhtentication token is not valid or not sent, it will return status code 401. If anything breaks internally it will return status code 500.

#### Get User Card By Id

You can get a specific card from this API by making a GET request to route `/cards/:id` with headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 200 and user registered card with given id. If the given auhtentication token is not valid or not sent, it will return status code 401. If given id is in wrong format, it will return status code 422. If given id and userId (from token) combination is not registered, it will return status code 404. If anything breaks internally it will return status code 500.

#### Delete User Card By Id

You can delete a card from this API by making a DELETE request to route `/cards/:id` with headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 200 and delete user registered card with given id. If the given auhtentication token is not valid or not sent, it will return status code 401. If given id is in wrong format, it will return status code 422. If given id and userId (from token) combination is not registered, it will return status code 404. If anything breaks internally it will return status code 500.

### Connections

#### Register Connection

You can register a connection into this API by making a POST request to route `/connections` with a object like

```js
{
  tag, // String and required - in this specific route, user can reuse tags
  network, // String and required
  password // String and required
}
```

And headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 201. If any key is improperly passed it will return status code 422. If the given auhtentication token is not valid or not sent, it will return status code 401. If anything breaks internally it will return status code 500.

#### Get User Connections

You can get all user connections from this API by making a GET request to route `/connections` with headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 200 and user registered connections. If the given auhtentication token is not valid or not sent, it will return status code 401. If anything breaks internally it will return status code 500.

#### Get User Connection By Id

You can get a specific connection from this API by making a GET request to route `/connections/:id` with headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 200 and user registered connection with given id. If the given auhtentication token is not valid or not sent, it will return status code 401. If given id is in wrong format, it will return status code 422. If given id and userId (from token) combination is not registered, it will return status code 404. If anything breaks internally it will return status code 500.

#### Delete User Connection By Id

You can delete a connection from this API by making a DELETE request to route `/connections/:id` with headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 200 and delete user registered connection with given id. If the given auhtentication token is not valid or not sent, it will return status code 401. If given id is in wrong format, it will return status code 422. If given id and userId (from token) combination is not registered, it will return status code 404. If anything breaks internally it will return status code 500.

### Credentials

#### Register Credentials

You can register a credential into this API by making a POST request to route `/credentials` with a object like

```js
{
  url, // String in uri format and required
  tag, // String and required - same user can not register same tag twice
  username, // String and required
  password // String and required
}
```

And headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 201. If any key is improperly passed it will return status code 422. If the given auhtentication token is not valid or not sent, it will return status code 401. If anything breaks internally it will return status code 500.

#### Get User Credentials

You can get all user credentials from this API by making a GET request to route `/credentials` with headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 200 and user registered credentials. If the given auhtentication token is not valid or not sent, it will return status code 401. If anything breaks internally it will return status code 500.

#### Get User Credentials By Id

You can get specific credentials from this API by making a GET request to route `/credentials/:id` with headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 200 and user registered credentials with given id. If the given auhtentication token is not valid or not sent, it will return status code 401. If given id is in wrong format, it will return status code 422. If given id and userId (from token) combination is not registered, it will return status code 404. If anything breaks internally it will return status code 500.

#### Delete User Credentials By Id

You can delete credentials from this API by making a DELETE request to route `/credentials/:id` with headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 200 and delete user registered credentials with given id. If the given auhtentication token is not valid or not sent, it will return status code 401. If given id is in wrong format, it will return status code 422. If given id and userId (from token) combination is not registered, it will return status code 404. If anything breaks internally it will return status code 500.

### Safe Notes

#### Register Note

You can register a note into this API by making a POST request to route `/notes` with a object like

```js
{
  tag, // String with maximun lenght of 50 characters and required - same user can not register same tag twice
  note // String with maximun lenght of 1000 characters and required
}
```

And headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 201. If any key is improperly passed it will return status code 422. If the given auhtentication token is not valid or not sent, it will return status code 401. If anything breaks internally it will return status code 500.

#### Get User Notes

You can get all user notes from this API by making a GET request to route `/notes` with headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 200 and user registered notes. If the given auhtentication token is not valid or not sent, it will return status code 401. If anything breaks internally it will return status code 500.

#### Get User Note By Id

You can get a specific note from this API by making a GET request to route `/notes/:id` with headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 200 and user registered note with given id. If the given auhtentication token is not valid or not sent, it will return status code 401. If given id is in wrong format, it will return status code 422. If given id and userId (from token) combination is not registered, it will return status code 404. If anything breaks internally it will return status code 500.

#### Delete User Note By Id

You can delete a note from this API by making a DELETE request to route `/notes/:id` with headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 200 and delete user registered note with given id. If the given auhtentication token is not valid or not sent, it will return status code 401. If given id is in wrong format, it will return status code 422. If given id and userId (from token) combination is not registered, it will return status code 404. If anything breaks internally it will return status code 500.


