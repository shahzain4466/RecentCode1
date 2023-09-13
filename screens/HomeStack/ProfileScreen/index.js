import React, { useState, useRef } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
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
    CarIcon,
    CaseIcon,
    EventIcon,
    GuideIcon,
    HomeIcon,
    RecycleBinIcon,
    StartIcon,
    UserIcon,
} from 'assets/icons'
import { ProfileDetailImage } from "assets/images";
import { colors } from "utils/Colors";
import { onAuthChange } from "actions/auth";

const ProfileScreen = (props) => {

    const navigation = useNavigation()

    const safeAreaInsets = useSafeAreaInsets();
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    return (
        <View style={styles.safeStyle}>
            <SlopedHeader
                headerTitle={"Profile"}
                screenIcon={UserIcon}
            />
            <KeyboardAwareScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
                style={{ marginTop: 10 }}
                contentContainerStyle={{ flexGrow: 1, width: '100%', paddingHorizontal: 30 }}>
                <Image
                    style={styles.bannerImage}
                    source={ProfileDetailImage}
                />
                <View style={styles.hyperLinksContainer}>
                    <TouchableOpacity
                        style={styles.hyperLinkContainer}
                        onPress={() => {
                            navigation.navigate("SubscriptionPlanScreen")
                        }}>
                        <Text style={styles.hyperLink}>
                            {"Subscription Plan"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.hyperLinkContainer}>
                        <Text style={styles.hyperLink}>
                            {"Edit Profile"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.userDetailsContainer}>
                    <View style={[styles.detailCard, {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }]}>
                        {/* <Text style={styles.detailTitle}>
                            {"Username"}
                        </Text>
                        <Text style={styles.detailDescription}>
                            {"Tester"}
                        </Text> */}
                        <Text style={styles.detailTitle}>
                            {"Type"}
                        </Text>
                        <Text style={styles.detailDescription}>
                            {"Regular"}
                        </Text>
                    </View>
                    {/* <View style={[styles.detailCard, { backgroundColor: colors.white }]}>
                        <Text style={styles.detailTitle}>
                            {"Type"}
                        </Text>
                        <Text style={styles.detailDescription}>
                            {"Regular"}
                        </Text>
                    </View> */}
                    <View style={[styles.detailCard, { backgroundColor: colors.white }]}>
                        <Text style={styles.detailTitle}>
                            {"Email"}
                        </Text>
                        <Text style={styles.detailDescription}>
                            {"tester@testing.com"}
                        </Text>
                    </View>
                    <View style={[styles.detailCard, {
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                    }]}>
                        <Text style={styles.detailTitle}>
                            {"Name"}
                        </Text>
                        <Text style={styles.detailDescription}>
                            {"Leborn Alex"}
                        </Text>
                    </View>
                </View>
                <Button
                    container={{ marginTop: 35 }}
                    text={"LOGOUT"}
                    onPress={() => {
                        dispatch(onAuthChange({ isSignedIn: false }))
                    }}
                />
                <Button
                    leftIcon={RecycleBinIcon}
                    container={{ marginTop: 15, backgroundColor: colors.red }}
                    text={"DELETE THE ACCOUNT PERMANENTLY"}
                    onPress={() => {
                        dispatch(onAuthChange({ isSignedIn: false }))
                    }}
                />
            </KeyboardAwareScrollView>
            <Loader loading={loading} />
        </View>
    );
};

export default ProfileScreen;
