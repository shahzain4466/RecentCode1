import React from "react"
import {
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native"

import { colors } from "utils/Colors"

const { width: deviceWidth } = Dimensions.get('window')

const TabButton = (props) => {
    const {
        focused = false,
        icon = null,
        onPress = () => { }
    } = props
    return (
        <TouchableOpacity
            style={styles.iconContainer}
            onPress={onPress}>
            <Image
                source={icon}
                style={[styles.tabIconStyle, { tintColor: focused ? colors.tabActive : colors.tabInactive }]}
            />
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    iconContainer: {
        padding: 5,
        height: 60,
        width: deviceWidth / 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabIconStyle: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    }
});

export default TabButton