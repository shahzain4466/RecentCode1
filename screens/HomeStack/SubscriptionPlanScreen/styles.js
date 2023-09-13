import { StyleSheet } from 'react-native';
import { colors } from 'utils/Colors';
import { fontFamilies } from 'assets/fonts'

const styles = StyleSheet.create({
    safeStyle: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    bannerImage: {
        width: "80%",
        height: 180,
        resizeMode: "contain",
        alignSelf: 'center'
    },
    stripeLogo: {
        marginTop: 40,
        width: 130,
        height: 65,
        resizeMode: "contain",
    },
    monthlyText: {
        color: colors.maroon,
        fontSize: 38,
        fontFamily: fontFamilies.BLACK,
    },
    subscriptionTypeText: {
        color: colors.white,
        fontSize: 7,
        fontFamily: fontFamilies.MEDIUM,
        letterSpacing: 2
    },
    dollerSignText: {
        color: colors.maroon,
        fontSize: 27,
        fontFamily: fontFamilies.MEDIUM,
        lineHeight: 40
    },
    amountText: {
        color: colors.maroon,
        fontSize: 65,
        fontFamily: fontFamilies.BLACK,
        lineHeight: 70
    },
    unsubscribeButton: {
        marginTop: 40,
        paddingVertical: 10,
        paddingHorizontal: 35,
        backgroundColor: colors.white,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    unsubscribeText: {
        color: colors.maroon,
        fontSize: 10,
        fontFamily: fontFamilies.BOLD,
    },
    subscribeImage: {
        marginTop: 35,
        width: "80%",
        height: 122,
        resizeMode: "contain",
        alignSelf: 'center'
    },
    subscriptionCard: {
        marginTop: 35,
        width: 270,
        height: 425,
        resizeMode: 'contain',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    headingText: {
        color: colors.black,
        fontSize: 24,
        fontFamily: fontFamilies.BLACK,
    },
    subscriptionStatusBitView: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 5,
    },
    subscriptionStatusText: {
        color: colors.black,
        fontSize: 11,
        fontFamily: fontFamilies.MEDIUM,
    },
    descriptionText: {
        marginTop: 16,
        color: colors.mediumLightGrey,
        fontSize: 11,
        fontFamily: fontFamilies.REGULAR,
    },
});

export default styles
