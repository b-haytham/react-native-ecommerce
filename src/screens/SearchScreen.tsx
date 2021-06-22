import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect, useIsFocused } from "@react-navigation/core";
import { useTheme } from "@shopify/restyle";
import React, { createRef, useEffect, useRef, useState } from "react";
import {
    Dimensions,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import ProductCard from "../components/cards/ProductCard";
import FilterView from "../components/FilterView";
import Input from "../components/forms/form_elements/Input";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import {
    SearchScreenNavigationProps,
    SearchScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Product } from "../redux/data_types";
import { useAppSelector } from "../redux/hooks";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";
import { useKeyboard } from "../utils/useKeyboardHeight";

import SortView from "../components/SortView";

import { SharedElement } from "react-navigation-shared-element";


interface SearchScreenProps {
    navigation: SearchScreenNavigationProps;
    route: SearchScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");
const PRODUCT_WIDTH = width / 2;

const FILTER_VIEW_HEIGHT = height * 0.5;

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();
    //animations
    const filterTranslateY = useSharedValue(FILTER_VIEW_HEIGHT + 15);
    const sortTranslateY = useSharedValue(FILTER_VIEW_HEIGHT + 15);
    //animations
    const [keyboardHeight, keyboardVisible] = useKeyboard();
    const inputRef = createRef<TextInput>();
    const searchButtonRef = createRef<TouchableOpacity>();

    const storedProducts = useAppSelector((state) => state.products.products);
    const products_in_bag = useAppSelector(
        (state) => state.bag.products_in_bag
    );

    const [products, setProducts] = useState<Product[]>([]);

    const [searchTerm, setSearchTerm] = useState(
        route.params.search_term ? route.params.search_term : ""
    );

    useEffect(() => {
        if (route.params.search_term) {
            setProducts((prev) =>
                storedProducts.filter((p) =>
                    p.sub_category.name
                        .toLowerCase()
                        .includes(route.params.search_term!.toLowerCase())
                )
            );
        }
    }, [route.params.search_term]);

    return (
        <Layout>
            <SortView
                height={FILTER_VIEW_HEIGHT}
                width={width}
                translateY={sortTranslateY}
                onClose={() => (sortTranslateY.value = FILTER_VIEW_HEIGHT + 15)}
                onApply={() => (sortTranslateY.value = FILTER_VIEW_HEIGHT + 15)}
            />
            <FilterView
                width={width}
                height={FILTER_VIEW_HEIGHT}
                onClose={() =>
                    (filterTranslateY.value = FILTER_VIEW_HEIGHT + 15)
                }
                translateY={filterTranslateY}
                onApply={() => (filterTranslateY.value = FILTER_VIEW_HEIGHT + 15)}
            />
            {!keyboardVisible && (
                <BottomTab
                    elevation={5}
                    route_name={route.name}
                    position="absolute"
                    bottom={0}
                    zIndex={5555}
                />
            )}

            <FlatList
                contentContainerStyle={{ marginBottom: height * 0.1, paddingHorizontal: theme.spacing.m }}
                ListHeaderComponent={
                    <Box 
                        marginVertical='m'
                        padding='m'
                        borderRadius='m'
                        bg='primary'
                        elevation={10}
                    >
                        <SharedElement id='search-input'>
                        <Input
                            inputRef={inputRef}
                            placeholder="Search"
                            textInputProps={{
                                value: searchTerm,
                                onChangeText: (v) => setSearchTerm(v),
                            }}
                            icon={
                                <TouchableOpacity
                                    ref={searchButtonRef}
                                    onPress={() =>
                                        setProducts((prev) =>
                                            storedProducts.filter(
                                                (p) =>
                                                    p.sub_category.name.toLowerCase() ===
                                                    searchTerm.toLowerCase()
                                            )
                                        )
                                    }
                                >
                                    <Ionicons
                                        name="search"
                                        size={25}
                                        color={theme.colors.primary}
                                    />
                                </TouchableOpacity>
                            }
                        />
                        </SharedElement>
                        {products.length !== 0 && (
                            <Box
                                paddingHorizontal="m"
                                paddingVertical='s'
                                flexDirection="row"
                                justifyContent="space-between"
                                bg="white"
                                borderRadius="s"
                            >
                                <TouchableOpacity
                                    onPress={() => (filterTranslateY.value = 0)}
                                >
                                    <Box
                                        flexDirection="row"
                                        alignItems="center"
                                    >
                                        <Ionicons
                                            name="filter-sharp"
                                            size={24}
                                            color={theme.colors.darkColor}
                                        />
                                        <Text
                                            marginLeft="s"
                                            variant="body2"
                                            opacity={0.7}
                                        >
                                            Filter
                                        </Text>
                                    </Box>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => (sortTranslateY.value = 0)}
                                >
                                    <Box
                                        flexDirection="row"
                                        alignItems="center"
                                    >
                                        <MaterialCommunityIcons
                                            name="sort"
                                            size={24}
                                            color={theme.colors.darkColor}
                                        />
                                        <Text
                                            marginLeft="s"
                                            variant="body2"
                                            opacity={0.7}
                                        >
                                            Sort
                                        </Text>
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        )}
                    </Box>
                }
                data={products}
                keyExtractor={(p, i) => p.id.toString()}
                numColumns={2}
                scrollEventThrottle={16}
                
                renderItem={({ item }) => (
                    <ProductCard
            
                        width={PRODUCT_WIDTH - theme.spacing.m * 2}
                        is_in_bag={products_in_bag.includes(item.id)}
                        product={item}
                        onAddToBagPress={() => {}}
                        onImagePress={() =>
                            navigation.navigate("Shop_Product_Detail", {
                                item: item,
                            })
                        }
                    />
                )}
            />
        </Layout>
    );
};

export default SearchScreen;
