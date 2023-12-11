const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@config': path.resolve(__dirname, 'src/config'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@router': path.resolve(__dirname, 'src/router'),
    '@screens': path.resolve(__dirname, 'src/screens'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@store': path.resolve(__dirname, 'src/store'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  }),
);
