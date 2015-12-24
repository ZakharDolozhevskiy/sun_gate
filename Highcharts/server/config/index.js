let nconf = require('nconf');
let path = require('path');

nconf.file({ file: path.resolve(__dirname, 'config.json') });

module.exports = nconf;
