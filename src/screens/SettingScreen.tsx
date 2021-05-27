import React from "react";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import {
    SettingsScreenNavigationProps,
    SettingsScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";

interface SettingScreenProps {
    navigation: SettingsScreenNavigationProps;
    route: SettingsScreenRouteProps;
}

const SettingScreen: React.FC<SettingScreenProps> = ({ route, navigation }) => {
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

export default SettingScreen;
