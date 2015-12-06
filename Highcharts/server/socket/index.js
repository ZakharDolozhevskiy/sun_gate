const WebSocketServer = require('ws').Server;
const indicatorsSocket = require('./indicatorsSocket');

/**
 * Connect handlers to webSocket instance
 * @param ws {Object} - webSocket connection instance
 */
function notifySocketHandlers (ws) {
  indicatorsSocket(ws);
}

/**
 * Wrap the http server to add WebSocket protocol
 * @param server - instance of HTTP server
 */
function initWebSocket (server) {
  const socket = new WebSocketServer({ server: server });
  // Add webSocket handlers when connection will be installed
  socket.on('connection', notifySocketHandlers);
}

module.exports = initWebSocket;
