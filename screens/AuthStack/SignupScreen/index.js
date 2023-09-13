import React, { useState, useRef } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Pressable,
    Image,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TouchableOpacity as TouchableOpacityGesture } from 'react-native-gesture-handler'
import { useDispatch } from "react-redux";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import nodeEmoji from 'node-emoji';

import styles from "./styles";

import {
    Loader,
    InputField,
    Button,
    CountryPicker,
} from 'components'

import { DownArrowIcon, LockIcon, UserIcon } from 'assets/icons'
import {
    isValidEmail,
    showErrorMsg
} from "utils";
import { AppleLogo, FacebookLogo, GoogleLogo, LogoImage } from "assets/images";
import countries from 'utils/countries-emoji.json';
import { onAuthChange } from "actions/auth";

const countriesData = Object.values(countries);

const SignupScreen = (props) => {

    const navigation = useNavigation()

    const nameRef = useRef(null)
    const phoneRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmPasswordRef = useRef(null)

    const safeAreaInsets = useSafeAreaInsets();
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    // const [email, setEmail] = useState("ali.rehman@appcrates.com");
    // const [password, setPassword] = useState("123456");


    const [showCountryBottomSheet, setShowCountryBottomSheet] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState({
        "callingCode": ["34"],
        "countryCode": "ES",
        "flag": "flag-es",
    })
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(true);

    const onSignUpPress = async () => {
        if (name === "") {
            showErrorMsg("Name is required");
        } else if (phone === "") {
            showErrorMsg("Phone is required");
        } else if (email === "") {
            showErrorMsg("Email is required");
        } else if (!isValidEmail(email.trim())) {
            showErrorMsg('Email format is invalid')
        } else if (password === "") {
            showErrorMsg("Enter password");
        } else if (password?.length < 6) {
            showErrorMsg("Password must be atleast 6 character long");
        } else if (confirmPassword === "") {
            showErrorMsg("Enter confirmt password");
        } else if (password != confirmPassword) {
            showErrorMsg("Confirm password is not matched with password");
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
                    <Text style={styles.headingText}>{"Let's Create An Account"}</Text>
                </View>
                <View style={styles.innerContainer}>
                    <InputField
                        fieldRef={nameRef}
                        placeholder={'Name'}
                        value={name}
                        textContentType={'name'}
                        autoComplete={'name'}
                        autoCapitalize={'words'}
                        returnKeyType={'next'}
                        LeftIcon={UserIcon}
                        onChangeText={(text) => {
                            setName(text)
                        }}
                        onSubmitEditing={() => {
                            phoneRef?.current?.focus()
                        }}
                    />
                    <InputField
                        LeftComponent={
                            <TouchableOpacityGesture
                                activeOpacity={0.6}
                                onPress={() => {
                                    setShowCountryBottomSheet(true)
                                }}
                                style={styles.arrowFlagContainer}>
                                <Text style={styles.flagEmojiText}>{nodeEmoji.get(country?.flag)}</Text>
                                <Text style={styles.callingCodeText}>{`+${country?.callingCode}`}</Text>
                                <Image
                                    style={styles.downArrow}
                                    source={DownArrowIcon}
                                />
                            </TouchableOpacityGesture>
                        }
                        fieldRef={phoneRef}
                        placeholder={'Phone'}
                        value={phone}
                        maxLength={country?.callingCode ? (country.callingCode[0].length + 12) : 14}
                        keyboardType={'phone-pad'}
                        returnKeyType={'next'}
                        onChangeText={(text) => {
                            setPhone(text)
                        }}
                        onSubmitEditing={() => {
                            emailRef?.current?.focus()
                        }}
                    />
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
                        text={'SIGN UP'}
                        textStyle={styles.btnText}
                        container={styles.btnContainer}
                        onPress={onSignUpPress}
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
                        {"Already Have An Account? "}
                        <Text
                            style={styles.signUpText}
                            onPress={() => {
                                navigation.navigate('SigninScreen')
                            }}>
                            {"Sign In"}
                        </Text>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
            {showCountryBottomSheet &&
                <CountryPicker
                    onClose={() => setShowCountryBottomSheet(false)}
                    getItems={(item) => {
                        setCountry(item)
                    }}
                />
            }
            <Loader loading={loading} />
        </View>
    );
};

export default SignupScreen;
