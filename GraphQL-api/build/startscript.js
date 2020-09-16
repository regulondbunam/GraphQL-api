"use strict";

var cmd = require('node-cmd');

cmd.run('npm run build && node build/index.js'); // pm2 start pm2ProductionConfig.json