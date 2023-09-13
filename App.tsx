import React, { useEffect, useRef } from "react";
import { LogBox, StatusBar, TouchableOpacity, Text, TextInput, Platform } from 'react-native'
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import { store } from './store'
import Navigation from "./navigation";
import { setI18nConfig } from "./translations";

LogBox.ignoreAllLogs(true)
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
StatusBar.setBarStyle('dark-content')

if (Platform.OS == "android") {
  StatusBar.setTranslucent(true)
  StatusBar.setBackgroundColor('#00000000')
}

TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {};
TouchableOpacity.defaultProps.activeOpacity = 0.7;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const App = () => {

  useEffect(() => {
    setI18nConfig('en')
  }, [])

  return (
    <Provider store={store}>
      <Navigation />
      <FlashMessage position="bottom" floating={true} />
    </Provider>
  );
};

export default App