import { StyleSheet } from 'react-native';
import { colors } from 'utils/Colors';
import { fontFamilies } from 'assets/fonts'

const styles = StyleSheet.create({
    safeStyle: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    contentContainer: {
        paddingHorizontal: 22
    },
    headingText: {
        fontSize: 24,
        fontFamily: fontFamilies.BLACK,
        alignSelf: "center",
        marginHorizontal: 22
    }
});

export default styles
