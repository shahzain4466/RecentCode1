import React, { useState, useRef } from "react";
import {
    View,
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
    SlopedImageHeader,
} from "components"

import {
    AdvertiseIcon,
    CarIcon,
    CaseIcon,
    EventIcon,
    GuideIcon,
    HomeIcon,
    StartIcon,
} from 'assets/icons'

const HabitatDetailsScreen = (props) => {
    const { route } = props
    const { habitatDetails } = route.params || {}
    const navigation = useNavigation()

    const safeAreaInsets = useSafeAreaInsets();
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    return (
        <View style={styles.safeStyle}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
                contentContainerStyle={{ flexGrow: 1, width: '100%', }}>
                <SlopedImageHeader
                    bannerImage={habitatDetails.image}
                    onBackPress={() => {
                        navigation.goBack()
                    }}
                />
                <View style={styles.contentContainer}>
                    <Text
                        style={styles.headingText}
                        numberOfLines={1}>
                        {`${habitatDetails.name}`}
                    </Text>
                </View>
            </KeyboardAwareScrollView>
            <Loader loading={loading} />
        </View>
    );
};

export default HabitatDetailsScreen;
