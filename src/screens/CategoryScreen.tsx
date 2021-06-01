import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
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
    Easing,
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ProductCard from "../components/cards/ProductCard";
import Input from "../components/forms/form_elements/Input";
import { useKeyboard } from "../utils/useKeyboardHeight";
import { Product } from "../redux/data_types";
import { useAppSelector } from "../redux/hooks";

interface CategoryScreenProps {
    navigation: CategoryScreenNavigationProps;
    route: CategoryScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const IMAGE_HEIGHT = height * 0.6;
const PRODUCT_WIDTH = width / 2;
const HIDDEN_VIEW_HEIGHT = height * 0.4;

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);
const AnimatedBox = Animated.createAnimatedComponent(Box);

const CategoryScreen: React.FC<CategoryScreenProps> = ({
    route,
    navigation,
}) => {
    const theme = useTheme<Theme>();
    const products = useAppSelector((state) => state.products.products).filter(
        (p) => p.category.name === route.params.category.name
    );
    const [display, setDisplay] = useState(false);
    
    const [selectedProduct, setSelectedProduct] =
        useState<Product | null>(null);
    const translationY = useSharedValue(0);
  
    const hiddenViewTranslateY = useSharedValue(HIDDEN_VIEW_HEIGHT + 15);
  
    const scrollHandler = useAnimatedScrollHandler((event) => {
        translationY.value = event.contentOffset.y;
    });

    const hiddenViewStyles = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: withTiming(hiddenViewTranslateY.value, {
                    easing: Easing.circle,
                }),
            },
        ],
    }));

 
    useEffect(() => {
        setDisplay(true);
    }, []);

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
                            setSelectedProduct(null);
                            hiddenViewTranslateY.value =
                                HIDDEN_VIEW_HEIGHT + 15;
                        }}
                    />
                </Box>

                <ScrollView style={{ flex: 1 }}>
                    <Box paddingTop="xl" paddingHorizontal="m">
                        <Input placeholder="Name" />
                    </Box>
                </ScrollView>
            </AnimatedBox>
            <AnimatedBox
                width={width}
                borderBottomRightRadius="l"
                borderBottomLeftRadius="l"
                overflow="hidden"
                
            >
                <SharedElement
                    id={`category-${route.params.category.display_name}`}
                >
                    <Image
                        // width={width}
                        // height={IMAGE_HEIGHT / 3}
                        style={[{ width, height: IMAGE_HEIGHT / 3 }]}
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
            </AnimatedBox>
            <Box flex={1}>
                {display ? (
                    <Box>
                        {products.length > 0 && (
                            <AnimatedFlatlist
                                data={products}
                                keyExtractor={(p, i) => p.id.toString()}
                                numColumns={2}
                                onScroll={scrollHandler}
                                scrollEventThrottle={16}
                                renderItem={({ item }) => (
                                    <ProductCard
                                        width={
                                            PRODUCT_WIDTH - theme.spacing.s * 2
                                        }
                                        product={item}
                                        onAddToBagPress={() => {
                                            setSelectedProduct(item);
                                            hiddenViewTranslateY.value = 0;
                                        }}
                                        onImagePress={() =>
                                            navigation.navigate(
                                                "Shop_Product_Detail",
                                                { item: item }
                                            )
                                        }
                                    />
                                )}
                            />
                        )}
                    </Box>
                ) : (
                    <Box flex={1} justifyContent="center" alignItems="center">
                        <ActivityIndicator
                            color={theme.colors.primary}
                            size="large"
                        />
                    </Box>
                )}
            </Box>
        </Layout>
    );
};

export default CategoryScreen;
