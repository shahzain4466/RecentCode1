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
        flex: 1,
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
        textAlign: "center"
    },
    btnText: {
        fontSize: 14,
        lineHeight: 22,
    },
    btnContainer: {
        marginTop: 50
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
    newPasswordImageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    newPasswordImage: {
        width: "100%",
        height: 180,
        resizeMode: "contain"
    }
});

export default styles
