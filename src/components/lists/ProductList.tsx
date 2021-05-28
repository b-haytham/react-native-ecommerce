import React from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";

import { Product } from "../../redux/data_types";
import { useTheme } from "@shopify/restyle";
import { Box } from "../../utils/restyle";
import { Theme } from "../../utils/theme";

import ProductCard from "../cards/ProductCard";

interface ProductListProps {
    products: Product[];
}

const { width, height } = Dimensions.get("screen");

const PRODUCT_WIDTH = width / 2 ;

const ProductList: React.FC<ProductListProps> = ({ products }) => {
const theme = useTheme<Theme>()
    return (
        <Box>
            {products.length > 0 && (
                <FlatList
                    data={products}
                    keyExtractor={(p, i) => p.id.toString()}
                    numColumns={2}
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
