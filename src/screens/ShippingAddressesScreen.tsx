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

import ShippingAddressCard from '../components/cards/ShippingAddressCard'
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ShippingAddress } from "../redux/data_types";
import { removeShippingAddress } from "../redux/user/userSlice";

interface ShippingAddressesScreenProps {
    navigation: ShippingAddressesScreenNavigationProps;
    route: ShippingAdressesScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");
const HEADER_HEIGHT = height * .15

const ShippingAddressesScreen: React.FC<ShippingAddressesScreenProps> = ({
    route,
    navigation,
}) => {
    const theme = useTheme<Theme>();
    const dispatch = useAppDispatch()
    const shippingAddresses = useAppSelector(state => state.user.current_user?.shipping_addresses)
    return (
        <Layout>
            <Header
                height={HEADER_HEIGHT}
                elevation={2}
                title="Shipping Addresses"
                position="absolute"
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
                        onPress={() => navigation.navigate('Profile_New_Address', {shipping_address: null})}
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
                    {shippingAddresses && shippingAddresses.length > 0 && shippingAddresses.map((sh: ShippingAddress)=> (
                        <ShippingAddressCard
                            key={sh.id}
                            elevation={1}
                            address={sh}
                            onCheckBoxChange={(v) => {}}
                            onEditPress={() => navigation.navigate('Profile_New_Address', {shipping_address: sh})}
                            onDeletePress={() => dispatch(removeShippingAddress(sh.id))}
                        />
                    ))}
                      
                    </Box>
            </ScrollView>
        </Layout>
    );
};

export default ShippingAddressesScreen;
