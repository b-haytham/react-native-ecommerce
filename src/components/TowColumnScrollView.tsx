import React from "react";

import { BoxProps, useTheme } from "@shopify/restyle";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";
import { Product } from "../redux/data_types";
import {
    PanGestureHandlerGestureEvent,
    TouchableOpacity,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { SharedElement } from "react-navigation-shared-element";
import { Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Animated, {
    useAnimatedGestureHandler,
    withSpring,
} from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useAnimatedStyle } from "react-native-reanimated";

interface TowColumnScrollViewProps extends BoxProps<Theme> {
    width: number;
    products: Product[];
    products_in_bag: number[];
    products_in_favourite: number[];
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

const TowColumnScrollView: React.FC<TowColumnScrollViewProps> = ({
    width,
    products,
    products_in_bag,
    products_in_favourite,
    ...rest
}) => {
    const theme = useTheme<Theme>();
    const navigation = useNavigation();
    const PRODUCT_WIDTH = width / 2 - theme.spacing.m * 2;
    const right_products = products.filter((p) => p.id % 2 !== 0);
    const left_products = products.filter((p) => p.id % 2 === 0);

    return (
        <Box
            flexDirection="row"
            justifyContent="center"
            width={width}
            {...rest}
        >
            <Box>
                {left_products.map((p) => {
                    return (
                        <Box
                            width={PRODUCT_WIDTH}
                            bg="primary"
                            borderRadius="m"
                            key={p.id}
                            marginBottom="s"
                            marginTop="s"
                        >
                            <AnimatedBox
                                elevation={10}
                                width={PRODUCT_WIDTH}
                                marginLeft="s"
                                bg="white"
                                borderRadius="m"
                                overflow="hidden"
                                marginBottom="s"
                                style={[{ marginTop: -10 }]}
                            >
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={() =>
                                        navigation.navigate(
                                            "Shop_Product_Detail",
                                            {
                                                item: p,
                                            }
                                        )
                                    }
                                >
                                    <SharedElement id={`image-${p.id}`}>
                                        <Image
                                            style={{
                                                width: PRODUCT_WIDTH,
                                                height: 100,

                                                overflow: "hidden",
                                            }}
                                            resizeMode="cover"
                                            source={{ uri: p.thumbnail! }}
                                        />
                                    </SharedElement>
                                </TouchableOpacity>

                                <Box p="m">
                                    <Text variant="small" fontWeight="bold">
                                        {p.name}
                                    </Text>
                                </Box>
                            </AnimatedBox>

                            <Box
                                paddingHorizontal="m"
                                pb="s"
                                flexDirection="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Box>
                                    <Text
                                        variant="body"
                                        color="white"
                                    >{`${p.price}DT`}</Text>
                                </Box>
                                <Box flexDirection="row" alignItems="center">
                                    {products_in_favourite.includes(p.id) && (
                                        <Entypo
                                            name="heart"
                                            size={20}
                                            color="white"
                                        />
                                    )}
                                    {products_in_bag.includes(p.id) && (
                                        <Entypo
                                            style={{ marginLeft: 10 }}
                                            name="shopping-bag"
                                            size={18}
                                            color={"white"}
                                        />
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
            <Box
                style={{
                    transform: [{ translateY: 20 }],
                    marginHorizontal: theme.spacing.m,
                }}
            >
                {right_products.map((p) => (
                    <Box
                        width={PRODUCT_WIDTH}
                        bg="primary"
                        borderRadius="m"
                        key={p.id}
                        marginBottom="s"
                    >
                        <Box
                            elevation={10}
                            width={PRODUCT_WIDTH}
                            marginLeft="s"
                            bg="white"
                            borderRadius="m"
                            overflow="hidden"
                            marginBottom="s"
                        >
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() =>
                                    navigation.navigate("Shop_Product_Detail", {
                                        item: p,
                                    })
                                }
                            >
                                <SharedElement id={`image-${p.id}`}>
                                    <Image
                                        style={{
                                            width: PRODUCT_WIDTH,
                                            height: 100,

                                            overflow: "hidden",
                                        }}
                                        resizeMode="cover"
                                        source={{ uri: p.thumbnail! }}
                                    />
                                </SharedElement>
                            </TouchableOpacity>

                            <Box p="m">
                                <Text variant="small" fontWeight="bold">
                                    {p.name}
                                </Text>
                            </Box>
                        </Box>
                        <Box
                            paddingHorizontal="m"
                            pb="s"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Box>
                                <Text
                                    variant="body"
                                    color="white"
                                >{`${p.price}DT`}</Text>
                            </Box>
                            <Box flexDirection="row" alignItems="center">
                                {products_in_favourite.includes(p.id) && (
                                    <Entypo
                                        name="heart"
                                        size={20}
                                        color="white"
                                    />
                                )}
                                {products_in_bag.includes(p.id) && (
                                    <Entypo
                                        style={{ marginLeft: 10 }}
                                        name="shopping-bag"
                                        size={18}
                                        color={"white"}
                                    />
                                )}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default React.memo(TowColumnScrollView);
