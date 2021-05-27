import React from "react";

import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import {
    OrdersScreenNavigationProps,
    OrdersScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";

interface OrdersScreenProps {
    navigation: OrdersScreenNavigationProps;
    route: OrdersScreenRouteProps;
}

const OrdersScreen: React.FC<OrdersScreenProps> = ({ route, navigation }) => {
    return (
        <Layout>
            <BottomTab
                elevation={5}
                route_name={route.name}
                position="absolute"
                bottom={0}
            />
        </Layout>
    );
};

export default OrdersScreen;
