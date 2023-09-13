import React, { useState, useRef } from "react";
import {
    View,
    FlatList,
} from "react-native";
import { useDispatch } from "react-redux";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import {
    Loader,
    SlopedHeader,
} from "components"

import {
    HomeIcon,
} from 'assets/icons'
import { HabitatsList } from "utils/dummyData";
import HabitatCard from "components/HabitatCard";

const HabitatsListScreen = (props) => {

    const navigation = useNavigation()

    const safeAreaInsets = useSafeAreaInsets();
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.safeStyle}>
            <SlopedHeader
                headerTitle={"Habitats"}
                screenIcon={HomeIcon}
                onBackPress={() => {
                    navigation.goBack()
                }}
            />
            <FlatList
                numColumns={2}
                data={HabitatsList}
                style={{ marginTop: 10 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
                contentContainerStyle={{ flexGrow: 1, width: '100%', paddingHorizontal: 24 }}
                renderItem={({ item, index }) => (
                    <HabitatCard
                        item={item}
                        index={index}
                    />
                )}
            />
            <Loader loading={loading} />
        </View>
    );
};

export default HabitatsListScreen;
