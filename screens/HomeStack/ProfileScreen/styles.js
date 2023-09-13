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
    hyperLinksContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    hyperLinkContainer: {
        paddingBottom: 2,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondaryColor
    },
    hyperLink: {
        color: colors.secondaryColor,
        fontSize: 14,
        fontFamily: fontFamilies.REGULAR,
    },
    userDetailsContainer: {
        backgroundColor: colors.white,
        marginTop: 35,
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
    detailCard: {
        backgroundColor: colors.userDetailCardColor,
        height: 40,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    detailTitle: {
        color: colors.lessBlack,
        fontSize: 14,
        fontFamily: fontFamilies.BOLD,
    },
    detailDescription: {
        color: colors.lessBlack,
        fontSize: 14,
        fontFamily: fontFamilies.MEDIUM,
    },
});

export default styles
