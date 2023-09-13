import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'

import { colors } from '../utils/Colors'
import { fontFamilies } from '../assets/fonts'

const Button = (props) => {
    const {
        disabled = false,
        loading = false,
        color,
        size,
        textStyle = {},
        container = {},
        text = "",
        leftIcon = null,
        leftIconStyle = {},
        rightIcon = null,
        rightIconStyle = {},
        onPress = () => { },
    } = props

    return (
        <TouchableOpacity
            disabled={loading || disabled}
            onPress={onPress}
            style={[styles.innerContainer, container]}>
            {loading &&
                <ActivityIndicator
                    animating={loading}
                    size={size ? size : 'small'}
                    color={color ? color : colors.white}
                    style={[{ marginRight: 15 }]}
                />
            }
            {leftIcon && <Image style={[styles.imageStyle, leftIconStyle]} resizeMode={'contain'} source={leftIcon} />}
            <Text style={[styles.txt, textStyle]}>{`${text}`}</Text>
            {rightIcon && <Image style={[styles.imageStyle, rightIconStyle]} resizeMode={'contain'} source={rightIcon} />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        backgroundColor: colors.buttonBackground,
        borderRadius: 10,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    },
    txt: {
        color: colors.inputTextColor,
        fontFamily: fontFamilies.BLACK,
        textAlign: 'center'
    },
    imageStyle: {
        width: 15,
        height: 15,
        resizeMode: "contain",
        marginHorizontal: 10
    }
});

export default Button