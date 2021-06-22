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
        <Box borderRadius='s' overflow='hidden' marginVertical="s" flexDirection="row" bg="white" {...rest}>
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
            <Box flex={1} width={width * 0.7} justifyContent="space-between">
                <Box>
                    <Box
                        flex={1}
                        paddingHorizontal='m'
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        <Box flex={10}>
                        <Text
                            
                            paddingVertical="s"
                            variant="body2"
                        >
                            {bagItem.product.display_name}
                        </Text>
                        </Box>
                        <Box flex={1} marginHorizontal='m'>
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
                            <Text variant="body">{bagItem.color}</Text>
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
                            <Text variant="body">{bagItem.size}</Text>
                        </Box>
                    </Box>
                </Box>
                <Box
                    paddingBottom="s"
                    flexDirection="row"
                    paddingHorizontal="s"
                    justifyContent="space-between"
                    alignItems="center"
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

export default React.memo(BagCard);
