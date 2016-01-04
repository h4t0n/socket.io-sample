# socket.io-sample
> A list of useful socket.io application examples to learn how to use socket.io features

## Available samples
Each example has its own README with instruction.

Before start any of these, install the dependencies by running:

```
# from this repo root
$ npm install
```

### express-sample1
The simplest socket.io example (that uses the express framework) that you can find on [socket.io/docs](http://socket.io/docs/). It shows how to:

* emit event messages
* listen to event messages
* how to connect to a socket.io server from a standalone node.js client (without the need of a full browser)

### express-sample2
An example that shows some more interesting features, such as:
* how to broadcast messages
* how emit messages to all connected clients
* how to listen to disconnect event
* how to emit messages without using socket.io events (just as a cross browser websocket)

## License

MIT © [Andrea Tarquini](https://blog.h4t0n.com)
