import React, { useState, useRef } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    Linking,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch } from "react-redux";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import {
    Loader,
    SlopedHeader,
} from "components"

import {
    CommentIcon,
} from 'assets/icons'
import {
    ContactUsImage,
    DialerLogo,
    EmailLogo,
    LogoImage,
    WhatsAppLogo
} from "assets/images";

const ContactScreen = (props) => {

    const navigation = useNavigation()

    const safeAreaInsets = useSafeAreaInsets();
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    return (
        <View style={styles.safeStyle}>
            <SlopedHeader
                headerTitle={"Contact Us"}
                screenIcon={CommentIcon}
            />
            <KeyboardAwareScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
                style={{ marginTop: 10 }}
                contentContainerStyle={{ flexGrow: 1, width: '100%', paddingHorizontal: 30 }}>
                <Image
                    style={styles.bannerImage}
                    source={ContactUsImage}
                />
                <Image
                    style={styles.logoImage}
                    source={LogoImage}
                />
                <Text style={styles.descriptionText}>
                    {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
                </Text>
                <View style={styles.socialLogoButtonsContainer}>
                    <TouchableOpacity
                        style={styles.socialLogoContainer}
                        onPress={() => {
                            const _URL = `https://wa.me://+923001234567`
                            Linking.canOpenURL(_URL).then((status) => {
                                if (status) Linking.openURL(_URL);
                            }).catch((error) => {
                                console.log("canOpenURL-whatsapp_URL", _URL, "error", error)
                            })
                        }}>
                        <Image
                            style={styles.socialButtonLogo}
                            source={WhatsAppLogo}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.socialLogoContainer}
                        onPress={() => {
                            const phoneNumber = Platform.select({
                                ios: `telprompt:+923001234567`,
                                android: `tel:+923001234567`
                            })
                            Linking.canOpenURL(phoneNumber).then((status) => {
                                if (status) Linking.openURL(phoneNumber);
                            }).catch((error) => {
                                console.log("canOpenURL-phoneNumber", phoneNumber, "error", error)
                            })
                        }}>
                        <Image
                            style={styles.socialButtonLogo}
                            source={DialerLogo}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.socialLogoContainer}
                        onPress={() => {
                            const subject = 'IMI Support';
                            const SUPPORT_EMAIL = "contact@imi.com"
                            const _URL = `mailto:${SUPPORT_EMAIL}?subject=${subject}`
                            Linking.canOpenURL(_URL).then((status) => {
                                if (status) Linking.openURL(_URL);
                            }).catch((error) => {
                                console.log("canOpenURL-email_URL", _URL, "error", error)
                            })
                        }}>
                        <Image
                            style={styles.socialButtonLogo}
                            source={EmailLogo}
                        />
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
            <Loader loading={loading} />
        </View>
    );
};

export default ContactScreen;
