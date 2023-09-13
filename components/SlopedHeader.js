import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
    Dimensions
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import _ from 'lodash'

import { colors } from '../utils/Colors';
import { fontFamilies } from '../assets/fonts';
import { LeftArrowIcon } from 'assets/icons';

const { width: screenWidth } = Dimensions.get("window")

const SlopedHeader = (props) => {
    const {
        containerStyle = {},
        headerTitle = "",
        onBackPress = null,
        screenIcon = null,
    } = props

    const safeAreaInsets = useSafeAreaInsets();

    return (
        <View style={[styles.container, containerStyle]}>
            <StatusBar backgroundColor={colors.statusBarColor} barStyle={"light-content"} />
            <View style={[styles.statusBar, { height: safeAreaInsets.top }]} />
            <View style={styles.slopedBackground} />
            <View style={[styles.contentContainer, { paddingTop: safeAreaInsets.top }]}>
                {onBackPress &&
                    <TouchableOpacity
                        style={styles.backArrowContainer}
                        onPress={onBackPress}>
                        <Image
                            style={styles.backIcon}
                            source={LeftArrowIcon}
                        />
                    </TouchableOpacity>
                }
                <Text style={styles.titleText}>
                    {`${headerTitle}`}
                </Text>
            </View>
            {screenIcon &&
                <Image
                    style={[styles.screenIcon, {
                        top: safeAreaInsets.top,
                    }]}
                    source={screenIcon}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    statusBar: {
        width: "100%",
        backgroundColor: colors.statusBarColor,
    },
    slopedBackground: {
        backgroundColor: colors.tintColor,
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: screenWidth * 2.25,
        borderTopWidth: 100,
        borderRightColor: "transparent",
        borderTopColor: colors.statusBarColor,
    },
    contentContainer: {
        width: "100%",
        position: "absolute",
        paddingHorizontal: 30,
    },
    backArrowContainer: {
        marginLeft: -30,
        marginBottom: -20,
        width: 70,
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
    },
    backIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    titleText: {
        marginTop: 20,
        color: colors.tintColor,
        fontSize: 24,
        fontFamily: fontFamilies.BLACK,
    },
    screenIcon: {
        position: "absolute",
        right: 0,
        width: 50,
        height: 50,
        resizeMode: "contain",
        tintColor: "#FF680166"
    },
})

export default SlopedHeader