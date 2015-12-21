const generators = require('services/generators');
const GENERATOR_NAME = 'ages';

let ws = null;
let timestamp = null;
let intervalID = null;

/**
 * Send random age values to the client uses websocket protocol.
 * @param websocket {Object} - Instance of webSocket connection.
 */
function ageIndicator (websocket) {
  ws = websocket;

  ws.on('message', parseMessage);
  ws.on('close', () => clearInterval(intervalID));
}

/**
 * Handle client massages by websocket.
 * @param payload
 * @returns {boolean}
 */
function parseMessage (payload) {
  const opt = JSON.parse(payload);

  if (opt.key !== GENERATOR_NAME) return false;

  intervalID = setInterval(getGeneratedData.bind(this, opt), opt.updateTime * 1000);
}

/**
 * Search data from database and send collection of them to subscribers.
 * @param opt {Object} - options for data searching.
 */
function getGeneratedData (opt) {
  generators[GENERATOR_NAME]
    .getDataSlice(opt.limit, timestamp)
    .exec((err, data) => { if (!err && data.length) sendData(data); });
}

/**
 * Send latest data from Ages generator to client by websocket.
 * @param payload {Array || Object} data object or collection with them.
 */
function sendData (payload) {
  // Save latest data's value object timestamp. It allow server returns to the clients only actual (new) data.
  timestamp = payload.reverse()[0].genDate;

  // added send data generator ID
  const data = { key: GENERATOR_NAME, payload };

  ws.send(JSON.stringify(data));
}

module.exports = ageIndicator;
