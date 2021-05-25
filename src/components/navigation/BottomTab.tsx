import React from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";

import { BoxProps, useTheme } from "@shopify/restyle";
import { Box } from "../../utils/restyle";
import { Theme } from "../../utils/theme";

import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

interface BottomTabProps extends BoxProps<Theme> {
    route_name: string;
    onHomePress?(): void
    onShopPress?(): void
    onBagPress?(): void
    onFavouritePress?(): void
    onProfilePress?(): void
}

const { width, height } = Dimensions.get("screen");

const BottomTab: React.FC<BottomTabProps> = ({ route_name, ...rest }) => {
    const navigation = useNavigation()
    const theme = useTheme<Theme>();
    return (
        <Box
            height={height * 0.1}
            width={width}
            bg="white"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly"
            borderTopLeftRadius="m"
            borderTopRightRadius="m"
            {...rest}
        >
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Box p="s" bg={route_name.startsWith("Home") ? 'background' : 'white'} borderRadius="m">
                    <Entypo
                        name="home"
                        size={24}
                        color={
                            route_name.startsWith("Home")
                                ? theme.colors.primary
                                : theme.colors.gray
                        }
                    />
                </Box>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Shop_Main')}>
                <Box p="s" bg={route_name.startsWith("Shop") ? 'background' : 'white'} borderRadius="m">
                    <Entypo
                        name="shopping-cart"
                        size={24}
                        color={
                            route_name.startsWith("Shop")
                                ? theme.colors.primary
                                : theme.colors.gray
                        }
                    />
                </Box>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Bag_Main')}>
                <Box p="s" bg={route_name.startsWith("Bag") ? 'background' : 'white'} borderRadius="m">
                    <Entypo
                        name="shopping-bag"
                        size={24}
                        color={
                            route_name.startsWith("Bag")
                                ? theme.colors.primary
                                : theme.colors.gray
                        }
                    />
                </Box>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Favourite_Main')}>
                <Box p="s" bg={route_name.startsWith("Favourite") ? 'background' : 'white'} borderRadius="m">
                    <Entypo
                        name="heart"
                        size={24}
                        color={
                            route_name.startsWith("Favourite")
                                ? theme.colors.primary
                                : theme.colors.gray
                        }
                    />
                </Box>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Profile_Main')}>
                <Box p="s" bg={route_name.startsWith("Profile") ? 'background' : 'white'} borderRadius="m">
                    <Ionicons
                        name="person"
                        size={24}
                        color={
                            route_name.startsWith("Profile")
                                ? theme.colors.primary
                                : theme.colors.gray
                        }
                    />
                </Box>
            </Pressable>
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default BottomTab;
