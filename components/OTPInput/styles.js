import { StyleSheet, Dimensions } from 'react-native';
import { fontFamilies } from '../../assets/fonts';
import { colors } from '../../utils/Colors';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    errorCodeContainerStyle: {
        backgroundColor: '#FFEDED',
        borderWidth: 1,
        borderColor: "#EC3838",
        width: 50,
        height: 50,
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginHorizontal: 17,
    },
    verifyCodeContainerStyle: {
        backgroundColor: '#EAFFFF',
        borderWidth: 1,
        borderColor: "#009491",
        width: 50,
        height: 50,
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginHorizontal: 17,
    },
    verifyCodeContainerUncheckedStyle: {
        backgroundColor: colors.backgroundColor,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        width: 50,
        height: 50,
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginHorizontal: 17,
    },
    inputBox: {
        marginHorizontal: 0,
        flex: undefined,
        width: 50,
        height: 50,
        fontSize: 24,
        color: '#61707F',
        textAlign: 'center',
    }
});

export default styles;
