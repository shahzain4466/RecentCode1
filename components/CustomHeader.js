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
import { LogoImageWhite } from 'assets/images';

const { width: screenWidth } = Dimensions.get("window")

const CustomHeader = (props) => {
    const {
        containerStyle = {}
    } = props

    const safeAreaInsets = useSafeAreaInsets();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.statusBarColor} barStyle={"light-content"} />
            <View style={styles.roundBackground}>
                <View style={[styles.statusBar, { height: safeAreaInsets.top }]} />
                <View style={styles.contentContainer}>
                    <Image
                        style={styles.iconImage}
                        source={LogoImageWhite}
                    />
                    <Text style={styles.descriptionText}>
                        {"Lorem ipsum dolor sit amet consectetur. Elit amet sit gravida urna in nibh nunc at non. Commodo platea netus tellus."}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    statusBar: {
        width: "100%",
        backgroundColor: colors.statusBarColor,
        marginTop: screenWidth * 0.4
    },
    roundBackground: {
        height: screenWidth,
        width: screenWidth * 1.25,
        paddingRight: screenWidth * 0.25,
        marginTop: -(screenWidth * 0.4),
        backgroundColor: colors.tintColor,
        borderBottomLeftRadius: screenWidth / 2,
    },
    contentContainer: {
        paddingTop: 30,
        paddingHorizontal: 30,
        alignItems: "flex-end",
        paddingLeft: screenWidth / 3.5
    },
    iconImage: {
        width: 200,
        height: 60,
        resizeMode: 'contain'
    },
    descriptionText: {
        textAlign: "center",
        marginTop: 10,
        color: colors.white,
        fontSize: 14,
        fontFamily: fontFamilies.SEMI_BOLD
    },
})

export default CustomHeader