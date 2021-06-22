import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions } from "react-native";

import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";
import { BoxProps, useTheme } from "@shopify/restyle";
import { Product } from "../redux/data_types";
import { ScrollView } from "react-native-gesture-handler";
import ProductCard from "./cards/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { AnimatePresence, MotiView } from "moti";

interface ProductListingProps extends BoxProps<Theme> {
    products: Product[];
    product_width: number;
    products_in_bag: number[];
}

const { width } = Dimensions.get("screen");

const ProductListing: React.FC<ProductListingProps> = ({
    product_width,
    products_in_bag,
    products,
    ...rest
}) => {
    const theme = useTheme<Theme>();
    const navigation = useNavigation();

    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setDisplay(true);
    }, []);

    const left_products = products.filter((p, i) => i % 2 !== 0);
    const right_products = products.filter((p, i) => i % 2 === 0);

    return (
        <Box {...rest}>
            <ScrollView contentContainerStyle={{paddingTop: theme.spacing.l}}>
                {display ? (
                    <Box flexDirection="row" justifyContent="center">
                        <Box>
                            {left_products.length > 0 &&
                                left_products.map((p) => (
                                    <ProductCard
                                        key={p.id}
                                        width={
                                            product_width - theme.spacing.s * 2
                                        }
                                        is_in_bag={products_in_bag.includes(
                                            p.id
                                        )}
                                        product={p}
                                        onAddToBagPress={() => {}}
                                        onImagePress={() =>
                                            navigation.navigate(
                                                "Shop_Product_Detail",
                                                {
                                                    item: p,
                                                }
                                            )
                                        }
                                    />
                                ))}
                        </Box>
                        <Box marginTop="xl">
                            {right_products.length > 0 &&
                                right_products.map((p) => (
                                    <ProductCard
                                        key={p.id}
                                        width={
                                            product_width - theme.spacing.s * 2
                                        }
                                        is_in_bag={products_in_bag.includes(
                                            p.id
                                        )}
                                        product={p}
                                        onAddToBagPress={() => {}}
                                        onImagePress={() =>
                                            navigation.navigate(
                                                "Shop_Product_Detail",
                                                {
                                                    item: p,
                                                }
                                            )
                                        }
                                    />
                                ))}
                        </Box>
                    </Box>
                ) : (
                    <Box flex={1} justifyContent="center" alignItems="center">
                        <ActivityIndicator
                            color={theme.colors.primary}
                            size="large"
                        />
                    </Box>
                )}
            </ScrollView>
        </Box>
    );
};

export default ProductListing;
