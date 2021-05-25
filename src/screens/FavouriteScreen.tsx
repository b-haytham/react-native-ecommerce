import React from "react";
import {} from "react-native";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import {
    FavouriteScreenNavigationProps,
    FavouriteScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";

interface FavouriteScreenProps {
    navigation: FavouriteScreenNavigationProps;
    route: FavouriteScreenRouteProps;
}

const FavouriteScreen: React.FC<FavouriteScreenProps> = ({navigation, route}) => {
    return (
        <Layout>
            <BottomTab
                route_name={route.name}
                position="absolute"
                bottom={0}
            />
        </Layout>
    );
};

export default FavouriteScreen;
