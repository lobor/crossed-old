const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      process.env.NODE_ENV !== 'production'
        ? [
            'module-resolver',
            {
              alias: {
                ['@crossed/hooks']: path.resolve(
                  __dirname,
                  '../hooks/src'
                ),
                ['@crossed/transitions']: path.resolve(
                  __dirname,
                  '../transitions/src'
                ),
                ['@crossed/overlay']: path.resolve(
                  __dirname,
                  '../overlay/src'
                ),
                ['@crossed/utils']: path.resolve(
                  __dirname,
                  '../utils/src'
                ),
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
