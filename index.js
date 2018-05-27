'use strict';

const fileReader = require('src/lib/file.js');
const bitmapParser = require('src/lib/buffer.js');
const transformFile = require('src/lib/transformation.js');

const transformations = ['speckle', 'colorSwap', '', ''];

let startingImg = 'bitmap.bmp';
let newImg = 'newImage.bmp';
let transformation = 'speckle';

fileReader.readFile(`${__dirname}/assets/${startingImg}`, function (err, buffer) {
  if (err) { throw err; }
  let oldImg = bitmapParser(buffer);

  transformFile(oldImg, transformation, (err, buffer) => {
    // let newBuffer = Buffer.concat([oldImg.bmpHeader, oldImg.dibHeader, oldImg.colorTable, oldImg.pixelArray], oldImg.length);
    let newBuffer = buffer;
    fileReader.writeFile(`${__dirname}/assets/${newImg}`, newBuffer, function (err) {
      if (err) { throw err; }
      else {
        console.log(`${newImg} created!`);
      }
    }
    );
  });
});