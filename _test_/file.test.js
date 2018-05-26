'use strict';

const bitmapReader = require('../src/lib/file.js');

describe('Bitmap Reader', () => {
  it('throws an error when the file path is invalid', (done) => {
    let path = '../assets.txt';
    bitmapReader(path, (err, data) => {
      expect(err).toBeDefined();
      console.log(data);
    });
    done();
  });

  it('should retrieve data when given a valid file path', (done) => {
    let path = '../assets/bitmap.bmp';
    bitmapReader(path, (err, data) => {
      expect(err).toBeUndefined();
      expect(typeof data).toBe('object');
      console.log(data);
    });
    done();
  });
});
