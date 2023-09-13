import { fontFamilies } from "assets/fonts"
import { RightArrowIcon } from "assets/icons"
import React from "react"
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native"

import { colors } from "utils/Colors"

const HomeButton = (props) => {
    const {
        isActive = false,
        isFavorite = false,
        icon = null,
        title = "",
        onPress = () => { },
        count = 0
    } = props

    let _count = count
    if (count > 0 && count < 10) {
        _count = `0${count}`
    }

    return (
        <TouchableOpacity
            style={[styles.iconContainer, isActive ? { backgroundColor: colors.secondaryColor } : {}]}
            onPress={onPress}>
            <Image
                source={icon}
                style={styles.buttonIcon}
            />
            <View style={styles.contentContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.titleText}>{`${title}`}</Text>
                </View>
                {isFavorite &&
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.countContainer}>
                            <Text style={styles.countText}>{_count}</Text>
                        </View>
                        <Image
                            source={RightArrowIcon}
                            style={styles.rightIcon}
                        />
                    </View>
                }
            </View>
            {isActive && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    iconContainer: {
        overflow: "hidden",
        backgroundColor: colors.tintColor,
        marginTop: 15,
        paddingVertical: 15,
        paddingHorizontal: 30,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonIcon: {
        tintColor: colors.white,
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
    rightIcon: {
        marginLeft: 15,
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 18,
        paddingRight: 30,
    },
    titleText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fontFamilies.HEAVY
    },
    countText: {
        color: colors.tintColor,
        fontSize: 10,
        fontFamily: fontFamilies.HEAVY
    },
    countContainer: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: "#FFA76A",
        alignItems: "center",
        justifyContent: "center",
    },
    activeIndicator: {
        backgroundColor: colors.activeIndicatorColor,
        position: 'absolute',
        top: -36,
        right: -36,
        borderRadius: 36,
        width: 72,
        height: 72,
    },
});

export default HomeButton