import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    ViewProps,
    Text,
    Image,
} from 'react-native'

import { colors } from '../utils/Colors';
import AvatarComponent from './AvatarComponent';
import { fontFamilies } from 'assets/fonts';
import { CrossIcon, EditIcon, LikeActiveIcon, LikeInactiveIcon } from 'assets/icons';
import { useNavigation } from '@react-navigation/native';

interface myProps {
    containerStyle?: ViewProps | object;
    item: object | null;
    index: number;
}

const HabitatCard = (props: myProps) => {

    const {
        containerStyle,
        item,
        index,
    } = props

    const navigation = useNavigation()

    const [isLiked, setIsLiked] = useState(item.isInFavorite)

    useEffect(() => {
        setIsLiked(item.isInFavorite)
    }, [item.isInFavorite])

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("HabitatDetailsScreen", { habitatDetails: item })
            }}
            style={[styles.mainContainer, containerStyle]}>
            <AvatarComponent
                source={item.image}
                style={styles.imageContainer}
                imageStyle={styles.imageStyle}>
                <View style={styles.controlsContainer}>
                    <TouchableOpacity
                        style={styles.controlStyle}
                        onPress={() => {

                        }}>
                        <Image style={styles.controlIcon} source={CrossIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.controlStyle}
                        onPress={() => {

                        }}>
                        <Image style={styles.controlIcon} source={EditIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.controlStyle}
                        onPress={() => {
                            setIsLiked(!isLiked)
                        }}>
                        <Image style={styles.controlIcon} source={isLiked ? LikeActiveIcon : LikeInactiveIcon} />
                    </TouchableOpacity>
                </View>
            </AvatarComponent>
            <View style={{ padding: 10 }}>
                <Text style={styles.nameText}>{`${item.name}`}</Text>
                <Text style={styles.priceText}>{`${item.price}`}</Text>
                <Text style={styles.locationText}>{`${item.location}`}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 12,
        marginHorizontal: 6,
        backgroundColor: colors.white,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    imageContainer: {
        width: "100%",
        height: 125,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: "center"
    },
    imageStyle: {
        resizeMode: "cover"
    },
    nameText: {
        fontSize: 13,
        fontFamily: fontFamilies.SEMI_BOLD,
        color: colors.headingText
    },
    priceText: {
        marginTop: 10,
        fontSize: 15,
        fontFamily: fontFamilies.BLACK,
        color: colors.tintColor
    },
    locationText: {
        marginTop: 10,
        fontSize: 12,
        fontFamily: fontFamilies.REGULAR,
        color: colors.descriptionLightText
    },
    controlsContainer: {
        position: "absolute",
        backgroundColor: colors.tintColor + "AA",
        borderRadius: 40,
        right: 2,
    },
    controlStyle: {
        width: 22,
        height: 30,
        alignItems: "center",
        justifyContent: 'center'
    },
    controlIcon: {
        width: 10,
        height: 10,
        resizeMode: "contain"
    }
});

export default HabitatCard