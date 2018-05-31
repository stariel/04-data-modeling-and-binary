'use strict';

const bitmapReader = require(`${__dirname}/../src/lib/buffer.js`);
// const createImage = require(`${__dirname}/../index.js`);

describe('Bitmap Reader', () => {
  it('throws an error when the file path is invalid', () => {
    let path = '../../assets.txt';
    bitmapReader(path, (err, buffer) => {
      expect(err).toBeDefined();
      console.log(buffer);
    });
    
  });

  it('should retrieve buffer when given a valid file path', () => {
    let path = `${__dirname}/../assets/bitmap.bmp`;
    bitmapReader(path, (err, buffer) => {
      expect(err).toBeUndefined();
      expect(typeof buffer).toBe('object');
    
    });
   
  });

  it('first two characters of the buffer should be BM', () => {
    let path = `${__dirname}/../assets/bitmap.bmp`;
    bitmapReader(path, (err, buffer) => {
      let actual = buffer.toString('utf-8', 0, 2);
      let expected = 'BM';
      expect(actual).toEqual(expected);
      
    });
    
  });

  it('the object should have the correct dimentions', () => {
    let path = `${__dirname}/../assets/bitmap.bmp`;
    bitmapReader(path, (err, buffer) => {
      expect(this.width).toBe('100');
      expect(this.height).toBe('100');
      console.log(buffer);
    });
  });

  // it('should create a file with the filepath newImage.bmp', () => {
  //   let path = `${__dirname}/../assets/newImage.bmp`;
  //   createImage(path, (err, buffer) => {
  //     expect(err).toBeUndefined();
  //     expect(typeof buffer).toBe('object');
    
  //   });
  // });

});
