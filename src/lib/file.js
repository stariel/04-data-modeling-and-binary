'use strict';

// const bitmapParser = require(`${__dirname}/buffer.js`);
const fs = require('fs');

module.exports = exports = {};
// read
exports.readFile = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if (err) return callback(err);
    return callback(null, data);
  });
};
// write
exports.writeFile = (newPath, newBuffer, callback) => {
  fs.writeFile(newPath, newBuffer, (err, data) => {
    if (err) return callback(err);
    console.log('New file written');
    return callback(null, data);
  });
};