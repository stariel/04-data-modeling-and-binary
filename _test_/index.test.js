'use strict';

const index = require(`${__dirname}/../index.js`);

it('should create a file with the filepath newImg.bmp', () => {
  let path = `${__dirname}/../assets/newImg.bmp`;
  index.createImage(path, (err, buffer) => {
    expect(err).toBeUndefined();
    expect(typeof buffer).toBe('object');
  
  });
});