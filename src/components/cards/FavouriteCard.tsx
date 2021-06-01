import React from "react";
import { Dimensions, Image } from "react-native";
import { BoxProps, useTheme } from "@shopify/restyle";
import { Theme } from "../../utils/theme";
import { Box, Text } from "../../utils/restyle";
import {
    BagItem,
    decrementQuantity,
    incrementQuantity,
} from "../../redux/bag/bagSlice";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import { useAppDispatch } from "../../redux/hooks";
import { FavouriteItem } from "../../redux/favourite/favouriteSlice";
import AddToBagIcon from "../forms/form_elements/AddToBagIcon";
import IconButton from "../forms/form_elements/IconButton";

interface FavouriteCardProps extends BoxProps<Theme> {
    favouriteItem: FavouriteItem;
    onImagePress(): void;
    onDeletePress(): void;
    onAddToBagPress(): void 
}

const { width, height } = Dimensions.get("screen");

const FavouriteCard: React.FC<FavouriteCardProps> = ({
    favouriteItem,
    onDeletePress,
    onImagePress,
    onAddToBagPress,
    ...rest
}) => {
    const theme = useTheme<Theme>();
    const dispatch = useAppDispatch();
    return (
        <Box
            elevation={1}
            marginHorizontal="m"
            marginVertical="s"
            overflow="hidden"
            flexDirection="row"
            borderRadius="m"
            bg="white"
            {...rest}
        >
            <Box zIndex={1} position="absolute" top={10} right={10}>
                <TouchableOpacity onPress={onDeletePress}>
                    <Entypo
                        name="cross"
                        size={24}
                        color={theme.colors.primary}
                    />
                </TouchableOpacity>
            </Box>
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
            <Box flex={1} width={width * 0.7}>
                <Box>
                    <Text p="m" variant="body2">
                        {favouriteItem.product.display_name}
                    </Text>
                </Box>
                <Box flexDirection="row" paddingHorizontal="m">
                    <Box flexDirection="row" alignItems="center">
                        <Text
                            variant="description"
                            opacity={0.5}
                        >{`Color: `}</Text>
                        <Text variant="body">{favouriteItem.color}</Text>
                    </Box>
                    <Box marginLeft="s" flexDirection="row" alignItems="center">
                        <Text
                            variant="description"
                            opacity={0.5}
                        >{`Size: `}</Text>
                        <Text variant="body">{favouriteItem.size}</Text>
                    </Box>
                </Box>
                <Box
                    flexDirection="row"
                    paddingHorizontal="m"
                    justifyContent="space-between"
                >
                    <Text variant="body">{`${favouriteItem.product.price} DT`}</Text>
                    <Box flexDirection="row" alignItems="center">
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
                </Box>
            </Box>
        </Box>
    );
};

export default FavouriteCard;
