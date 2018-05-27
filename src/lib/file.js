'use strict';

const fs = require('fs');

module.exports = exports = {
  read:
    function read(path) {
      fs.readFile(path, (err, buffer) => {
        if (err) throw err;
        let image = new Picture(buffer);
        console.log(image);
      });
    },

  write:
      function write(newPath, newBuffer) {
        fs.writeFile(newPath, newBuffer, (err) => {
          if (err) throw err;
          console.log(newBuffer);
        });
      },
};