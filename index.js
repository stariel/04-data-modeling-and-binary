'use strict';

const fileReader = require(`${__dirname}/src/lib/file.js`);
const bitmapParser = require(`${__dirname}/src/lib/buffer.js`);
const transformFile = require(`${__dirname}/src/lib/transformation.js`);


const transformations = ['speckle', 'colorSwap', '', ''];

let oldImg = 'bitmap.bmp';
let newImg = 'newImage.bmp';
let transformation = 'speckle';


module.exports = exports = {};
exports.createImage = (oldImg, transformation, newImg => {
  fileReader.readFile(`${__dirname}/assets/${oldImg}`,(err, buffer) => {
    if (err) { throw err; }
    
    let oldBuffer = bitmapParser(buffer);
    console.log(oldBuffer);
    let newBuffer = Buffer.concat([oldBuffer.bmpHeader, oldBuffer.dibHeader, oldBuffer.colorTable, oldBuffer.pixelArray], oldBuffer.length);
  
    // console.log(newBuffer);
    
    // let newBuffer = buffer;
    fileReader.writeFile(`${__dirname}/assets/newImg.bmp`, newBuffer,(err) => {
      if (err) { throw err; }
      else {
        console.log(newImg);
      }
    });
  }); 
});
// export { createImage };
exports.createImage(oldImg, transformation, newImg);