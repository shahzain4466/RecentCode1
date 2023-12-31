

import React from 'react';
import { Platform, Text, View, TouchableOpacity, Keyboard, InputAccessoryView } from 'react-native';

import { colors } from '../utils/Colors';

const KeyboardAccessoryView = (props) => {

    const {
        inputAccessoryViewID = "KeyboardAccessoryView",
        onPress = () => { }
    } = props

    if (Platform.OS === 'ios') {
        return (
            <InputAccessoryView nativeID={inputAccessoryViewID}>
                <View style={{
                    width: '100%',
                    height: 35,
                    backgroundColor: colors.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            Keyboard.dismiss()
                            if (onPress && typeof onPress == 'function') onPress()
                        }}>
                        <Text style={{ color: colors.tintColor, fontSize: 18, marginHorizontal: 20 }}>{"DONE"}</Text>
                    </TouchableOpacity>
                </View>
            </InputAccessoryView>
        )
    }
    return null
}

export default KeyboardAccessoryView