import { StyleSheet } from 'react-native';
import { colors } from 'utils/Colors';
import { fontFamilies } from 'assets/fonts'

const styles = StyleSheet.create({
    safeStyle: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        paddingHorizontal: 30
    },
    logoContainer: {
        marginTop: 40
    },
    logoImage: {
        width: 175,
        height: 55,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    innerContainer: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 20,
    },
    headingContainer: {
        marginTop: 34,
        width: "100%",
        alignItems: 'center',
    },
    headingText: {
        fontSize: 24,
        fontFamily: fontFamilies.BOLD,
        color: colors.headingText,
    },
    descriptionText: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: fontFamilies.REGULAR,
        color: colors.descriptionText,
    },
    btnText: {
        fontSize: 14,
        lineHeight: 22,
    },
    btnContainer: {
        marginTop: 30
    },
    fogretPasswordText: {
        fontSize: 12,
        textAlign: 'center',
        color: colors.lightBlue,
        alignSelf: 'center',
        marginTop: 11,
        fontFamily: fontFamilies.REGULAR
    },
    signupQuestionText: {
        fontSize: 12,
        textAlign: 'center',
        color: colors.lightGrey,
        alignSelf: 'center',
        fontFamily: fontFamilies.REGULAR
    },
    signUpText: {
        fontSize: 14,
        color: colors.lightBlue,
        fontFamily: fontFamilies.SEMI_BOLD
    },
    orText: {
        fontSize: 14,
        color: colors.inputTextColor,
        // fontFamily: fontFamilies.Bold,
        marginHorizontal: 10
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 40
    },
    horizontalDivider: {
        flex: 1,
        height: 1,
        backgroundColor: colors.inputTextColor
    },
    socialLoginButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialLoginButton: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.socialLoginButtonBackground,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    socialLoginButtonIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    arrowFlagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flagEmojiText: {
        fontSize: 16,
        marginRight: 5,
    },
    callingCodeText: {
        fontSize: 13,
        marginRight: 5,
        color: colors.lightBlack,
        fontFamily: fontFamilies.MEDIUM
    },
    downArrow: {
        width: 10,
        height: 10,
        resizeMode: 'contain'
    }
});

export default styles
