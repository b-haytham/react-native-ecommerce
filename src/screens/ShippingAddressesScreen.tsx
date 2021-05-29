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
                        <ShippingAddressCard
                            elevation={1}
                            address="3 Newbridge Court, Chino Hills, CA 91709 United States"
                            name="Jack Jack"
                            is_checked_as_default={true}
                            onCheckBoxChange={(v) => {}}
                            onEditPress={() => {}}
                        />
                        <ShippingAddressCard
                            elevation={1}
                            address="3 Newbridge Court, Chino Hills, CA 91709 United States"
                            name="Jack Jack"
                            is_checked_as_default={false}
                            onCheckBoxChange={(v) => {}}
                            onEditPress={() => {}}
                        />
                    </Box>
            </ScrollView>
        </Layout>
    );
};

export default ShippingAddressesScreen;
