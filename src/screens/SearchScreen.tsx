import { Ionicons } from "@expo/vector-icons";
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
import ProductCard from "../components/cards/ProductCard";
import Input from "../components/forms/form_elements/Input";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import {
    SearchScreenNavigationProps,
    SearchScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Product } from "../redux/data_types";
import { useAppSelector } from "../redux/hooks";
import { Box } from "../utils/restyle";
import { Theme } from "../utils/theme";
import { useKeyboard } from "../utils/useKeyboardHeight";

interface SearchScreenProps {
    navigation: SearchScreenNavigationProps;
    route: SearchScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");
const PRODUCT_WIDTH = width / 2;

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();
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
                contentContainerStyle={{ marginBottom: height * 0.1 }}
                ListHeaderComponent={
                    <Box margin="m">
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
                                        color={theme.colors.darkColor}
                                    />
                                </TouchableOpacity>
                            }
                        />
                    </Box>
                }
                data={products}
                keyExtractor={(p, i) => p.id.toString()}
                numColumns={2}
                scrollEventThrottle={16}
                renderItem={({ item }) => (
                    <ProductCard
                        width={PRODUCT_WIDTH - theme.spacing.s * 2}
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
