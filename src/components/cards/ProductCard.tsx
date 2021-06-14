import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";

import { BoxProps, useTheme } from "@shopify/restyle";
import { Theme } from "../../utils/theme";
import { Box, Text } from "../../utils/restyle";
import { Product } from "../../redux/data_types";
import Badge from "../Badge";
import IconButton from "../forms/form_elements/IconButton";
import { Entypo } from "@expo/vector-icons";

import { AirbnbRating } from "react-native-ratings";
import { SharedElement } from "react-navigation-shared-element";

interface ProductCardProps extends BoxProps<Theme> {
    product: Product;
    width: number;
    is_new?: boolean;
    onImagePress(item: Product): void;
    onAddToBagPress?(item: Product): void;
    is_in_bag?: boolean
    show_icon?: boolean
}

const { width: SWitch, height } = Dimensions.get("screen");

const ProductCard: React.FC<ProductCardProps> = ({
    width,
    product,
    is_new,
    onImagePress,
    onAddToBagPress,
    is_in_bag,
    show_icon,
    ...rest
}) => {
    const theme = useTheme<Theme>();
        return (
            <Box width={width} borderRadius="m" bg="white" margin="s" {...rest}>
                <TouchableOpacity onPress={() => onImagePress(product)}>
                    <Box
                        borderRadius="m"
                        overflow="hidden"
                        height={150}
                        bg="white"
                        width={width}
                    >
                        {product.is_discount && (
                            <Badge
                                title={`-${product.discount.percentage}%`}
                                bg="primary"
                                position="absolute"
                                top={5}
                                right={5}
                                zIndex={2}
                            />
                        )}
                        {product.is_new && (
                            <Badge
                                title={`New`}
                                bg="darkColor"
                                position="absolute"
                                top={5}
                                left={5}
                                zIndex={2}
                            />
                        )}

                        <SharedElement id={`image-${product.id}`}>
                            <Image
                                style={{ width, height: 150 }}
                                width={width}
                                height={150}
                                resizeMode="cover"
                                source={{ uri: product.thumbnail! }}
                            />
                        </SharedElement>
                    </Box>

                    {/* {(!is_in_bag || !show_icon) && <Box position="absolute" zIndex={50} bottom={-10} right={0}>
                        <IconButton
                            bg="primary"
                            icon={
                                <Entypo
                                    name="shopping-bag"
                                    size={24}
                                    color={"#ffffff"}
                                />
                            }
                            onPress={() => onAddToBagPress && onAddToBagPress(product)}
                        />
                    </Box>} */}
                </TouchableOpacity>
                <Box
                    marginTop="s"
                    paddingHorizontal="m"
                    flexDirection="row"
                    alignItems="center"
                >
                    <AirbnbRating
                        defaultRating={product.avg_rating}
                        isDisabled
                        size={10}
                        showRating={false}
                    />
                    <Text variant="description" opacity={0.5}>
                        {`(${product.number_reviews})`}
                    </Text>
                </Box>
                <Text paddingHorizontal="m" variant="description" opacity={0.5}>
                    {`${product.brand.display_name}`}
                </Text>
                <Text paddingHorizontal="m" variant="body2">
                    {`${product.display_name}`}
                </Text>
                <Text
                    paddingHorizontal="m"
                    variant="body2"
                    marginVertical="s"
                >{`${product.price} DT`}</Text>
            </Box>
        );
    // }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ProductCard;
