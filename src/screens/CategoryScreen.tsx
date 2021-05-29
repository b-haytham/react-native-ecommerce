import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView } from "react-native";
import Layout from "../components/Layout";
import {
    CategoryScreenNavigationProps,
    CategoryScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";

import Constants from "expo-constants";
import ExitIcon from "../components/forms/form_elements/ExitIcon";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../utils/theme";
import { SharedElement } from "react-navigation-shared-element";
import ProductList from "../components/lists/ProductList";
import { PRODUCTS } from "../redux/data";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

interface CategoryScreenProps {
    navigation: CategoryScreenNavigationProps;
    route: CategoryScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const IMAGE_HEIGHT = height * 0.6;

const AnimatedBox = Animated.createAnimatedComponent(Box);

const CategoryScreen: React.FC<CategoryScreenProps> = ({
    route,
    navigation,
}) => {
    const theme = useTheme<Theme>();
    const [display, setDisplay] = useState(false)
    const translationY = useSharedValue(0);
    const imageH = useSharedValue(IMAGE_HEIGHT);

    const imageShrinked = useSharedValue(false);

    const animatedStyles = useAnimatedStyle(() => ({
        height: imageH.value,
    }));

    useEffect(() => {
        setDisplay(true)
    }, [])

    return (
        <Layout no_padding>
            <AnimatedBox
                width={width}
                borderBottomRightRadius="l"
                borderBottomLeftRadius="l"
                overflow="hidden"
                style={animatedStyles}
            >
                <SharedElement
                    id={`category-${route.params.category.display_name}`}
                >
                    <Image
                        width={width}
                        height={IMAGE_HEIGHT}
                        style={{ width, height: IMAGE_HEIGHT }}
                        source={route.params.category.image}
                        resizeMode="cover"
                    />
                </SharedElement>
                <Box position="absolute" bottom={20} left={20}>
                    <Text variant="headline" color="white">
                        {route.params.category.display_name}
                    </Text>
                </Box>
                <Box
                    position="absolute"
                    top={Constants.statusBarHeight + theme.spacing.m}
                    right={theme.spacing.m}
                >
                    <ExitIcon
                        onPress={() => navigation.navigate("Shop_Main")}
                    />
                </Box>
                <Box
                    position="absolute"
                    bottom={-15}
                    left={width / 2 - 15}
                    
                >
                    <ExitIcon
                        onPress={() => {
                            imageH.value = withTiming(
                                imageShrinked.value === false
                                    ? IMAGE_HEIGHT / 3
                                    : IMAGE_HEIGHT
                            );
                            imageShrinked.value = !imageShrinked.value;
                        }}
                    />
                </Box>
            </AnimatedBox>
            {display ? <Box flex={1}>
                <ProductList translationY={translationY} products={PRODUCTS} />
            </Box> : <Box/>}
        </Layout>
    );
};

export default CategoryScreen;
