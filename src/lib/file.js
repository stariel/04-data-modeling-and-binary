'use strict';

const fs = require('fs');

module.exports = exports = (path) => {
  const WIDTH_OFFSET = 18;
  const HEIGHT_OFFSET = 22;
  const NUM_COLORS_OFFSET = 46;
  const COLOR_TABLE_OFFSET = 54;
  const BITS_PER_PIXEL = 28;
  const COLOR_TABLE_LENGTH = 1078;
  const PIXEL_ARRAY_OFFSET = COLOR_TABLE_LENGTH;

  class Picture {
    constructor(buffer) {
      this.width = buffer.readInt32LE(WIDTH_OFFSET);
      this.height = buffer.readInt32LE(HEIGHT_OFFSET);
      this.numColors = buffer.readInt32LE(NUM_COLORS_OFFSET);
      this.bitsPerPixel = buffer.readInt16LE(BITS_PER_PIXEL);
      this.colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_LENGTH);
      this.pixelArray = buffer.slice(PIXEL_ARRAY_OFFSET);
    }
  }
  const output = '../assets/newImage.bmp';
  fs.readFile(path, (err, buffer) => {
    if (err) throw err;
    let image = new Picture(buffer);
    console.log(image);
    fs.writeFile(output, buffer, (err) => {
      if (err) throw err;
      console.log(buffer);
      return image;
    });
  });

};


