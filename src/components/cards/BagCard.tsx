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

interface BagCardProps extends BoxProps<Theme> {
    bagItem: BagItem;
    onImagePress(): void;
    onDeletePress(): void;
}

const { width, height } = Dimensions.get("screen");

const BagCard: React.FC<BagCardProps> = ({
    bagItem,
    onDeletePress,
    onImagePress,
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
                <SharedElement id={`image-${bagItem.product.id}`}>
                    <Image
                        style={{ width: width * 0.3, height: 150 }}
                        width={width * 0.3}
                        height={150}
                        resizeMode="cover"
                        source={{ uri: bagItem.product.thumbnail! }}
                    />
                </SharedElement>
            </TouchableOpacity>
            <Box flex={1} width={width * 0.7}>
                <Box>
                    <Text p="m" variant="body2">
                        {bagItem.product.display_name}
                    </Text>
                </Box>
                <Box flexDirection="row" paddingHorizontal="m">
                    <Box flexDirection="row" alignItems="center">
                        <Text
                            variant="description"
                            opacity={0.5}
                        >{`Color: `}</Text>
                        <Text variant="body">{bagItem.color}</Text>
                    </Box>
                    <Box marginLeft="s" flexDirection="row" alignItems="center">
                        <Text
                            variant="description"
                            opacity={0.5}
                        >{`Size: `}</Text>
                        <Text variant="body">{bagItem.size}</Text>
                    </Box>
                </Box>
                <Box
                    flexDirection="row"
                    paddingHorizontal="m"
                    justifyContent="space-between"
                >
                    <Box flexDirection="row" alignItems="center">
                        <TouchableOpacity
                            onPress={() =>
                                dispatch(decrementQuantity(bagItem.product.id))
                            }
                        >
                            <MaterialIcons
                                name="arrow-left"
                                size={30}
                                color="black"
                            />
                        </TouchableOpacity>
                        <Text variant="body">{bagItem.quantity}</Text>
                        <TouchableOpacity
                            onPress={() =>
                                dispatch(incrementQuantity(bagItem.product.id))
                            }
                        >
                            <MaterialIcons
                                name="arrow-right"
                                size={30}
                                color="black"
                            />
                        </TouchableOpacity>
                    </Box>
                    <Text variant="body">{`${bagItem.product.price} DT`}</Text>
                </Box>
            </Box>
        </Box>
    );
};

export default BagCard;