'use strict';

const fileReader = require(`${__dirname}/src/lib/file.js`);
const bitmapParser = require(`${__dirname}/src/lib/buffer.js`);
const transformFile = require(`${__dirname}/src/lib/transformation.js`);

// let oldImg = 'bitmap.bmp';
// let newImg = 'newImage.bmp';


module.exports = exports = {};
exports.createImage = (oldImg, newImg, transName) => {
  let transformation;

  switch (transName) {
  case 'speckle':
    transformation = transformFile.speckle;
    break;

  case 'colorSwap':
    transformation = transformFile.colorSwap;
    break;

  case 'random':
    transformation = transformFile.random;
    break;

  default:
    console.log('Choose from speckle, color swap, or random');

  }

  fileReader.readFile(`${__dirname}/assets/${oldImg}`,(err, buffer) => {
    if (err) { console.log(err); }
    
    let oldBuffer = bitmapParser(buffer);
    console.log(oldBuffer);
    let newBuffer = transformation(oldBuffer);
  
    // console.log(newBuffer);
    
    // let newBuffer = buffer;
    fileReader.writeFile(`${__dirname}/assets/newImg.bmp`, newBuffer,(err) => {
      if (err) { throw err; }
      else {
        console.log(newImg);
      }
    });
  }); 
};