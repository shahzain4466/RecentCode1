import React, { useState, useRef } from "react";
import {
    View,
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

const FavoritesScreen = (props) => {

    const navigation = useNavigation()

    const safeAreaInsets = useSafeAreaInsets();
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    return (
        <View style={styles.safeStyle}>
            <SlopedHeader
                headerTitle={"Favorites"}
                screenIcon={StartIcon}
            />
            <KeyboardAwareScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
                style={{ marginTop: 10 }}
                contentContainerStyle={{ flexGrow: 1, width: '100%', paddingHorizontal: 30 }}>
                <HomeButton
                    isFavorite={true}
                    count={1}
                    icon={HomeIcon}
                    title={"Habitats"}
                    onPress={() => {

                    }}
                />
                <HomeButton
                    isFavorite={true}
                    count={1}
                    icon={CarIcon}
                    title={"Vehicles"}
                    onPress={() => {

                    }}
                />
                <HomeButton
                    isFavorite={true}
                    count={1}
                    icon={CaseIcon}
                    title={"Jobs"}
                    onPress={() => {

                    }}
                />
                <HomeButton
                    isFavorite={true}
                    count={1}
                    icon={EventIcon}
                    title={"Events"}
                    onPress={() => {

                    }}
                />
                <HomeButton
                    isFavorite={true}
                    count={1}
                    icon={GuideIcon}
                    title={"Commercial Guides"}
                    onPress={() => {

                    }}
                />
            </KeyboardAwareScrollView>
            <Loader loading={loading} />
        </View>
    );
};

export default FavoritesScreen;
