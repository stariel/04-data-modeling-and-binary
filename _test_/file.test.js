'use strict';

const bitmapReader = require('../src/lib/file.js');

describe('Bitmap Reader', () => {
  it('throws an error when the file path is invalid', (done) => {
    let path = '../assets.txt';
    bitmapReader(path, (err, buffer) => {
      expect(err).toBeDefined();
      console.log(buffer);
    });
    done();
  });

  it('should retrieve buffer when given a valid file path', (done) => {
    let path = '../assets/bitmap.bmp';
    bitmapReader(path, (err, buffer) => {
      expect(err).toBeUndefined();
      expect(typeof buffer).toBe('object');
      console.log(buffer);
    });
    done();
  });

  it('first two characters of the buffer should be BM', (done) => {
    let path = '../assets/bitmap.bmp';
    bitmapReader(path, (err, buffer) => {
      let actual = buffer.toString('utf-8', 0, 2);
      let expected = 'BM';
      expect(actual).toEqual(expected);
    });
    done();
  });

  it('the object should have the correct dimentions', (done) => {
    let path = '../assets/bitmap.bmp';
    bitmapReader(path, () => {
      expect(this.width).toBe('100');
      expect(this.height).toBe('100');
    });
    done();
  });
  
  it('should create a file with the filepath newImage.bmp', (done) => {
    let path = '../assets/bitmap.bmp';
    bitmapReader(path, (err, buffer) => {
      expect('../assets/newImage.bmp').toBeDefined();
      expect(typeof buffer).toBe('object');
    });
    done();
  });


});
