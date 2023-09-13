import React, { useState, useRef } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Pressable,
    Image,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch } from "react-redux";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import {
    Loader,
    InputField,
    Button,
} from "components"

import { LockIcon, UserIcon } from 'assets/icons'
import {
    isValidEmail,
    showErrorMsg
} from "utils";
import {
    AppleLogo,
    FacebookLogo,
    GoogleLogo,
    LogoImage,
} from "assets/images";
import { onAuthChange } from "actions/auth";

const SigninScreen = (props) => {

    const navigation = useNavigation()

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const safeAreaInsets = useSafeAreaInsets();
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    // const [email, setEmail] = useState("ali.rehman@appcrates.com");
    // const [password, setPassword] = useState("123456");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const onSignInPress = async () => {
        if (email === "") {
            showErrorMsg("Email is required");
        } else if (!isValidEmail(email.trim())) {
            showErrorMsg('Email format is invalid')
        } else if (password === "") {
            showErrorMsg("Enter password");
        } else {
            dispatch(onAuthChange({ isSignedIn: true }))
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
                    <Text style={styles.headingText}>{"Let's Sign You In"}</Text>
                    <Text style={styles.descriptionText}>{"Welcome back, you’ve been missed!"}</Text>
                </View>
                <View style={styles.innerContainer}>
                    <InputField
                        fieldRef={emailRef}
                        placeholder={'Email'}
                        value={email}
                        textContentType={'emailAddress'}
                        autoComplete={'email'}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        returnKeyType={'next'}
                        LeftIcon={UserIcon}
                        onChangeText={(text) => {
                            setEmail(text.toLocaleLowerCase())
                        }}
                        onSubmitEditing={() => {
                            passwordRef?.current?.focus()
                        }}
                    />
                    <InputField
                        fieldRef={passwordRef}
                        showRightIcon={true}
                        secureTextEntry={isPasswordVisible}
                        placeholder={'Password'}
                        autoCapitalize={'none'}
                        value={password}
                        LeftIcon={LockIcon}
                        isPasswordField={true}
                        onChangeText={(text) => {
                            setPassword(text)
                        }}
                        onRightPress={() => {
                            setIsPasswordVisible(!isPasswordVisible)
                        }}
                    />
                    <Pressable
                        style={{ alignSelf: 'flex-end' }}
                        onPress={() => {
                            navigation.navigate("ForgotPasswordScreen")
                        }}>
                        <Text style={styles.fogretPasswordText}>{"Forget Password?"}</Text>
                    </Pressable>
                    <Button
                        text={'SIGN IN'}
                        textStyle={styles.btnText}
                        container={styles.btnContainer}
                        onPress={onSignInPress}
                    />
                </View>
                <View style={styles.socialLoginButtonsContainer}>
                    <TouchableOpacity
                        style={styles.socialLoginButton}
                        onPress={() => { }}>
                        <Image
                            style={styles.socialLoginButtonIcon}
                            source={FacebookLogo}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.socialLoginButton}
                        onPress={() => { }}>
                        <Image
                            style={styles.socialLoginButtonIcon}
                            source={GoogleLogo}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.socialLoginButton}
                        onPress={() => { }}>
                        <Image
                            style={styles.socialLoginButtonIcon}
                            source={AppleLogo}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: safeAreaInsets.bottom }}>
                    <Text style={styles.signupQuestionText}>
                        {"Don’t have an account? "}
                        <Text
                            style={styles.signUpText}
                            onPress={() => {
                                navigation.navigate('SignupScreen')
                            }}>
                            {"Sign Up"}
                        </Text>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
            <Loader loading={loading} />
        </View>
    );
};

export default SigninScreen;
