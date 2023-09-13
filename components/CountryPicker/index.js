import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useMemo, useState, useRef } from 'react'
import styles from './styles'

import BottomSheet, {
    BottomSheetFlatList
} from '@gorhom/bottom-sheet';

import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import nodeEmoji from 'node-emoji';

import Countries from 'utils/countries-emoji.json'
import { colors } from 'utils/Colors';

const index = (props) => {

    const { onPress, onClose, getItems = () => { } } = props
    const bottomRef = useRef(null)

    const snapPoints = useMemo(() => ['85%'], []);

    const countriesData = Object.values(Countries)

    const [searchValue, setSearchValue] = useState('');
    const [countriesList, setCountriesList] = useState(countriesData);
    const [selectedCountry, setSelectedCountry] = useState({
        "callingCode": ["44"],
        "countryCode": "GB",
        "flag": "flag-gb",
    });

    const _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.countryCodeItemView}
                onPress={() => {
                    bottomRef.current.close()
                    let countriesDataTemp = [...countriesData]
                    setCountriesList(countriesDataTemp)
                    setSearchValue("");
                    // validatePhoneText("");
                    setSelectedCountry(item);
                    getItems(item)
                }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.countryImageStyle}>{nodeEmoji.get(item.flag)}</Text>
                    <Text style={styles.countryTextStyle}>{item.name.common}</Text>
                </View>
                <Text style={styles.countryCodeStyle}>{'+' + item.callingCode[0]}</Text>
            </TouchableOpacity>
        )
    }

    const renderSearchView = () => (
        <View style={styles.searchContainer}>
            <Ionicons
                name="search"
                size={20}
                style={styles.searchIcon}
                color="#8C8C8C"
            />
            <TextInput
                value={searchValue}
                style={styles.textInputForSearch}
                onChangeText={(text) => {
                    let countriesDataTemp = [...countriesData]
                    if (text?.length > 0) {
                        countriesDataTemp = countriesDataTemp.filter((item) => (
                            item.name.common.toLowerCase().indexOf(text.toLowerCase()) == 0 ||
                            item.callingCode[0].toLowerCase().indexOf(text.toLowerCase()) == 0 ||
                            item.countryCode.toLowerCase().indexOf(text.toLowerCase()) == 0
                        ))
                    }
                    setCountriesList(countriesDataTemp)
                    setSearchValue(text);
                }}
                maxLength={28}
                placeholder="Search"
                placeholderTextColor="#8C8C8C"
                returnKeyType="done"
                allowFontScaling={true}
            />
        </View>
    );

    return (
        <View style={styles.bottomSheetContainer}>
            <BottomSheet
                backgroundStyle={styles.bottomSheet}
                ref={bottomRef}
                index={0}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                handleComponent={() => (
                    <>
                        <View style={styles.handleViewContainer}>
                            <View style={styles.handleView} />
                        </View>
                        <Text style={styles.countryTitleTextStyle}>{`Select country`}</Text>
                        <TouchableOpacity
                            style={styles.crossIconView}
                            onPress={() => { bottomRef.current.close() }}>
                            <Entypo
                                name={"cross"}
                                size={24}
                                color={colors.lightBlack}
                                style={{ alignSelf: 'center' }}
                            />
                        </TouchableOpacity>
                    </>
                )}
                onClose={onClose}>
                <View style={styles.scrollViewStyle}>
                    <View style={{ backgroundColor: 'white', marginHorizontal: 16 }}>
                        {renderSearchView()}
                    </View>
                    <BottomSheetFlatList
                        listKey={`countriesList`}
                        data={countriesList}
                        keyExtractor={(item, index) => `${item?.id}_${index}`}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        keyboardShouldPersistTaps='always'

                        ItemSeparatorComponent={() => {
                            return (
                                <View style={styles.dottedLine} />
                            )
                        }}
                        renderItem={_renderItem}
                    />
                </View>
            </BottomSheet>
        </View>
    )
}

export default index

