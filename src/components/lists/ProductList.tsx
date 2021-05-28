import React from "react";
import { Dimensions, StyleSheet } from "react-native";

import { Product } from "../../redux/data_types";
import { useTheme } from "@shopify/restyle";
import { Box } from "../../utils/restyle";
import { Theme } from "../../utils/theme";

import ProductCard from "../cards/ProductCard";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";
import { FlatList } from "react-native-gesture-handler";

interface ProductListProps {
    products: Product[];
    translationY: Animated.SharedValue<number>
}

const { width, height } = Dimensions.get("screen");

const PRODUCT_WIDTH = width / 2 ;

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList)

const ProductList: React.FC<ProductListProps> = ({ products, translationY }) => {
    const theme = useTheme<Theme>()

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translationY.value = event.contentOffset.y;
      });

    return (
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
                            width={PRODUCT_WIDTH - theme.spacing.s * 2}
                            product={item}
                            onAddToBagPress={() => {}}
                            onImagePress={() => {}}
                        />
                    )}
                />
            )}
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ProductList;
