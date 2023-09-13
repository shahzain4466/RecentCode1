import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
import { fontFamilies } from 'assets/fonts';
import { colors } from 'utils/Colors';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    logoContainer: {
        flex: 0.9,
        marginHorizontal: 20
    },
    verifyEmailText: {
        fontFamily: fontFamilies.InterBold,
        fontSize: 24,
        marginTop: 23,
    },
    headerView: {
        marginHorizontal: 20,
        marginTop: 20
    },
    verificationCodeText: {
        fontFamily: fontFamilies.InterRegular,
        fontSize: 16,
        marginTop: 8,
    },
    rowView: {
        flexDirection: "row",
        alignItems: 'center',
        borderWidth: 1,
        height: 56,
        borderColor: '#09142550',
        marginTop: 47,
        borderRadius: 20,
        paddingHorizontal: 16
    },
    input: {
        width: '80%',
        height: '100%',
        fontSize: 17,
        fontFamily: fontFamilies.InterRegular,
    },
    emailInput: {
        fontSize: 17,
        borderWidth: 1,
        height: 56,
        borderColor: '#09142550',
        marginTop: 32,
        borderRadius: 20,
        paddingHorizontal: 15
    },
    countryTitleTextStyle: {
        color: "#091425",
        fontFamily: fontFamilies.InterBold,
        fontSize: 17,
        textAlign: 'center',
        marginTop: 5
    },
    dottedLine: {
        width: '90%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: colors.lightGrey
    },
    countryCodeItemView: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    countryCode: {
        fontFamily: fontFamilies.InterRegular,
        fontSize: 17,
    },
    countryTextStyle: {
        fontFamily: fontFamilies.InterRegular,
        fontSize: 17,
        color: '#091425',
        alignSelf: 'center',
    },
    countryImageStyle: {
        fontFamily: fontFamilies.InterRegular,
        fontSize: 21,
        color: '#091425',
        alignSelf: 'center',
        marginRight: 8
    },
    searchContainer: {
        backgroundColor: '#64656820',
        height: 44,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    textInputForSearch: {
        flex: 1,
        paddingLeft: 15,
        fontSize: 22,
    },
    countryCodeStyle: {
        fontFamily: fontFamilies.InterRegular,
        fontSize: 16,
        color: '#646568',
        alignSelf: 'center',
        marginTop: 5,

    },
    bottomViewContainer: {
        flex: 0.1,
        marginHorizontal: 20,
        marginBottom: 20
    },
    buttonTextStyle: {
        color: '#09142590',
        fontFamily: fontFamilies.InterBold,
        fontSize: 18
    },
    buttonContainer: {
        height: 60,
        backgroundColor: '#09142515',
        borderColor: 'transparent',
        borderRadius: 20,
    },
    iconStyle: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: '#646568',
    },
    scrollViewStyle: {
        flex: 1,
        width: '100%',
        marginTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    bottomSheet: {
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    bottomSheetContainer: {
        flex: 1,
        position: 'absolute',
        height: screenHeight,
        width: screenWidth,
        backgroundColor: '#09142566',
    },
    handleViewContainer: {
        width: "100%",
        marginVertical: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    handleView: {
        width: 120,
        height: 4,
        backgroundColor: '#ECECEC',
    },
    crossIconView: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: '#F8F7F7',
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: "center",
    },

});

export default styles;
