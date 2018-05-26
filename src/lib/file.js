'use strict';

const fs = require('fs');

module.exports = exports = (path) => {
  fs.readFile(path, (err, data) => {
    if(err) throw err;
    console.log(data);
  });
};

