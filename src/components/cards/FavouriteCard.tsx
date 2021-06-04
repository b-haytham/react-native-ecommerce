import React from "react";
import { Dimensions, Image } from "react-native";
import { BoxProps, useTheme } from "@shopify/restyle";
import { Theme } from "../../utils/theme";
import { Box, Text } from "../../utils/restyle";

import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import { useAppDispatch } from "../../redux/hooks";
import { FavouriteItem } from "../../redux/favourite/favouriteSlice";
import IconButton from "../forms/form_elements/IconButton";

interface FavouriteCardProps extends BoxProps<Theme> {
    favouriteItem: FavouriteItem;
    onImagePress(): void;
    onDeletePress(): void;
    onAddToBagPress(): void;
    is_in_bag?: boolean;
}

const { width, height } = Dimensions.get("screen");

const FavouriteCard: React.FC<FavouriteCardProps> = ({
    favouriteItem,
    onDeletePress,
    onImagePress,
    onAddToBagPress,
    is_in_bag,
    ...rest
}) => {
    const theme = useTheme<Theme>();
    const dispatch = useAppDispatch();
    return (
        <Box
            borderRadius="s"
            overflow="hidden"
            marginVertical="s"
            flexDirection="row"
            bg="white"
            {...rest}
        >
            <TouchableOpacity onPress={onImagePress}>
                <SharedElement id={`image-${favouriteItem.product.id}`}>
                    <Image
                        style={{ width: width * 0.3, height: 150 }}
                        width={width * 0.3}
                        height={150}
                        resizeMode="cover"
                        source={{ uri: favouriteItem.product.thumbnail! }}
                    />
                </SharedElement>
            </TouchableOpacity>
            <Box flex={1} width={width * 0.7} justifyContent="space-between">
                <Box>
                    <Box
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems={"flex-start"}
                    >
                        <Box flex={10}>
                            <Text
                                paddingHorizontal="m"
                                paddingVertical="s"
                                variant="body2"
                            >
                                {favouriteItem.product.display_name}
                            </Text>
                        </Box>
                        <Box flex={1} marginHorizontal="m">
                            <TouchableOpacity onPress={onDeletePress}>
                                <Entypo
                                    name="cross"
                                    size={24}
                                    color={theme.colors.primary}
                                />
                            </TouchableOpacity>
                        </Box>
                    </Box>
                    <Box flexDirection="row" paddingHorizontal="m">
                        <Box flexDirection="row" alignItems="center">
                            <Text
                                variant="description"
                                opacity={0.5}
                            >{`Color: `}</Text>
                            <Text variant="body">{favouriteItem.color}</Text>
                        </Box>
                        <Box
                            marginLeft="s"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <Text
                                variant="description"
                                opacity={0.5}
                            >{`Size: `}</Text>
                            <Text variant="body">{favouriteItem.size}</Text>
                        </Box>
                    </Box>
                </Box>
                <Box
                    paddingBottom="s"
                    flexDirection="row"
                    paddingHorizontal="m"
                    justifyContent="space-between"
                >
                    <Text marginBottom='m' variant="body">{`${favouriteItem.product.price} DT`}</Text>
                    {!is_in_bag && (
                        <Box
                            position="absolute"
                            bottom={theme.spacing.m}
                            right={theme.spacing.m}
                            flexDirection="row"
                            alignItems="center"
                        >
                            <IconButton
                                elevation={10}
                                width={30}
                                height={30}
                                bg="primary"
                                icon={
                                    <Entypo
                                        name="shopping-bag"
                                        size={20}
                                        color={"#ffffff"}
                                    />
                                }
                                onPress={onAddToBagPress}
                            />
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default FavouriteCard;
