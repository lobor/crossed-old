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
                ['@crossed/overlay']: path.resolve(
                  __dirname,
                  '../packages/overlay/src'
                ),
                // ['@crossed/utils']: path.resolve(__dirname, '../utils/src'),
                // ['@crossed/hooks']: path.resolve(__dirname, '../hooks/src'),
                // ['@crossed/overlay']: path.resolve(
                //   __dirname,
                //   '../overlay/src'
                // ),
                // ['@crossed/icon']: path.resolve(__dirname, '../icon/src'),
                // ['@crossed/transitions']: path.resolve(
                //   __dirname,
                //   '../transitions/src'
                // ),
                // For development, we want to alias the library to the source
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
