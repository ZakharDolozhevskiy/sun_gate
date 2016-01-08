function Socket (URL) {
  this._handlers = [];
  this._ws = new WebSocket(URL);

  this._ws.onmessage = this.msgListener.bind(this);
}

Socket.prototype.sendMsg = function (msg) { this._ws.send(JSON.stringify(msg)); };

Socket.prototype.addHandler = function (data) { this._handlers.push(data); };

Socket.prototype.msgListener = function (msg) {
  var data = JSON.parse(msg.data);

  this._handlers.forEach(function (handler) {
    if (handler.key === data.key) handler.callback(data.payload);
  });
};

// added instance of webSocket connection
window.socket = new Socket('ws://localhost:3000');
