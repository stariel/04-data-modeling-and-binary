'use strict';

module.exports = (buffer, transformation, callback) => {
  transformations[transformation] && transformations[transformation](buffer);
  return callback(null, buffer);
};

let transformations = {};


transformations.speckle = buffer => {
  let newBuffer = buffer;
  for (let i = 0; i < buffer.pixelArray.length; i+=3) {
    newBuffer[i] = 0;
  }
  return newBuffer;
};

transformations.colorSwap = buffer => {
  let newBuffer = buffer;
  for (let i = 0; i < buffer.pixelArray.length; i++) {
    if (buffer[i] === '#000000') {
      newBuffer[i] = '#00FFFF';
    }
  }
  return newBuffer;
};

transformations.random = buffer => {
  let newBuffer = buffer;
  let colorTable = buffer.colorTable;
  for (var i = 0; i < colorTable.length; i += 3) {
    colorTable[i] = (Math.floor(Math.random() * 255));
    colorTable[i + 1] = (Math.floor(Math.random() * 255));
    colorTable[i + 2] = (Math.floor(Math.random() * 255));
  }
  return newBuffer;
};
