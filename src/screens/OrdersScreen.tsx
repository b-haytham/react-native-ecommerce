import { Entypo, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import OrderCard from "../components/cards/OrderCard";
import Chip from "../components/Chip";

import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import Header from "../components/navigation/Header";
import {
    OrdersScreenNavigationProps,
    OrdersScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { OrderStatus } from "../redux/data_types";
import { Box } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface OrdersScreenProps {
    navigation: OrdersScreenNavigationProps;
    route: OrdersScreenRouteProps;
}

const { width, height } = Dimensions.get('screen')

const HEADER_HEIGHT = height * .15

const OrdersScreen: React.FC<OrdersScreenProps> = ({ route, navigation }) => {
    const theme = useTheme<Theme>()
    return (
        <Layout>
            <Header
                height={HEADER_HEIGHT}
                elevation={2}
                title="Orders"
                position="absolute"
                top={0}
                left_icon={
                    <TouchableOpacity onPress={() => navigation.navigate('Profile_Main')}>
                        <Ionicons name="arrow-back" size={30} color={theme.colors.darkColor} />
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
                <ScrollView horizontal>
                    <Chip margin='m' bg='darkColor' name='Processed' onPress={() => {}} />
                    <Chip margin='m' bg='darkColor' name='Delivered' onPress={() => {}} />
                    <Chip margin='m' bg='darkColor' name='cancelled' onPress={() => {}} />
                </ScrollView>
                <OrderCard
                    date='2021-04-16'
                    number_items={3}
                    onDetailPress={() => {}}
                    status={OrderStatus.SUCCESS}
                    total_amount={210}
                    tracking_number='IW5481321694'
                    elevation={1}
                    margin='m'
                />
                <OrderCard
                    date='2021-04-16'
                    number_items={3}
                    onDetailPress={() => {}}
                    status={OrderStatus.SUCCESS}
                    total_amount={210}
                    tracking_number='IW5481321694'
                    elevation={1}
                    margin='m'
                />
                <OrderCard
                    date='2021-04-16'
                    number_items={3}
                    onDetailPress={() => {}}
                    status={OrderStatus.SUCCESS}
                    total_amount={210}
                    tracking_number='IW5481321694'
                    elevation={1}
                    margin='m'
                />
                <OrderCard
                    date='2021-04-16'
                    number_items={3}
                    onDetailPress={() => {}}
                    status={OrderStatus.SUCCESS}
                    total_amount={210}
                    tracking_number='IW5481321694'
                    elevation={1}
                    margin='m'
                />
                
            </ScrollView>
        </Layout>
    );
};

export default OrdersScreen;
