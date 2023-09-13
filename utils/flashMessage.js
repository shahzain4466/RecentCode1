import React from 'react';
import { StatusBar } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { fontFamilies } from '../assets/fonts';

export const showErrorMsg = (msgStr, options = {}) =>
  showMessage({
    message: msgStr,
    type: 'danger',
    ...options
  });


export const showSuccessMsg = (msgStr, options = {}) =>
  showMessage({
    message: msgStr,
    type: 'success',
    ...options
  });

export const showInfoMsg = (msgStr, description, options = {}, autoHide = true, showIcon = false) =>
  showMessage({
    message: msgStr,
    description: description,
    // icon: props => showIcon ? <Image source={SelectSomething} {...props} /> : null,
    autoHide: autoHide,
    duration: 3000,
    type: 'info',
    position: "top",
    style: {
      width: "90%",
      alignSelf: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    hideStatusBar: false,
    statusBarHeight: StatusBar.currentHeight,
    backgroundColor: "#FFFFFF",
    titleStyle: {
      color: "#091425",
      ...(options.titleStyle || {})
    },
    textStyle: {
      color: "#646568",
      marginLeft: showIcon ? 0 : 25,
      fontSize: 15,
      fontFamily: fontFamilies.REGULAR,
      ...(options.textStyle || {})
    },
    ...options
  });

export const showWarningMsg = (msgStr, options = {}) =>
  showMessage({
    message: msgStr,
    type: 'warning',
    ...options
  });