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
    
    // let oldBuffer = bitmapParser(buffer);
    // let newBuffer = Buffer.concat([oldImg.bmpHeader, oldImg.dibHeader, oldImg.colorTable, oldImg.pixelArray], oldImg.length);
    
    let newBuffer = buffer;
    fileReader.writeFile(`${__dirname}/assets/newImg.bmp`, newBuffer,(err) => {
      if (err) { throw err; }
      else {
        console.log(newImg);
      }
    });
  }); 
});
// export { createImage };
// createImage(oldImg, transformation, newImg);