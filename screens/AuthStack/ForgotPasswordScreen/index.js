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
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import {
    Loader,
    InputField,
    Button,
} from 'components'

import { EmailIcon } from 'assets/icons'
import {
    isValidEmail,
    showErrorMsg
} from "utils";
import { ForgotPasswordImage, LogoImage } from "assets/images";

const ForgotPasswordScreen = (props) => {

    const navigation = useNavigation()

    const emailRef = useRef(null)

    const safeAreaInsets = useSafeAreaInsets();

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");

    const onSendCodePress = async () => {
        if (email === "") {
            showErrorMsg("Email is required");
        } else if (!isValidEmail(email.trim())) {
            showErrorMsg('Email format is invalid')
        } else {
            navigation.navigate("VerifyOTPScreen")
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
                    <Text style={styles.headingText}>{"Forgot Password"}</Text>
                    <Text style={styles.descriptionText}>
                        {"Please type your email below and we will give you a OTP code."}
                    </Text>
                </View>
                <View style={[styles.innerContainer, { paddingBottom: safeAreaInsets.bottom + 70 }]}>
                    <View style={styles.ForgotPasswordImageContainer}>
                        <Image
                            style={styles.ForgotPasswordImage}
                            source={ForgotPasswordImage}
                        />
                    </View>
                    <InputField
                        fieldRef={emailRef}
                        placeholder={'Email'}
                        value={email}
                        textContentType={'emailAddress'}
                        autoComplete={'email'}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        returnKeyType={'next'}
                        LeftIcon={EmailIcon}
                        onChangeText={(text) => {
                            setEmail(text.toLocaleLowerCase())
                        }}
                    />
                    <Button
                        text={'Send Code'}
                        textStyle={styles.btnText}
                        container={styles.btnContainer}
                        onPress={onSendCodePress}
                    />
                </View>
            </KeyboardAwareScrollView>
            <Loader loading={loading} />
        </View>
    );
};

export default ForgotPasswordScreen;
