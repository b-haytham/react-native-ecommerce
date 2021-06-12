import React, { useState } from "react";
import { Dimensions, ScrollView } from "react-native";

import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import {
    ShippingAddressesScreenNavigationProps,
    ShippingAdressesScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";

import { useTheme } from "@shopify/restyle";
import { Theme } from "../utils/theme";
import Header from "../components/navigation/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Box } from "../utils/restyle";

import ShippingAddressCard from "../components/cards/ShippingAddressCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ShippingAddress } from "../redux/data_types";
import { removeShippingAddress } from "../redux/user/userSlice";
import { AnimatePresence } from "framer-motion";
import { MotiView } from "@motify/components";
import { Image } from "react-native";

interface ShippingAddressesScreenProps {
    navigation: ShippingAddressesScreenNavigationProps;
    route: ShippingAdressesScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");
const HEADER_HEIGHT = height * 0.12;

const ShippingAddressesScreen: React.FC<ShippingAddressesScreenProps> = ({
    route,
    navigation,
}) => {
    const theme = useTheme<Theme>();
    const dispatch = useAppDispatch();
    const shippingAddresses = useAppSelector(
        (state) => state.user.current_user?.shipping_addresses
    );
    return (
        <Layout bg={shippingAddresses!.length > 0 ? 'background' : 'white'}>
            <Header
                height={HEADER_HEIGHT}
                elevation={2}
                title="Shipping Addresses"
                position="absolute"
                paddingHorizontal="m"
                top={0}
                left_icon={
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Profile_Main")}
                    >
                        <Ionicons
                            name="arrow-back"
                            size={30}
                            color={theme.colors.darkColor}
                        />
                    </TouchableOpacity>
                }
                right_icon={
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Profile_New_Address", {
                                shipping_address: null,
                            })
                        }
                    >
                        <Entypo
                            name="plus"
                            size={30}
                            color={theme.colors.darkColor}
                        />
                    </TouchableOpacity>
                }
            />
            <BottomTab
                elevation={5}
                route_name={route.name}
                position="absolute"
                bottom={0}
            />
            <ScrollView
                style={{
                    flex: 1,
                    marginBottom: height * 0.1,
                    marginTop: HEADER_HEIGHT - theme.spacing.l,
                }}
            >
                <Box marginHorizontal="s">
                    <AnimatePresence>
                        {shippingAddresses && shippingAddresses.length > 0 ? (
                            shippingAddresses.map(
                                (sh: ShippingAddress, i: number) => (
                                    <MotiView
                                        key={sh.id}
                                        from={{
                                            opacity: 0,
                                            translateX: -width,
                                        }}
                                        animate={{ opacity: 1, translateX: 0 }}
                                        exit={{
                                            opacity: 0,
                                            translateX: -width,
                                        }}
                                        transition={{
                                            type: "timing",
                                            duration: 300,
                                            delay: i * 10,
                                        }}
                                        exitTransition={{
                                            type: "timing",
                                            duration: 300,
                                        }}
                                    >
                                        <ShippingAddressCard
                                            elevation={1}
                                            address={sh}
                                            onCheckBoxChange={(v) => {}}
                                            onEditPress={() =>
                                                navigation.navigate(
                                                    "Profile_New_Address",
                                                    { shipping_address: sh }
                                                )
                                            }
                                            onDeletePress={() =>
                                                dispatch(
                                                    removeShippingAddress(sh.id)
                                                )
                                            }
                                        />
                                    </MotiView>
                                )
                            )
                        ) : (
                            <MotiView
                                from={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                delay={300}
                            >
                            <Box
                                flex={1}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Image
                                    source={require("../../assets/empty.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: width * 0.6,
                                        height: height * 0.6,
                                    }}
                                />
                            </Box>
                            </MotiView>
                        )}
                    </AnimatePresence>
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default ShippingAddressesScreen;
