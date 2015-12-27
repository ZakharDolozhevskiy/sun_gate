/**
 * Basic class that describe indicators.
 * @type {Indicator}
 */
class Indicator {
  constructor (websocket, opt) {
    this.ws = websocket;
    this.timestamp = null;
    this.intervalID = null;
    // Configuration:
    this.generator_name = opt.generator_name;
    this.generator = opt.generator;

    this.launchIndicator();
  }

  /**
   * Send latest data from Ages generator to client by websocket.
   * @param payload {Array || Object} data object or collection with them.
   */
  sendData (payload) {
    // Save latest data's value object timestamp. It allow server returns to the clients only actual (new) data.
    this.timestamp = payload.reverse()[0].genDate;

    // added send data generator ID
    const data = { key: this.generator_name, payload };

    this.ws.send(JSON.stringify(data));
  }

  /**
   * Search data from database and send collection of them to subscribers.
   */
  getData (opt) {
    this.generator
      .getDataSlice(opt.limit, this.timestamp)
      .exec((err, data) => {
        debugger;
        if (!err && data.length) this.sendData(data);
      });
  }

  /**
   * Handle client massages by websocket.
   * @param payload
   * @returns {boolean}
   */
  parseMessage (payload) {
    const opt = JSON.parse(payload);

    if (opt.key !== this.generator_name) return false;

    this.intervalID = setInterval(this.getData.bind(this, opt), opt.updateTime * 1000);
  }

  launchIndicator () {
    this.ws.on('message', this.parseMessage.bind(this));
    this.ws.on('close', () => clearInterval(this.intervalID));
  }
}

module.exports = Indicator;
