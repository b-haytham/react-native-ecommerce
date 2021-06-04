import { Entypo, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";
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

const { width, height } = Dimensions.get("screen");

const HEADER_HEIGHT = height * 0.15;

const AnimatedBox = Animated.createAnimatedComponent(Box);

const OrdersScreen: React.FC<OrdersScreenProps> = ({ route, navigation }) => {
    const theme = useTheme<Theme>();
    const [selectedStatus, setSelectedStatus] =
        useState<"Processed" | "Delivered" | "Cancelled">("Processed");

    const translateX = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: withTiming(translateX.value) }],
    }));

    return (
        <Layout>
            <Header
                height={HEADER_HEIGHT}
                elevation={2}
                title="Orders"
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
                    <Chip
                        textProps={{
                            color:
                                selectedStatus === "Processed"
                                    ? "darkColor"
                                    : "white",
                        }}
                        margin="m"
                        bg={
                            selectedStatus === "Processed"
                                ? "white"
                                : "darkColor"
                        }
                        name="Processed"
                        borderWidth={selectedStatus === "Processed" ? 1 : 0}
                        onPress={() => {
                            setSelectedStatus("Processed");
                            translateX.value = 0;
                        }}
                    />
                    <Chip
                        textProps={{
                            color:
                                selectedStatus === "Delivered"
                                    ? "darkColor"
                                    : "white",
                        }}
                        margin="m"
                        bg={
                            selectedStatus === "Delivered"
                                ? "white"
                                : "darkColor"
                        }
                        borderWidth={selectedStatus === "Delivered" ? 1 : 0}
                        name="Delivered"
                        onPress={() => {
                            setSelectedStatus("Delivered");
                            translateX.value = -width;
                        }}
                    />
                    <Chip
                        textProps={{
                            color:
                                selectedStatus === "Cancelled"
                                    ? "darkColor"
                                    : "white",
                        }}
                        margin="m"
                        bg={
                            selectedStatus === "Cancelled"
                                ? "white"
                                : "darkColor"
                        }
                        borderWidth={selectedStatus === "Cancelled" ? 1 : 0}
                        name="cancelled"
                        onPress={() => {
                            setSelectedStatus("Cancelled");
                            translateX.value = 2 * -width;
                        }}
                    />
                </ScrollView>
                <AnimatedBox
                    flex={1}
                    width={width * 3}
                    flexDirection="row"
                    style={animatedStyles}
                >
                    <Box width={width}>
                        <ScrollView style={{}}>
                            <OrderCard
                                marginHorizontal="s"
                                date="2021-04-16"
                                number_items={3}
                                onDetailPress={() => {}}
                                status={OrderStatus.PENDING}
                                total_amount={210}
                                tracking_number="IW5481321694"
                                elevation={1}
                            />
                            <OrderCard
                                marginHorizontal="s"
                                date="2021-04-16"
                                number_items={3}
                                onDetailPress={() => {}}
                                status={OrderStatus.PENDING}
                                total_amount={210}
                                tracking_number="IW5481321694"
                                elevation={1}
                            />
                            <OrderCard
                                marginHorizontal="s"
                                date="2021-04-16"
                                number_items={3}
                                onDetailPress={() => {}}
                                status={OrderStatus.PENDING}
                                total_amount={210}
                                tracking_number="IW5481321694"
                                elevation={1}
                            />
                        </ScrollView>
                    </Box>
                    <Box width={width}>
                        <ScrollView style={{}}>
                            <OrderCard
                                marginHorizontal="s"
                                date="2021-04-16"
                                number_items={3}
                                onDetailPress={() => {}}
                                status={OrderStatus.SUCCESS}
                                total_amount={210}
                                tracking_number="IW5481321694"
                                elevation={1}
                            />
                            <OrderCard
                                marginHorizontal="s"
                                date="2021-04-16"
                                number_items={3}
                                onDetailPress={() => {}}
                                status={OrderStatus.SUCCESS}
                                total_amount={210}
                                tracking_number="IW5481321694"
                                elevation={1}
                            />
                            <OrderCard
                                marginHorizontal="s"
                                date="2021-04-16"
                                number_items={3}
                                onDetailPress={() => {}}
                                status={OrderStatus.SUCCESS}
                                total_amount={210}
                                tracking_number="IW5481321694"
                                elevation={1}
                            />
                        </ScrollView>
                    </Box>
                    <Box width={width}>
                        <ScrollView style={{}}>
                            <OrderCard
                                marginHorizontal="s"
                                date="2021-04-16"
                                number_items={3}
                                onDetailPress={() => {}}
                                status={OrderStatus.CANCELLED}
                                total_amount={210}
                                tracking_number="IW5481321694"
                                elevation={1}
                            />
                             <OrderCard
                                marginHorizontal="s"
                                date="2021-04-16"
                                number_items={3}
                                onDetailPress={() => {}}
                                status={OrderStatus.CANCELLED}
                                total_amount={210}
                                tracking_number="IW5481321694"
                                elevation={1}
                            />
                             <OrderCard
                                marginHorizontal="s"
                                date="2021-04-16"
                                number_items={3}
                                onDetailPress={() => {}}
                                status={OrderStatus.CANCELLED}
                                total_amount={210}
                                tracking_number="IW5481321694"
                                elevation={1}
                            />
                        </ScrollView>
                    </Box>
                </AnimatedBox>
                {/* <OrderCard
                    date="2021-04-16"
                    number_items={3}
                    onDetailPress={() => {}}
                    status={OrderStatus.SUCCESS}
                    total_amount={210}
                    tracking_number="IW5481321694"
                    elevation={1}
                    margin="m"
                />
                <OrderCard
                    date="2021-04-16"
                    number_items={3}
                    onDetailPress={() => {}}
                    status={OrderStatus.SUCCESS}
                    total_amount={210}
                    tracking_number="IW5481321694"
                    elevation={1}
                    margin="m"
                />
                <OrderCard
                    date="2021-04-16"
                    number_items={3}
                    onDetailPress={() => {}}
                    status={OrderStatus.SUCCESS}
                    total_amount={210}
                    tracking_number="IW5481321694"
                    elevation={1}
                    margin="m"
                />
                <OrderCard
                    date="2021-04-16"
                    number_items={3}
                    onDetailPress={() => {}}
                    status={OrderStatus.SUCCESS}
                    total_amount={210}
                    tracking_number="IW5481321694"
                    elevation={1}
                    margin="m"
                /> */}
            </ScrollView>
        </Layout>
    );
};

export default OrdersScreen;
