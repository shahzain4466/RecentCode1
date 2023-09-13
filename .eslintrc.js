module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      'babel-module': {
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
      },
    },
  },

};
