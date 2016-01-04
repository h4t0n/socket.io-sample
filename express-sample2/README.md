# express-sample2

An example that shows some socket.io interesting features, such as:
* how to broadcast messages
* how emit messages to all connected clients
* how to listen to disconnect event
* how to emit messages without using socket.io events (just as a cross browser websocket)

## Usage

Run the server:
```
// from the repo root
$ node express-sample2/server.js
```

Play with the application while you read the code:

* open (and close) several http://localhost:8080
* send and receive event messages by using the web interface (or the console, why not ?)
* NB: take a look at the browser console
