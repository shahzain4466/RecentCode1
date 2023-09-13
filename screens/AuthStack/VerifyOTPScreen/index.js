import React, { useState, useEffect, useRef } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Pressable,
    Image,
    Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

import styles from "./styles";

import {
    Loader,
    InputField,
    Button,
    OTPInput,
} from 'components'

import { EmailIcon } from 'assets/icons'
import {
    isValidEmail,
    showErrorMsg
} from "utils";
import { LogoImage, VerifyOTPImage } from "assets/images";
import { colors } from "utils/Colors";

const VerifyOTPScreen = (props) => {

    const navigation = useNavigation()

    const OTPInputRef = useRef(null)

    const safeAreaInsets = useSafeAreaInsets();

    const [loading, setLoading] = useState(false);
    const [otpErrorState, setOTPErrorState] = useState(false);
    const [code, setCode] = useState("");
    const [count, setCount] = useState(29);
    const [OTPSentAt, setOTPSentAt] = useState(moment());

    useEffect(() => {
        setTimeout(() => {
            if (count > 0) {
                let counterValue = (30000 - (moment().diff(OTPSentAt, 'milliseconds'))) / 1000
                if (counterValue > 0) {
                    setCount(counterValue)
                } else setCount(0)
            }
        }, 250);
    }, [count, OTPSentAt]);

    const onSendCodePress = async () => {
        if (code === "") {
            showErrorMsg("Enter code");
        } else {
            navigation.navigate("NewPasswordScreen")
        }
    };

    const onResendOTP = () => {
        if (count == 0) {
            setCount(29)
            setCode("")
            setOTPSentAt(moment())
            setOTPErrorState(false)
            OTPInputRef.current.resetCode()
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
                    <Text style={styles.headingText}>{"Email Verification"}</Text>
                    <Text style={styles.descriptionText}>
                        {"Please type OTP code that we gave you."}
                    </Text>
                </View>
                <View style={[styles.innerContainer]}>
                    <View style={styles.verifyOTPImageContainer}>
                        <Image
                            style={styles.verifyOTPImage}
                            source={VerifyOTPImage}
                        />
                    </View>
                    <OTPInput
                        ref={OTPInputRef}
                        value={code}
                        onComplete={() => { Keyboard.dismiss() }}
                        onChangeText={(value) => {
                            setCode(value)
                            if (otpErrorState) setOTPErrorState(false)
                        }}
                        otpError={otpErrorState}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.timerTextStyle}>{`00:${count < 10 ? "0" : ""}${Math.floor(count)}`}</Text>
                    <Text style={styles.signupQuestionText}>
                        {"Don't get the code? "}
                        <Text
                            style={[styles.signUpText, { color: count === 0 ? colors.lightBlue : colors.lightGrey }]}
                            onPress={count == 0 ? onResendOTP : undefined}>
                            {"Resend"}
                        </Text>
                    </Text>
                </View>
                <Button
                    text={'VERIFY'}
                    textStyle={styles.btnText}
                    container={[styles.btnContainer, {
                        marginBottom: safeAreaInsets.bottom + 70,
                        backgroundColor: code.length == 4 ? colors.buttonBackground : colors.lightGrey
                    }]}
                    onPress={onSendCodePress}
                />
            </KeyboardAwareScrollView>
            <Loader loading={loading} />
        </View>
    );
};

export default VerifyOTPScreen;
