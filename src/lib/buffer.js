'use strict';

// const fs = require('fs');

module.exports = exports = (path) => {
  const FILE_SIZE_OFFSET = 2; 
  const WIDTH_OFFSET = 18;
  const HEIGHT_OFFSET = 22;
  const NUM_COLORS_OFFSET = 46;
  const COLOR_TABLE_OFFSET = 54;
  const BITS_PER_PIXEL = 28;
  const COLOR_TABLE_LENGTH = 1078;
  const PIXEL_ARRAY_OFFSET = COLOR_TABLE_LENGTH;

  class Picture {
    constructor(buffer) {
      this.type = buffer.toString('utf-8', 0, 2);
      this.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
      this.width = buffer.readInt32LE(WIDTH_OFFSET);
      this.height = buffer.readInt32LE(HEIGHT_OFFSET);
      this.numColors = buffer.readInt32LE(NUM_COLORS_OFFSET);
      this.bitsPerPixel = buffer.readInt16LE(BITS_PER_PIXEL);
      this.colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_LENGTH);
      this.pixelArray = buffer.slice(PIXEL_ARRAY_OFFSET);
      this.bmpHeader = buffer.slice(0,14);
      this.dibHeader = buffer.slice(14,54);
      this.length = buffer.length;
    }
  }
};