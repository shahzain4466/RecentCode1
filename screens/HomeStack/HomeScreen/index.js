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
    CustomHeader,
    FilterSheet,
} from "components"

import {
    AdvertiseIcon,
    CarIcon,
    CaseIcon,
    EventIcon,
    GuideIcon,
    HomeIcon,
} from 'assets/icons'
import { IMLocalized } from "translations";

const HomeScreen = (props) => {

    const navigation = useNavigation()

    const safeAreaInsets = useSafeAreaInsets();
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const [activeSheet, setActiveSheet] = useState("Habitats");
    const [showFiltersSheet, setShowFiltersSheet] = useState(false);

    const renderFilterSheet = () => {
        return (
            <FilterSheet
                sheetHeading={activeSheet}
                isLoading={loading}
                visible={showFiltersSheet}
                onCloseBottomSheet={() => {
                    setShowFiltersSheet(false)
                }}
                onProceedPress={() => {
                    if (activeSheet == "Habitats") {
                        navigation.navigate("HabitatsListScreen")
                    }
                }}
            />
        )
    }

    return (
        <View style={styles.safeStyle}>
            <CustomHeader />
            <KeyboardAwareScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
                style={{ marginTop: 10 }}
                contentContainerStyle={{ flexGrow: 1, width: '100%', paddingHorizontal: 30 }}>
                <HomeButton
                    isActive={activeSheet == "Habitats"}
                    icon={HomeIcon}
                    title={IMLocalized("Habitats")}
                    onPress={() => {
                        setActiveSheet("Habitats")
                        setShowFiltersSheet(true)
                    }}
                />
                <HomeButton
                    isActive={activeSheet == "Vehicles"}
                    icon={CarIcon}
                    title={IMLocalized("Vehicles")}
                    onPress={() => {
                        setActiveSheet("Vehicles")
                        setShowFiltersSheet(true)
                    }}
                />
                <HomeButton
                    isActive={activeSheet == "Jobs"}
                    icon={CaseIcon}
                    title={IMLocalized("Jobs")}
                    onPress={() => {
                        setActiveSheet("Jobs")
                        setShowFiltersSheet(true)
                    }}
                />
                <HomeButton
                    isActive={activeSheet == "Events"}
                    icon={EventIcon}
                    title={IMLocalized("Events")}
                    onPress={() => {
                        setActiveSheet("Events")
                        setShowFiltersSheet(true)
                    }}
                />
                <HomeButton
                    isActive={activeSheet == "Commercial Guides"}
                    icon={GuideIcon}
                    title={IMLocalized("Commercial Guides")}
                    onPress={() => {
                        setActiveSheet("Commercial Guides")
                        setShowFiltersSheet(true)
                    }}
                />
                <HomeButton
                    isActive={activeSheet == "Advertise"}
                    icon={AdvertiseIcon}
                    title={IMLocalized("Advertise")}
                    onPress={() => {
                        setActiveSheet("Advertise")
                    }}
                />
            </KeyboardAwareScrollView>
            {renderFilterSheet()}
            <Loader loading={loading} />
        </View>
    );
};

export default HomeScreen;
