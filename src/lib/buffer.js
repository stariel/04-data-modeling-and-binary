'use strict';

require('buffer');

module.exports = function(buffer){
  const FILE_SIZE_OFFSET = 2; 
  const WIDTH_OFFSET = 18;
  const HEIGHT_OFFSET = 22;
  const NUM_COLORS_OFFSET = 46;
  const COLOR_TABLE_OFFSET = 54;
  const BITS_PER_PIXEL = 28;
  const COLOR_TABLE_LENGTH = 1078;
  const PIXEL_ARRAY_OFFSET = COLOR_TABLE_LENGTH;

  return {
    type: buffer.toString('utf-8', 0, 2),
    fileSize: buffer.readInt32LE(FILE_SIZE_OFFSET),
    width: buffer.readInt32LE(WIDTH_OFFSET),
    height: buffer.readInt32LE(HEIGHT_OFFSET),
    numColors: buffer.readInt32LE(NUM_COLORS_OFFSET),
    bitsPerPixel: buffer.readInt16LE(BITS_PER_PIXEL),
    colorTable: buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_LENGTH),
    pixelArray: buffer.slice(PIXEL_ARRAY_OFFSET),
    bmpHeader: buffer.slice(0,14),
    dibHeader: buffer.slice(14,54),
    length: buffer.length,
  };
};