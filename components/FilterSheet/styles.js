import { fontFamilies } from 'assets/fonts';
import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'utils/Colors';

const { width: screenWidth } = Dimensions.get('screen');

const styles = StyleSheet.create({
    bottomSheetContainer: {
        flex: 1,
        backgroundColor: '#09142566',
    },
    bottomSheet: {
        flex: 1,
        backgroundColor: colors.sheetBackground,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
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
    contentContainerStyle: {
        paddingHorizontal: 30,
    },
    headingText: {
        fontSize: 24,
        fontFamily: fontFamilies.BOLD,
        color: colors.tintColor,
        marginBottom: 5,
    },
    dropDownPickerContainer: {
        height: 44,
        marginTop: 15,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        flexDirection: "row",
        borderColor: "#BEBEBE",
        justifyContent: "space-between",
    },
    dropDownPickerTitle: {
        fontSize: 14,
        fontFamily: fontFamilies.MEDIUM,
        color: colors.headingText,
    },
    downArrow: {
        width: 12,
        height: 12,
        resizeMode: 'contain'
    },
    btnContainer: {
        marginTop: 40,
    }
});

export default styles;
