const path = require('path');

module.exports = {
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './app/assets'),
      utils: path.resolve(__dirname, './app/utils'),
    },
  },
};
