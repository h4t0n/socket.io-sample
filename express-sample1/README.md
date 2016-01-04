# express-sample1

The simplest socket.io example (that uses the express framework) that you can find on [socket.io/docs](http://socket.io/docs/). It shows how to:

* emit event messages
* listen to event messages
* how to connect to a socket.io server from a standalone node.js client (without the need of a full browser)

## Usage

Run the server:
```
// from the repo root
$ node express-sample1/server.js
```

Open (and close) several http://localhost:8080

Take a look at both the browser console and the server output.

Run also the client app to see how to interact with the server without the need of a full browser:
```
// from the repo root
$ node express-sample1/client.js
```
