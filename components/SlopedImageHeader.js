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
import AvatarComponent from './AvatarComponent';

const { width: screenWidth } = Dimensions.get("window")

interface myProps {
    containerStyle?: ViewProps | object;
    onBackPress?: () => void;
    bannerImage?: string | undefined | null;
}

const SlopedImageHeader = (props: myProps) => {
    const {
        containerStyle = {},
        onBackPress = null,
        bannerImage = null,
    } = props

    const safeAreaInsets = useSafeAreaInsets();

    return (
        <View style={[styles.container, containerStyle]}>
            <StatusBar backgroundColor={colors.statusBarColor} barStyle={"light-content"} />
            <AvatarComponent
                source={bannerImage}
                style={styles.imageContainer}
                imageStyle={styles.imageStyle}
            />
            <View style={styles.slopedBackground}>
            </View>
            <View style={[styles.contentContainer, { paddingTop: safeAreaInsets.top }]}>
                {true &&
                    <TouchableOpacity
                        style={styles.backArrowContainer}
                        onPress={onBackPress}>
                        <Image
                            style={styles.backIcon}
                            source={LeftArrowIcon}
                        />
                    </TouchableOpacity>
                }
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
    },
    slopedBackground: {
        position: "absolute",
        backgroundColor: colors.tintColor,
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: screenWidth * 2.25,
        borderBottomWidth: 100,
        borderLeftColor: "transparent",
        borderBottomColor: colors.white,
        bottom: 0,
    },
    imageContainer: {
        width: "100%",
        height: 280
    },
    imageStyle: {
        resizeMode: "cover"
    },
    contentContainer: {
        width: "100%",
        position: "absolute",
        paddingHorizontal: 30,
    },
    backArrowContainer: {
        marginLeft: -30,
        width: 70,
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
    },
    backIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
})

export default SlopedImageHeader