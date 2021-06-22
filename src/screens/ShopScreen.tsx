import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import CategoryCard from "../components/cards/CategoryCard";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import Header from "../components/navigation/Header";
import {
    ShopScreenRouteProps,
    ShopScreenScreenNavigationProps,
} from "../navigation/ScreensNavigationRouteProps";
import { CATEGORIES } from "../redux/data";
import { Box } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface ShopScreenProps {
    navigation: ShopScreenScreenNavigationProps;
    route: ShopScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");
const HEADER_HEIGHT = height * .12

const ShopScreen: React.FC<ShopScreenProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();

    return (
        <Layout>
            <Header
                height={HEADER_HEIGHT}
                elevation={2}
                title="Categories"
                paddingHorizontal='m'
                position="absolute"
                top={0}
                right_icon={
                    <TouchableOpacity onPress={() => navigation.navigate('Shop_Search', {search_term: null})}>
                        <MaterialIcons
                            name="search"
                            size={30}
                            color={theme.colors.black}
                        />
                    </TouchableOpacity>
                }
            />
            <BottomTab
                elevation={2}
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
                {CATEGORIES.map((c) => (
                    <Box
                        key={c.id}
                        justifyContent="center"
                        alignItems="center"
                        marginVertical="s"
                    >
                        <CategoryCard
                            width={width - theme.spacing.m * 2}
                            image={{uri: c.image}}
                            title={c.display_name}
                            height={200}
                            icon={
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("Shop_Category", {
                                            category: c,
                                        })
                                    }
                                >
                                    <Ionicons
                                        name="ios-arrow-forward"
                                        size={30}
                                        color={theme.colors.white}
                                    />
                                </TouchableOpacity>
                            }
                        />
                    </Box>
                ))}
            </ScrollView>
        </Layout>
    );
};



export default ShopScreen;
