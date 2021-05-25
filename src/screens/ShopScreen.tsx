import React from "react";
import {} from "react-native";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import {
    ShopScreenRouteProps,
    ShopScreenScreenNavigationProps,
} from "../navigation/ScreensNavigationRouteProps";

interface ShopScreenProps {
    navigation: ShopScreenScreenNavigationProps;
    route: ShopScreenRouteProps;
}

const ShopScreen: React.FC<ShopScreenProps> = ({ navigation, route }) => {
    return (
        <Layout>
            <BottomTab route_name={route.name} position="absolute" bottom={0} />
        </Layout>
    );
};

export default ShopScreen;
