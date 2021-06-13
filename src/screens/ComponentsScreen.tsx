import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";

import Layout from "../components/Layout";

import { useTheme } from "@shopify/restyle";
import { Theme } from "../utils/theme";

import { ComponentsScreenNavigationProps, ComponentsScreenRouteProps } from "../navigation/ScreensNavigationRouteProps";

interface ComponentsScreenProps {
    navigation: ComponentsScreenNavigationProps
    route: ComponentsScreenRouteProps
}

const { width, height } = Dimensions.get("screen");

const ComponentsScreen: React.FC<ComponentsScreenProps> = ({navigation, route}) => {
    const theme = useTheme<Theme>();
    return <Layout>
        <ScrollView style={{flex: 1}}>
            
        </ScrollView>
    </Layout>;
};

const DATA = [
    {
        
    }
]


export default ComponentsScreen;
