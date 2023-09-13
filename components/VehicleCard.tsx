import React, { FC, LegacyRef, ReactNode, useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    TextInputProps,
    StyleProp,
    ViewProps,
    TextProps,
    Pressable,
} from 'react-native'

import { colors } from '../utils/Colors';
import { fontFamilies } from '../assets/fonts'
import { VisibleEyeIcon } from '../assets/icons';

interface myProps {
    containerStyle?: object;
    LeftIcon?: any,
    isPasswordField?: boolean;
    hideLabel?: boolean;
    secureTextEntry?: boolean;
    customInputStyle?: StyleProp<ViewProps | TextProps>;
    fieldRef?: LegacyRef<any> | undefined;
    onRightPress?: (() => void) | undefined;
    onSubmitEditing?: (() => void) | undefined;
    placeholder?: string;
    value?: string;
    LeftComponent?: ReactNode;
}

type combinedProps = TextInputProps & myProps

const HabitatCard: FC<combinedProps> = (props) => {

    const {
        containerStyle,
        LeftIcon = null,
        isPasswordField = false,
        hideLabel = false,
        customInputStyle,
        fieldRef = { current: null },
        onRightPress = () => { },
        onSubmitEditing = () => { },
        secureTextEntry = false,
        placeholder = "",
        value = "",
        LeftComponent = null,
    } = props

    const [isFocused, setIsFocused] = useState(false)

    return (
        <Pressable
            onPress={() => {
                fieldRef?.current?.focus()
            }}
            style={[styles.mainContainer, containerStyle]}>
            {LeftComponent}
            {LeftIcon ?
                <TouchableOpacity onPress={() => onRightPress()}>
                    <Image
                        source={LeftIcon}
                        style={styles.sideIcon}
                    />
                </TouchableOpacity> : null
            }
            {!hideLabel && (isFocused || value?.length > 0) &&
                <View
                    style={[styles.lableContainer]}>
                    <Text style={styles.labelStyle}>
                        {placeholder}
                    </Text>
                </View>
            }
            <TextInput
                {...props}
                ref={fieldRef}
                style={[styles.inputField, customInputStyle]}
                placeholder={hideLabel ? placeholder : isFocused ? '' : placeholder}
                secureTextEntry={secureTextEntry}
                onSubmitEditing={onSubmitEditing}
                onFocus={(event) => {
                    setIsFocused(true)
                    if (props.onFocus && typeof props.onFocus === "function") props.onFocus(event)
                }}
                onBlur={(event) => {
                    setIsFocused(false)
                    if (props.onBlur && typeof props.onBlur === "function") props.onBlur(event)
                }}
            />
            {isPasswordField &&
                <TouchableOpacity onPress={() => onRightPress()}>
                    <Image
                        source={secureTextEntry ?
                            VisibleEyeIcon :
                            VisibleEyeIcon}
                        style={styles.sideIcon}
                    />
                </TouchableOpacity>
            }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 18,
        paddingHorizontal: 18,
        height: 44,
        backgroundColor: colors.inputBackground,
        borderColor: colors.inputBorder,
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
    },
    linearGradient: {
        maxHeight: 42,
        maxWidth: 400,
        // heigth: "100%",
    },
    inputField: {
        flex: 1,
        fontSize: 14,
        fontFamily: fontFamilies.REGULAR,
        marginHorizontal: 13,
    },
    lableContainer: {
        position: 'absolute',
        top: -10,
        marginLeft: 10,
        backgroundColor: colors.inputBackground,
        paddingHorizontal: 5
    },
    labelStyle: {
        fontSize: 12,
        fontFamily: fontFamilies.REGULAR,
        color: colors.lightGrey,
    },
    sideIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
});

export default HabitatCard