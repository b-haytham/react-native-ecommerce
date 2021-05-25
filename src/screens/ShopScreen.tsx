import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity } from "react-native";
import CategoryCard from "../components/cards/CategoryCard";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import Header from "../components/navigation/Header";
import {
    ShopScreenRouteProps,
    ShopScreenScreenNavigationProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface ShopScreenProps {
    navigation: ShopScreenScreenNavigationProps;
    route: ShopScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const ShopScreen: React.FC<ShopScreenProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();
    const [headerHeight, setHeaderHeight] = useState(0);
    return (
        <Layout>
            <Header
                onLayout={({
                    nativeEvent: {
                        layout: { width, height },
                    },
                }) => setHeaderHeight(height)}
                elevation={2}
                title="Categories"
                position="absolute"
                top={0}
                right_icon={
                    <TouchableOpacity>
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
                    marginTop: headerHeight - theme.spacing.l,
                }}
            >
                <Box
                    justifyContent="center"
                    alignItems="center"
                    marginVertical="s"
                >
                    <CategoryCard
                        width={width - theme.spacing.m * 2}
                        image={require("../../assets/men.jpg")}
                        title="Men"
                        height={200}
                        icon={
                            <TouchableOpacity>
                                <Ionicons
                                    name="ios-arrow-forward"
                                    size={30}
                                    color={theme.colors.white}
                                />
                            </TouchableOpacity>
                        }
                    />
                </Box>
                <Box
                    justifyContent="center"
                    alignItems="center"
                    marginVertical="s"
                >
                    <CategoryCard
                        width={width - theme.spacing.m * 2}
                        image={require("../../assets/women.jpg")}
                        title="Women"
                        height={200}
                        icon={
                            <TouchableOpacity>
                                <Ionicons
                                    name="ios-arrow-forward"
                                    size={30}
                                    color={theme.colors.white}
                                />
                            </TouchableOpacity>
                        }
                    />
                </Box>
                <Box
                    justifyContent="center"
                    alignItems="center"
                    marginVertical="s"
                >
                    <CategoryCard
                        width={width - theme.spacing.m * 2}
                        image={require("../../assets/kids.jpg")}
                        title="Kids"
                        height={200}
                        icon={
                            <TouchableOpacity>
                                <Ionicons
                                    name="ios-arrow-forward"
                                    size={30}
                                    color={theme.colors.white}
                                />
                            </TouchableOpacity>
                        }
                    />
                </Box>
                <Box
                    justifyContent="center"
                    alignItems="center"
                    marginVertical="s"
                >
                    <CategoryCard
                        width={width - theme.spacing.m * 2}
                        image={require("../../assets/jewelry.jpg")}
                        title="Accessories"
                        height={200}
                        icon={
                            <TouchableOpacity>
                                <Ionicons
                                    name="ios-arrow-forward"
                                    size={30}
                                    color={theme.colors.white}
                                />
                            </TouchableOpacity>
                        }
                    />
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default ShopScreen;
