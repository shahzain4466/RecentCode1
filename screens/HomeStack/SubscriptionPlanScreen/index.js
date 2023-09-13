import React, { useState, useRef } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    ImageBackground,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch } from "react-redux";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import {
    Loader,
    HomeButton,
    SlopedHeader,
    Button,
} from "components"

import {
    AdvertiseIcon,
    BellIcon,
    CarIcon,
    CaseIcon,
    EventIcon,
    GuideIcon,
    HomeIcon,
    RecycleBinIcon,
    StartIcon,
    UserIcon,
} from 'assets/icons'
import { ContactUsImage, DialerLogo, EmailLogo, LogoImage, ProfileDetailImage, StripeLogo, SubscribeBannerImage, SubscriptionCard, WhatsAppLogo } from "assets/images";
import { colors } from "utils/Colors";
import { fontFamilies } from "assets/fonts";

const SubscriptionPlanScreen = (props) => {

    const navigation = useNavigation()

    const safeAreaInsets = useSafeAreaInsets();
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const [isSubscriptionActive, setIsSubscriptionActive] = useState(false);

    return (
        <View style={styles.safeStyle}>
            <SlopedHeader
                headerTitle={"Subscription Plan"}
                screenIcon={BellIcon}
                onBackPress={() => {
                    navigation.goBack()
                }}
            />
            <KeyboardAwareScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
                style={{ marginTop: 10 }}
                contentContainerStyle={{ flexGrow: 1, width: '100%', paddingHorizontal: 60 }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.headingText}>{"Your Courant Plan"}</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 3
                    }}>
                        <View style={[styles.subscriptionStatusBitView, { backgroundColor: isSubscriptionActive ? "#00BB99" : "#BEBEBE", }]} />
                        <Text style={styles.subscriptionStatusText}>{isSubscriptionActive ? "Active" : "Inactive"}</Text>
                    </View>
                </View>
                {isSubscriptionActive ?
                    <View>
                        <Text style={styles.descriptionText}>
                            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 100s.`}
                        </Text>
                        <ImageBackground
                            style={styles.subscriptionCard}
                            source={SubscriptionCard}>
                            <Text style={styles.monthlyText}>
                                {"Monthly"}
                            </Text>
                            <Text style={styles.subscriptionTypeText}>
                                {"SUBSCRIPTION TYPE"}
                            </Text>
                            <Image
                                style={styles.stripeLogo}
                                source={StripeLogo}
                            />
                            <View style={{ flexDirection: "row", marginTop: 40 }}>
                                <Text style={styles.dollerSignText}>
                                    {"$"}
                                </Text>
                                <Text style={styles.amountText}>
                                    {"100"}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.unsubscribeButton}
                                onPress={() => {
                                    setIsSubscriptionActive(false)
                                }}>
                                <Text style={styles.unsubscribeText}>{"UNSUBSCRIBE"}</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    :
                    <TouchableOpacity
                        style={{ flex: 1, justifyContent: "center", paddingBottom: safeAreaInsets.bottom + 30 }}
                        onPress={() => {
                            setIsSubscriptionActive(true)
                        }}>
                        <Image
                            style={styles.subscribeImage}
                            source={SubscribeBannerImage}
                        />
                    </TouchableOpacity>
                }
            </KeyboardAwareScrollView>
            <Loader loading={loading} />
        </View>
    );
};

export default SubscriptionPlanScreen;
