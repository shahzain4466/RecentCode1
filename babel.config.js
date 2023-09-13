module.exports = {
  plugins: [
    ['module-resolver',
      {
        extensions: ['.js', 'ts', 'tsx', 'jsx', '.ios.js', '.android.js', '.json'],
        alias: {
          actions: './actions',
          api: './api',
          assets: './assets',
          components: './components',
          navigation: './navigation',
          reducers: './reducers',
          sagas: './sagas',
          screens: './screens',
          store: './store',
          translations: './translations',
          utils: './utils'
        },
      }
    ],
    [
      'react-native-reanimated/plugin', {
        relativeSourceLocation: true,
      },
    ]
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
