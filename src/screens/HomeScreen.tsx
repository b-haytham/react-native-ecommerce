import React from "react";
import { Dimensions, ScrollView  } from "react-native";
import Button from "../components/forms/form_elements/Button";
import HomeHero from "../components/HomeHero";
import Layout from "../components/Layout";

import {
    HomeScreenNavigationProps,
    HomeScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";

interface HomeScreenProps {
    navigation: HomeScreenNavigationProps;
    route: HomeScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <Layout>
            <ScrollView style={{ flex: 1 }}>
                <HomeHero
                    overflow='hidden'
                    borderBottomLeftRadius='m'
                    borderBottomRightRadius='m'
                    bg="gray"
                    width={width}
                    height={height * 0.6}
                    image={require("../../assets/hero-home.jpg")}
                    onPress={() => {}}
                />
            </ScrollView>
        </Layout>
    );
};

export default HomeScreen;
