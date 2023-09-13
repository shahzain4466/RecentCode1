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
    logoImage: {
        marginTop: 35,
        width: "80%",
        height: 30,
        resizeMode: "contain",
        alignSelf: 'center'
    },
    descriptionText: {
        marginHorizontal: 10,
        textAlign: "center",
        marginTop: 35,
        color: colors.darkGrey,
        fontSize: 12,
        fontFamily: fontFamilies.REGULAR,
        textShadowRadius: 3,
        textShadowColor: "#00000044",
        textShadowOffset: {
            width: 3,
            height: 3
        }
    },
    socialLogoButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialLogoContainer: {
        width: 54,
        height: 54,
        borderRadius: 10,
        backgroundColor: colors.socialLoginButtonBackground,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    socialButtonLogo: {
        width: 28,
        height: 28,
        resizeMode: 'contain'
    }
});

export default styles
