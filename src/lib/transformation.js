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
