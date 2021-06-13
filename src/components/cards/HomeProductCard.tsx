import React from "react";
import {} from "react-native";

import { BoxProps } from "@shopify/restyle";
import { Theme } from "../../utils/theme";
import { Box, Text } from "../../utils/restyle";
import { Product } from "../../redux/data_types";
import { TouchableOpacity } from "react-native-gesture-handler";

import { SharedElement } from "react-navigation-shared-element";
import { Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface HomeProductCardProps extends BoxProps<Theme> {
    product: Product;
    product_width: number;
    product_height?: number;
    in_favourite?: boolean;
    in_bag?: boolean
    onImagePress(): void;
    onAddToFavouritePress(): void
}

const HomeProductCard: React.FC<HomeProductCardProps> = ({
    product,
    product_width,
    product_height,
    in_favourite,
    onImagePress,
    onAddToFavouritePress,
    in_bag,
    ...rest
}) => {
    return (
        <Box
            width={product_width}
            bg="primary"
            borderRadius="m"
            marginHorizontal="m"
            marginBottom="s"
            marginTop="m"
            {...rest}
        >
            <Box
                elevation={10}
                width={product_width}
                marginLeft="s"
                bg="white"
                borderRadius="m"
                overflow="hidden"
                marginBottom="s"
                style={{ marginTop: -10 }}
            >
                <TouchableOpacity activeOpacity={0.6} onPress={onImagePress}>
                    <SharedElement id={`image-${product.id}`}>
                        <Image
                            style={{
                                width: product_width,
                                height: product_height
                                    ? product_height
                                    : product_width,
                                overflow: "hidden",
                            }}
                            resizeMode="cover"
                            source={{ uri: product.thumbnail! }}
                        />
                    </SharedElement>
                </TouchableOpacity>
                <Box p="m">
                    <Text variant="small" fontWeight="bold">
                        {product.name}
                    </Text>
                </Box>
            </Box>
            <Box
                paddingHorizontal="m"
                pb="s"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box>
                    <Text
                        variant="body"
                        color="white"
                    >{`${product.price}DT`}</Text>
                </Box>
                <Box
                    flexDirection='row'
                    alignItems='center'
                >
                    {in_favourite && (
                        <Entypo name="heart" size={20} color="white" />
                    )}
                    {in_bag && (
                         <Entypo
                         style={{marginLeft: 10}}
                         name="shopping-bag"
                         size={18}
                         color={'white'}
                     />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default React.memo(HomeProductCard);
