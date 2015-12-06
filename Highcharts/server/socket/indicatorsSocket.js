const generators = require('../services/generators');

module.exports = function (ws) {
  const activeGenerators = {};
  let generatedValue = {};
  let intervalID = null;

  const callback = function () {
    for (const gen in activeGenerators) {
      if (!activeGenerators.hasOwnProperty(gen)) return false;

      generatedValue = {};
      generatedValue[gen] = activeGenerators[gen].getValue();

      ws.send(JSON.stringify(generatedValue));
    }
  };

  const parseMessage = function (msg) {
    const param = JSON.parse(msg);
    // subscribe client to generator
    if (param.subscribe) activeGenerators[param.subscribe] = generators[param.subscribe];
  };

  intervalID = setInterval(callback, 5000);

  ws.on('message', parseMessage);
  ws.on('close', () => clearInterval(intervalID));
};
