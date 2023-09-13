import React, { useState, useRef } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Pressable,
    Image,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackActions, useNavigation } from '@react-navigation/native';

import styles from "./styles";

import {
    Loader,
    InputField,
    Button,
} from 'components'

import { EmailIcon, LockIcon } from 'assets/icons'
import {
    isValidEmail,
    showErrorMsg,
    showSuccessMsg
} from "utils";
import { ForgotPasswordImage, LogoImage, NewPasswordImage } from "assets/images";

const NewPasswordScreen = (props) => {

    const navigation = useNavigation()

    const passwordRef = useRef(null)
    const confirmPasswordRef = useRef(null)

    const safeAreaInsets = useSafeAreaInsets();

    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(true);

    const onConfirmNewPasswordPress = async () => {
        if (password === "") {
            showErrorMsg("Enter password");
        } else if (password?.length < 6) {
            showErrorMsg("Password must be atleast 6 character long");
        } else if (confirmPassword === "") {
            showErrorMsg("Enter confirmt password");
        } else if (password != confirmPassword) {
            showErrorMsg("Confirm password is not matched with password");
        } else {
            showSuccessMsg("New password save successfully");
            setTimeout(() => {
                navigation.dispatch(StackActions.popToTop())
            }, 1000);
        }
    };

    return (
        <View style={[styles.safeStyle, { paddingTop: safeAreaInsets.top }]}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.logoContainer}>
                    <Image source={LogoImage} style={styles.logoImage} />
                </View>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingText}>{"New Password"}</Text>
                    <Text style={styles.descriptionText}>
                        {"Now you can create new password and confirm it below."}
                    </Text>
                </View>
                <View style={[styles.innerContainer, { paddingBottom: safeAreaInsets.bottom + 70 }]}>
                    <View style={styles.newPasswordImageContainer}>
                        <Image
                            style={styles.newPasswordImage}
                            source={NewPasswordImage}
                        />
                    </View>
                    <InputField
                        fieldRef={passwordRef}
                        showRightIcon={true}
                        secureTextEntry={isPasswordVisible}
                        placeholder={'Password'}
                        value={password}
                        LeftIcon={LockIcon}
                        isPasswordField={true}
                        onChangeText={(text) => {
                            setPassword(text)
                        }}
                        onRightPress={() => {
                            setIsPasswordVisible(!isPasswordVisible)
                        }}
                        onSubmitEditing={() => {
                            confirmPasswordRef?.current?.focus()
                        }}
                    />
                    <InputField
                        fieldRef={confirmPasswordRef}
                        showRightIcon={true}
                        secureTextEntry={isConfirmPasswordVisible}
                        placeholder={'Confirm Password'}
                        value={confirmPassword}
                        LeftIcon={LockIcon}
                        isPasswordField={true}
                        onChangeText={(text) => {
                            setConfirmPassword(text)
                        }}
                        onRightPress={() => {
                            setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                        }}
                    />
                    <Button
                        text={'Confirm New Password'}
                        textStyle={styles.btnText}
                        container={styles.btnContainer}
                        onPress={onConfirmNewPasswordPress}
                    />
                </View>
            </KeyboardAwareScrollView>
            <Loader loading={loading} />
        </View>
    );
};

export default NewPasswordScreen;
