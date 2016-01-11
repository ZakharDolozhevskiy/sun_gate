class Socket {
  constructor (URL) {
    this._handlers = [];
    this._ws = new WebSocket(URL);
    this._ws.onmessage = this.msgListener.bind(this);
  }

  sendMsg (msg) { this._ws.send(JSON.stringify(msg)); }

  addHandler (data) { this._handlers.push(data); }

  msgListener (msg) {
    const data = JSON.parse(msg.data);
    this._handlers.forEach((handler) => handler.key === data.key ? handler.callback(data.payload) : null);
  }
}

export default new Socket(`ws://localhost:3000`);
