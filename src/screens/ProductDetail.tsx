import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, ScrollView, StyleSheet } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import Layout from "../components/Layout";
import {
    ProductDetailScreenNavigationProps,
    ProductDetailScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";
import ExitIcon from "../components/forms/form_elements/ExitIcon";

import Constants from "expo-constants";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../utils/theme";

import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import Selectables from "../components/Selectables";
import SelectableColors from "../components/SelectableColors";
import { useAppDispatch } from "../redux/hooks";
import { addToBag } from "../redux/bag/bagSlice";
import { SIZES } from "../redux/data_types";
import { addToFavourite } from "../redux/favourite/favouriteSlice";
import ImageCarousel from "../components/ImageCarousel";

interface ProductDetailProps {
    navigation: ProductDetailScreenNavigationProps;
    route: ProductDetailScreenRouteProps;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

const { width, height } = Dimensions.get("screen");

const IMAGE_HEIGHT = height * 0.6;
const HIDDEN_VIEW_HEIGHT = height * 0.4;

const ProductDetail: React.FC<ProductDetailProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();
    const dispatch = useAppDispatch();
    // hidden view
    const [actionType, setActionType] =
        useState<"BAG" | "FAVOURITE" | null>(null);
    const [selectedSize, setSelectedSize] = useState<string>(
        route.params.item.has_size ? route.params.item.sizes[0] : "S"
    );
    const [selectedColor, setSelectedColor] = useState<string>(
        route.params.item.has_size ? route.params.item.color[0] : "Black"
    );

    const [hiddenViewShow, setHiddenViewShow] = useState(false);
    const hiddenViewTranslateY = useSharedValue(HIDDEN_VIEW_HEIGHT + 15);

    const hiddenViewStyles = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: withTiming(hiddenViewTranslateY.value, {
                    easing: Easing.inOut(Easing.ease),
                }),
            },
        ],
    }));
    return (
        <Layout no_padding>
            <AnimatedBox
                position="absolute"
                bg="background"
                zIndex={555555}
                bottom={0}
                width={width}
                height={HIDDEN_VIEW_HEIGHT}
                borderTopRightRadius="xl"
                borderTopLeftRadius="xl"
                elevation={15}
                style={hiddenViewStyles}
            >
                <Box
                    position="absolute"
                    top={-15}
                    left={width / 2 - 15}
                    zIndex={0}
                >
                    <ExitIcon
                        onPress={() => {
                            setActionType(null);
                            setHiddenViewShow(false);
                            hiddenViewTranslateY.value =
                                HIDDEN_VIEW_HEIGHT + 15;
                        }}
                    />
                </Box>

                <ScrollView style={{ flex: 1 }}>
                    <Box paddingTop="xl">
                        {hiddenViewShow && route.params.item.has_size && (
                            <Box marginBottom="m">
                                <Text
                                    marginHorizontal="s"
                                    marginBottom="s"
                                    variant="body2"
                                    opacity={0.5}
                                >
                                    SELECT SIZE
                                </Text>
                                <Selectables
                                    value={selectedSize}
                                    items={route.params.item.sizes}
                                    onChange={(v) => setSelectedSize(v)}
                                />
                            </Box>
                        )}
                        {hiddenViewShow && route.params.item.has_color && (
                            <Box>
                                <Text
                                    marginHorizontal="s"
                                    marginBottom="s"
                                    variant="body2"
                                    opacity={0.5}
                                >
                                    SELECT COLOR
                                </Text>
                                <SelectableColors
                                    value={selectedColor}
                                    items={route.params.item.color}
                                    onChange={(v) => setSelectedColor(v)}
                                />
                            </Box>
                        )}
                        {!route.params.item.has_color &&
                            !route.params.item.has_size && (
                                <Box p="m">
                                    <Text
                                        textAlign="center"
                                        variant="description"
                                    >
                                        No sizes or color selection for this
                                        products! just procede
                                    </Text>
                                </Box>
                            )}
                        <Box>
                            <Box
                                marginHorizontal="s"
                                marginTop="m"
                                flex={1}
                                bg={actionType === "BAG" ? "primary" : "white"}
                                borderWidth={actionType === "BAG" ? 0 : 1}
                                borderRadius="m"
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        if (actionType === "BAG") {
                                            dispatch(
                                                addToBag({
                                                    product: route.params.item,
                                                    color: selectedColor,
                                                    size: selectedSize,
                                                    quantity: 1,
                                                })
                                            );
                                            hiddenViewTranslateY.value =
                                                HIDDEN_VIEW_HEIGHT + 15;
                                            navigation.goBack();
                                        } else {
                                            dispatch(
                                                addToFavourite({
                                                    product: route.params.item,
                                                    color: selectedColor,
                                                    size: selectedSize as SIZES,
                                                })
                                            );
                                            hiddenViewTranslateY.value =
                                                HIDDEN_VIEW_HEIGHT + 15;
                                            navigation.goBack();
                                        }
                                    }}
                                >
                                    <Box
                                        paddingVertical="s"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Entypo
                                            name={
                                                actionType === "BAG"
                                                    ? "shopping-bag"
                                                    : "heart-outlined"
                                            }
                                            size={20}
                                            color={
                                                actionType === "BAG"
                                                    ? theme.colors.white
                                                    : theme.colors.darkColor
                                            }
                                        />
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Box>
                </ScrollView>
            </AnimatedBox>
            <ScrollView>
                <Box
                    width={width}
                    height={IMAGE_HEIGHT}
                    borderBottomLeftRadius="l"
                    borderBottomRightRadius="l"
                    overflow={"hidden"}
                >
                    <Box
                        zIndex={555}
                        position={"absolute"}
                        top={Constants.statusBarHeight + theme.spacing.m}
                        right={theme.spacing.m}
                    >
                        <ExitIcon onPress={() => navigation.goBack()} />
                    </Box>
                    <ImageCarousel
                        productId={route.params.item.id}
                        thumbnail={route.params.item.thumbnail!}
                        images={route.params.item.images}
                        imageHeight={IMAGE_HEIGHT}
                    />
                </Box>
                <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    margin="m"
                >
                    <Box flex={2}>
                        <Text variant="description" opacity={0.5}>
                            {route.params.item.brand.display_name}
                        </Text>
                        <Text variant="headline3">
                            {route.params.item.display_name}
                        </Text>
                    </Box>
                    <Box flex={1} alignItems="flex-end">
                        <Text variant="body2">{`${route.params.item.price} DT`}</Text>
                    </Box>
                </Box>
                {route.params.item.has_size && (
                    <Box>
                        <Text margin="m" variant="body2" opacity={0.5}>
                            AVAILABLE SIZES
                        </Text>
                        <Box
                            flexDirection="row"
                            flexWrap="wrap"
                            marginHorizontal="m"
                        >
                            {route.params.item.sizes.map((s, i) => (
                                <Box
                                    key={i}
                                    marginRight="s"
                                    marginBottom="s"
                                    bg="darkColor"
                                    borderRadius={"m"}
                                    justifyContent={"center"}
                                    alignItems="center"
                                    width={100}
                                    height={40}
                                >
                                    <Text color="white">{s}</Text>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}

                {route.params.item.has_color && (
                    <Box>
                        <Text margin="m" variant="body2" opacity={0.5}>
                            AVAILABLE COLORS
                        </Text>
                        <Box
                            flexDirection="row"
                            flexWrap="wrap"
                            marginHorizontal="m"
                        >
                            {route.params.item.color.map((c, i) => (
                                <Box
                                    key={i}
                                    marginRight="s"
                                    style={{
                                        backgroundColor: c.toLowerCase(),
                                        width: 30,
                                        height: 30,
                                        borderRadius: 15,
                                        overflow: "hidden",
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                )}

                <Box>
                    <Text margin="m" variant="body2" opacity={0.5}>
                        PRODUCT DETAILS
                    </Text>
                    <Box>
                        {route.params.item.details.detail_list.map(
                            (d: string, i: number) => (
                                <Box
                                    marginBottom="s"
                                    key={i}
                                    marginHorizontal="m"
                                >
                                    <Text variant="body" opacity={0.5}>
                                        {d}
                                    </Text>
                                </Box>
                            )
                        )}
                    </Box>
                </Box>
                <Box marginVertical="m" flexDirection="row">
                    <Box marginHorizontal="m" flex={1}>
                        <TouchableOpacity
                            onPress={() => {
                                setActionType("FAVOURITE");
                                hiddenViewTranslateY.value = 0;
                                setHiddenViewShow(true);
                            }}
                        >
                            <Box
                                paddingVertical="s"
                                justifyContent="center"
                                alignItems="center"
                                borderWidth={1}
                                bg="white"
                                borderRadius="m"
                            >
                                <Entypo
                                    name={"heart-outlined"}
                                    size={20}
                                    color={theme.colors.darkColor}
                                />
                            </Box>
                        </TouchableOpacity>
                    </Box>
                    <Box
                        marginHorizontal="m"
                        flex={1}
                        bg="primary"
                        borderRadius="m"
                    >
                        <TouchableOpacity
                            onPress={() => {
                                setActionType("BAG");
                                hiddenViewTranslateY.value = 0;
                                setHiddenViewShow(true);
                            }}
                        >
                            <Box
                                paddingVertical="s"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Entypo
                                    name={"shopping-bag"}
                                    size={20}
                                    color={theme.colors.white}
                                />
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default ProductDetail;
