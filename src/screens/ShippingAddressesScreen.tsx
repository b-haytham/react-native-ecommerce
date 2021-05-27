import React from "react";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import {
    ShippingAddressesScreenNavigationProps,
    ShippingAdressesScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";

interface ShippingAddressesScreenProps {
    navigation: ShippingAddressesScreenNavigationProps;
    route: ShippingAdressesScreenRouteProps;
}

const ShippingAddressesScreen: React.FC<ShippingAddressesScreenProps> = ({
    route,
    navigation,
}) => {
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

export default ShippingAddressesScreen;
