import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
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

import Animated, {
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ProductCard from "../components/cards/ProductCard";

import { Product } from "../redux/data_types";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import FilterView from "../components/FilterView";
import SortView from "../components/SortView";
import ProductListing from "../components/ProductListing";

interface CategoryScreenProps {
    navigation: CategoryScreenNavigationProps;
    route: CategoryScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const IMAGE_HEIGHT = height * 0.6;
const PRODUCT_WIDTH = width / 2;
const HIDDEN_VIEW_HEIGHT = height * 0.4;
const FILTER_VIEW_HEIGHT = height * 0.5;

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);
const AnimatedBox = Animated.createAnimatedComponent(Box);

const CategoryScreen: React.FC<CategoryScreenProps> = ({
    route,
    navigation,
}) => {
    const dispatch = useAppDispatch();
    const theme = useTheme<Theme>();

    const filterTranslateY = useSharedValue(FILTER_VIEW_HEIGHT + 15);
    const sortTranslateY = useSharedValue(FILTER_VIEW_HEIGHT + 15);

    const products_in_bag = useAppSelector(
        (state) => state.bag.products_in_bag
    );
    const products = useAppSelector((state) => state.products.products).filter(
        (p) => p.category.name === route.params.category.name
    );
    // const [display, setDisplay] = useState(false);

    // selection state
    const [selectedProduct, setSelectedProduct] =
        useState<Product | null>(null);
    const [selectedSize, setSelectedSize] = useState(
        selectedProduct && selectedProduct.has_size
            ? selectedProduct.sizes[0]
            : ""
    );
    const [selectedColor, setSelectedColor] = useState(
        selectedProduct && selectedProduct.has_color
            ? selectedProduct.color[0]
            : ""
    );
    //selection state

    const translationY = useSharedValue(0);
    const hiddenViewTranslateY = useSharedValue(HIDDEN_VIEW_HEIGHT + 15);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translationY.value = event.contentOffset.y;
    });

    const hiddenViewStyles = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: withTiming(hiddenViewTranslateY.value),
            },
        ],
    }));

    // useEffect(() => {
    //     setDisplay(true);
    // }, []);

    console.log(selectedProduct);

    return (
        <Layout no_padding>
            <FilterView
                height={FILTER_VIEW_HEIGHT}
                width={width}
                translateY={filterTranslateY}
                onApply={() =>
                    (filterTranslateY.value = FILTER_VIEW_HEIGHT + 15)
                }
                onClose={() =>
                    (filterTranslateY.value = FILTER_VIEW_HEIGHT + 15)
                }
            />
            <SortView
                height={FILTER_VIEW_HEIGHT}
                width={width}
                translateY={sortTranslateY}
                onApply={() => (sortTranslateY.value = FILTER_VIEW_HEIGHT + 15)}
                onClose={() => (sortTranslateY.value = FILTER_VIEW_HEIGHT + 15)}
            />

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
                        style={[
                            {
                                width,
                                height: IMAGE_HEIGHT / 3,
                                borderBottomLeftRadius: theme.borderRadii.l,
                                borderBottomRightRadius: theme.borderRadii.l,
                            },
                        ]}
                        source={{ uri: route.params.category.image }}
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
                <Box    
                    bg='white'
                    padding="m"
                    flexDirection="row"
                    justifyContent="space-between"
                    borderRadius="m"
                    elevation={1}
                >
                    <TouchableOpacity
                        onPress={() => (filterTranslateY.value = 0)}
                    >
                        <Box flexDirection="row" alignItems="center">
                            <Ionicons
                                name="filter-sharp"
                                size={24}
                                color={theme.colors.darkColor}
                            />
                            <Text marginLeft="s" variant="body2" opacity={0.7}>
                                Filter
                            </Text>
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => (sortTranslateY.value = 0)}
                    >
                        <Box flexDirection="row" alignItems="center">
                            <MaterialCommunityIcons
                                name="sort"
                                size={24}
                                color={theme.colors.darkColor}
                            />
                            <Text marginLeft="s" variant="body2" opacity={0.7}>
                                Sort
                            </Text>
                        </Box>
                    </TouchableOpacity>
                </Box>
                {/* {display ? (
                    <Box>
                        {products.length > 0 && (
                            <AnimatedFlatlist
                                ListHeaderComponent={
                                    
                                }
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
                                        is_in_bag={products_in_bag.includes(
                                            item.id
                                        )}
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
                )} */}
                <ProductListing
                flex={1}
                    product_width={width / 2 - theme.spacing.s * 2}
                    products={products}
                    products_in_bag={products_in_bag}
                />
            </Box>
        </Layout>
    );
};

export default CategoryScreen;
