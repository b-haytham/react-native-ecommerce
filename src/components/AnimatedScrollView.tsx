import React from "react";
import {} from "react-native";

import { BoxProps, useTheme } from "@shopify/restyle";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";
import { Product } from "../redux/data_types";
import {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { TouchableOpacity } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import { Image } from "react-native";
import { HomeScreenNavigationProps } from "../navigation/ScreensNavigationRouteProps";

import { Entypo } from '@expo/vector-icons'
interface AnimatedScrollViewProps extends BoxProps<Theme> {
    data: Product[];
    itemWidth: number;
    itemHeight?: number;
    navigation: HomeScreenNavigationProps;
    products_in_bag: number[]
    products_in_favourite: number[]
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

const AnimatedScrollView: React.FC<AnimatedScrollViewProps> = ({
    data,
    itemHeight,
    itemWidth,
    navigation,
    products_in_bag,
    products_in_favourite,   
    ...rest
}) => {
    const theme = useTheme<Theme>();

    const translationX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translationX.value = event.contentOffset.x;
    });

    return (
        <Box {...rest}>
            <Animated.ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                snapToInterval={itemWidth + theme.spacing.m * 2}
                decelerationRate="fast"
            >
                {data.map((item, index) => {
                    const inputRange = [
                        (itemWidth + theme.spacing.m * 2) * (index - 2),
                        (itemWidth  + theme.spacing.m * 2) * index,
                        (itemWidth +theme.spacing.m * 2 ) * (index + 2),
                    ];

                    const rotateZ = useDerivedValue(() => {
                        return withSpring(
                            interpolate(
                                translationX.value,
                                inputRange,
                                [-45, 0, 45],
                                Extrapolate.CLAMP
                            )
                        );
                    });

                    const animatedStyles = useAnimatedStyle(() => ({
                        zIndex: -index,
                        transform: [
                            {
                                scale: withSpring(
                                    interpolate(
                                        translationX.value,
                                        inputRange,
                                        [0.5, 1, 0.5],
                                        Extrapolate.CLAMP
                                    )
                                ),
                            },
                            {
                                rotate: rotateZ.value + "deg",
                            },
                            {
                                translateX: interpolate(
                                    translationX.value,
                                    inputRange,
                                    [0, 0, -100],
                                    Extrapolate.CLAMP
                                ),
                            },
                        ],
                    }));
                    return (
                        <AnimatedBox
                            bg="primary"
                            width={itemWidth}
                            borderRadius="m"
                            key={item.id}
                            margin='m'
                            style={animatedStyles}
                        >
                            <Box
                                elevation={10}
                                width={itemWidth}
                                marginHorizontal="s"
                                bg="white"
                                borderRadius="m"
                                overflow="hidden"
                                marginBottom="m"
                                style={{marginTop: -10}}
                            >
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={() =>
                                        navigation.navigate(
                                            "Shop_Product_Detail",
                                            { item }
                                        )
                                    }
                                >
                                    <SharedElement id={`image-${item.id}`}>
                                        <Image
                                            style={{
                                                width: itemWidth,
                                                height: 200,

                                                overflow: "hidden",
                                            }}
                                            resizeMode="cover"
                                            source={{ uri: item.thumbnail! }}
                                        />
                                    </SharedElement>
                                </TouchableOpacity>

                                <Box p="m">
                                    <Text variant="small" fontWeight="bold">
                                        {item.name}
                                    </Text>
                                </Box>
                            </Box>
                            <Box
                                paddingHorizontal='m'
                                pb='s'
                                flexDirection='row'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Box>
                                    <Text variant='body' color='white' >{`${item.price}DT`}</Text>
                                </Box>
                                <Box flexDirection="row" alignItems="center">
                                {products_in_favourite.includes(item.id) && (
                                    <Entypo
                                        name="heart"
                                        size={20}
                                        color="white"
                                    />
                                )}
                                {products_in_bag.includes(item.id) && (
                                    <Entypo
                                        style={{ marginLeft: 10 }}
                                        name="shopping-bag"
                                        size={18}
                                        color={"white"}
                                    />
                                )}
                            </Box>
                            </Box>
                        </AnimatedBox>
                    );
                })}
                <Box m="s" width={itemWidth} />
            </Animated.ScrollView>
        </Box>
    );
};

export default AnimatedScrollView;
