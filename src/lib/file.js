'use strict';

const fs = require('fs');

module.exports = exports = (path) => {
  const output = '../assets/newImage.bmp';
  fs.readFile(path, (err, buffer) => {
    if (err) throw err;
    let image = new Picture(buffer);
    console.log(image);
    fs.writeFile(output, newBuffer, (err) => {
      if (err) throw err;
      console.log(buffer);
      return image;
    });
  });

};


