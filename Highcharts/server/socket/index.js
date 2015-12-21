const WebSocketServer = require('ws').Server;
const ageIndicator = require('./indicators/ageIndicator');
const genderIndicator = require('./indicators/genderIndicator');
const secondsIndicator = require('./indicators/secondsIndicator');
const currencyIndicator = require('./indicators/currencyIndicator');

/**
 * Connect handlers to webSocket instance
 * @param ws {Object} - webSocket connection instance
 */
function notifySocketHandlers (ws) {
  ageIndicator(ws);
  genderIndicator(ws);
  secondsIndicator(ws);
  currencyIndicator(ws);
}

/**
 * Wrap the http server to add WebSocket protocol
 * @param server - instance of HTTP server
 */
function initWebSocket (server) {
  const socket = new WebSocketServer({ server });
  // Add webSocket handlers when connection will be installed
  socket.on('connection', notifySocketHandlers);
}

module.exports = initWebSocket;
