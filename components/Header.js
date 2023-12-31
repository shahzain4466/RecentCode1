import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar
} from 'react-native';
import _ from 'lodash'

import { colors } from '../utils/Colors';
import { fontFamilies } from '../assets/fonts';

const Header = (props) => {

    return (
        <SafeAreaView>
            <View style={[styles.container, props.containerStyle]} >
                <TouchableOpacity
                    disabled={_.isNil(props.onLeftAction)}
                    onPress={() => {
                        if (props.onLeftAction && typeof props.onLeftAction) {
                            props.onLeftAction()
                        }
                    }}
                    style={[styles.buttonLeftContainer, props.leftButtonContainerStyle]}>
                    {props.leftIconChildren ?
                        props.leftIconChildren
                        :
                        props.leftIcon &&
                        <Image
                            style={[styles.buttonIcon, { tintColor: colors.white }, props.leftButtonIconStyle]}
                            source={props.leftIcon}
                        />
                    }
                    {props.leftText &&
                        <Text style={[styles.buttonText, props.leftButtonTextStyle]}>
                            {props.leftText}
                        </Text>
                    }
                </TouchableOpacity>
                <View style={[styles.centerComponentStyle, props.centerComponentExtraStyle]}>
                    {props.headerText &&
                        <Text style={[styles.headerText, props.hearderTextStyle]}>
                            {props.headerText}
                        </Text>
                    }
                </View>
                <TouchableOpacity
                    disabled={_.isNil(props.onRightAction)}
                    onPress={() => {
                        if (props.onRightAction && typeof props.onRightAction) {
                            props.onRightAction()
                        }
                    }}
                    style={[styles.buttonRightContainer, props.rightButtonContainerStyle]}>
                    {props.rightIcon &&
                        <Image
                            style={[styles.buttonIcon, props.rightButtonIconStyle]}
                            source={props.rightIcon}
                        />
                    }
                    {props.rightText &&
                        <Text style={[styles.buttonText, props.rightButtonTextStyle]}>
                            {props.rightText}
                        </Text>
                    }
                </TouchableOpacity>
            </ View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        backgroundColor: '#00000000',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
    },
    buttonLeftContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    buttonRightContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    centerComponentStyle: {
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        width: '57%',
    },
    buttonIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    buttonText: {

    },
    headerText: {
        fontSize: 20,
        // fontFamily: fontFamilies.Bold,
        color: colors.inputTextColor,
        textAlign: 'center'
    }
})

export default Header