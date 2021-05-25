import React from "react";
import { Dimensions, ScrollView, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { SharedElement } from "react-navigation-shared-element";
import ProductCard from "../components/cards/ProductCard";
import Button from "../components/forms/form_elements/Button";
import HomeHero from "../components/HomeHero";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";

import {
    HomeScreenNavigationProps,
    HomeScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { PRODUCTS } from "../redux/data";
import { Product } from "../redux/data_types";
import { Box, Text } from "../utils/restyle";

interface HomeScreenProps {
    navigation: HomeScreenNavigationProps;
    route: HomeScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
    return (
        <Layout>
            <BottomTab
                elevation={5}
                position="absolute"
                bottom={0}
                zIndex={10}
                route_name={route.name}
            />

            <ScrollView style={{ flex: 1, marginBottom: height * 0.1 }}>
                <HomeHero
                    overflow="hidden"
                    borderBottomLeftRadius="m"
                    borderBottomRightRadius="m"
                    bg="gray"
                    width={width}
                    height={height * 0.6}
                    image={require("../../assets/hero-home.jpg")}
                    onPress={() => {}}
                />
                <Box marginVertical="m">
                    <Box>
                        <Box
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="space-between"
                            marginHorizontal="m"
                            mb="m"
                        >
                            <Text variant="headline2" color="primary">
                                Sales
                            </Text>
                            <TouchableOpacity>
                                <Text variant="description">View all</Text>
                            </TouchableOpacity>
                        </Box>
                        <Carousel
                            data={PRODUCTS}
                            keyExtractor={(item: Product) => item.id.toString()}
                            sliderWidth={width}
                            itemWidth={200}
                            activeAnimationType="spring"
                            numColumns={4}
                            initialScrollIndex={1}
                            renderItem={({ item }: { item: Product }) => (
                                <ProductCard
                                    width={200}
                                    product={item}
                                    onImagePress={() => {}}
                                    onAddToBagPress={() => {}}
                                />
                            )}
                        />
                    </Box>
                </Box>
                <Box marginVertical="m">
                    <Box>
                        <Box
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="space-between"
                            marginHorizontal="m"
                            mb="m"
                        >
                            <Text variant="headline2">New</Text>
                            <TouchableOpacity>
                                <Text variant="description">View all</Text>
                            </TouchableOpacity>
                        </Box>
                        <Carousel
                            data={PRODUCTS}
                            keyExtractor={(item: Product) => item.id.toString()}
                            sliderWidth={width}
                            itemWidth={200}
                            activeAnimationType="spring"
                            numColumns={4}
                            initialScrollIndex={1}
                            renderItem={({ item }: { item: Product }) => (
                                <ProductCard
                                    is_new
                                    width={200}
                                    product={item}
                                    onImagePress={() => {}}
                                    onAddToBagPress={() => {}}
                                />
                            )}
                        />
                    </Box>
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default HomeScreen;
