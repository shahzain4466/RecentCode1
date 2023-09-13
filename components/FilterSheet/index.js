import React, { useRef, useState, useEffect } from 'react';
import {
    BackHandler,
    View,
    Modal,
    Text,
    TouchableOpacity,
    Image
} from "react-native"
import BottomSheet, {
    BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './styles';
import { DownArrowIcon } from 'assets/icons';
import { Button } from 'components';
import { IMLocalized } from 'translations';

const TYPE_SHEET_HEADINGS = [
    "Habitats",
    "Vehicles",
    "Jobs",
]

const FilterSheet = (props) => {

    const {
        sheetHeading = "Habitats",
        visible = false,
        onCloseBottomSheet = () => { },
        onProceedPress = () => { },
        containerStyle = {},
    } = props;

    const bottomSheetRef = useRef(null);
    const safeAreaInsets = useSafeAreaInsets();
    const [snapPoints, setSnapPoints] = useState(["50%"]);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            onCloseBottomSheet(null)
            return true
        })
        return () => {
            backHandler?.remove()
        }
    }, [visible]);

    return (
        <Modal
            animationType="none"
            presentationStyle="overFullScreen"
            visible={visible}
            transparent={true}>
            <View style={[styles.bottomSheetContainer, containerStyle]}>
                <BottomSheet
                    backgroundStyle={styles.bottomSheet}
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={snapPoints}
                    enablePanDownToClose={true}
                    enableContentPanningGesture={true}
                    onClose={onCloseBottomSheet}
                    handleComponent={() => (
                        <View style={styles.handleViewContainer}>
                            <View style={styles.handleView} />
                        </View>
                    )}>
                    <View style={{ flex: 1 }}>
                        <BottomSheetScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                flexGrow: 1,
                                paddingTop: 10,
                            }}
                            bounces={false}>
                            <View
                                style={styles.contentContainerStyle}
                                onLayout={({ nativeEvent }) => {
                                    setSnapPoints([nativeEvent.layout.height + safeAreaInsets.bottom + 50])
                                }}>
                                <Text style={styles.headingText}>{IMLocalized(sheetHeading)}</Text>
                                {TYPE_SHEET_HEADINGS?.includes(sheetHeading) &&
                                    <TouchableOpacity
                                        style={styles.dropDownPickerContainer}
                                        onPress={() => {

                                        }}>
                                        <Text style={styles.dropDownPickerTitle}>{IMLocalized("Type")}</Text>
                                        <Image
                                            style={styles.downArrow}
                                            source={DownArrowIcon}
                                        />
                                    </TouchableOpacity>
                                }
                                <TouchableOpacity
                                    style={styles.dropDownPickerContainer}
                                    onPress={() => {

                                    }}>
                                    <Text style={styles.dropDownPickerTitle}>{IMLocalized("State")}</Text>
                                    <Image
                                        style={styles.downArrow}
                                        source={DownArrowIcon}
                                    />
                                </TouchableOpacity>
                                {"Commercial Guides" == sheetHeading &&
                                    <>
                                        <TouchableOpacity
                                            style={styles.dropDownPickerContainer}
                                            onPress={() => {

                                            }}>
                                            <Text style={styles.dropDownPickerTitle}>{IMLocalized("Category")}</Text>
                                            <Image
                                                style={styles.downArrow}
                                                source={DownArrowIcon}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.dropDownPickerContainer}
                                            onPress={() => {

                                            }}>
                                            <Text style={styles.dropDownPickerTitle}>{IMLocalized("Sub - Category")}</Text>
                                            <Image
                                                style={styles.downArrow}
                                                source={DownArrowIcon}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.dropDownPickerContainer}
                                            onPress={() => {

                                            }}>
                                            <Text style={styles.dropDownPickerTitle}>{IMLocalized("City")}</Text>
                                            <Image
                                                style={styles.downArrow}
                                                source={DownArrowIcon}
                                            />
                                        </TouchableOpacity>
                                    </>
                                }
                                <Button
                                    text={'PROCEED'}
                                    container={styles.btnContainer}
                                    onPress={() => {
                                        bottomSheetRef.current.close();
                                        onProceedPress()
                                    }}
                                />
                            </View>
                        </BottomSheetScrollView>
                    </View>
                </BottomSheet>
            </View>
        </Modal>
    )
}

export default FilterSheet