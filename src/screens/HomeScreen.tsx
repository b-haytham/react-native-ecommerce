import { Entypo, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, TouchableOpacity } from "react-native";

import { SharedElement } from "react-navigation-shared-element";
import AnimatedScrollView from "../components/AnimatedScrollView";
import HomeProductCard from "../components/cards/HomeProductCard";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import TowColumnScrollView from "../components/TowColumnScrollView";

import {
    HomeScreenNavigationProps,
    HomeScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { EXPORLE_SETION, PRODUCTS } from "../redux/data";
import { Product } from "../redux/data_types";
import { useAppSelector } from "../redux/hooks";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface HomeScreenProps {
    navigation: HomeScreenNavigationProps;
    route: HomeScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const PRODUCT_WIDTH = width * 0.5;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
    const [display, setDisplay] = useState(false);
    const products = useAppSelector((state) => state.products.products);
    const product_in_favourite = useAppSelector(state => state.favourite.products_in_favourite)
    const products_in_bag = useAppSelector(state => state.bag.products_in_bag)

    useEffect(() => {
        setDisplay(true);
    }, []);
    const theme = useTheme<Theme>();
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
                <Box
                    p="m"
                    margin="m"
                    bg="primary"
                    borderRadius="m"
                    elevation={10}
                >
                    <Box
                        marginBottom="m"
                        flexDirection="row"
                        justifyContent="space-between"
                    >
                        <Box>
                            <Text variant="headline" color="white">
                                Welcome !
                            </Text>
                            <Text variant="body" color="white">
                                Start typing!
                            </Text>
                        </Box>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Bag_Main")}
                        >
                            <Box
                                width={40}
                                height={40}
                                style={{ borderRadius: 15 }}
                                bg="primaryLighter"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Entypo
                                    name="shopping-bag"
                                    size={20}
                                    color={theme.colors.white}
                                />
                            </Box>
                        </TouchableOpacity>
                    </Box>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Shop_Search", {
                                search_term: null,
                            })
                        }
                    >
                        <SharedElement id="search-input">
                            <Box
                                bg="white"
                                borderRadius="s"
                                paddingHorizontal="m"
                                paddingVertical="s"
                                flexDirection="row"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Text variant="description" opacity={0.5}>
                                    Search
                                </Text>
                                <Ionicons
                                    name="search"
                                    size={25}
                                    color={theme.colors.primary}
                                />
                            </Box>
                        </SharedElement>
                    </TouchableOpacity>
                </Box>
                <Box>
                    <Text margin="m" variant="body2" opacity={0.9}>
                        EXPLORE
                    </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={"fast"}
                        snapToInterval={width * 0.6 + theme.spacing.m * 2}
                    >
                        {EXPORLE_SETION.map((s) => (
                            <Box
                                key={s.id}
                                width={width * 0.6}
                                height={100}
                                marginHorizontal="m"
                                elevation={10}
                            >
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={() =>
                                        navigation.navigate("Shop_Search", {
                                            search_term: s.title,
                                        })
                                    }
                                >
                                    <Image
                                        style={{
                                            width: width * 0.6,
                                            height: 100,
                                            borderRadius: 20,
                                            overflow: "hidden",
                                        }}
                                        resizeMode="cover"
                                        source={{
                                            uri: s.image_uri,
                                        }}
                                    />
                                    <Box
                                        position="absolute"
                                        bottom={10}
                                        left={10}
                                    >
                                        <Text variant="body2" color="white">
                                            {s.title}
                                        </Text>
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        ))}
                    </ScrollView>
                </Box>
                <Box>
                    <Text margin="m" variant="body2" opacity={0.9}>
                        POPULAR
                    </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={"fast"}
                        snapToInterval={PRODUCT_WIDTH + theme.spacing.m * 2}
                    >
                        {products.slice(0, 3).map((p) => (
                            <HomeProductCard
                                key={p.id}
                                product={p}
                                product_width={PRODUCT_WIDTH}
                                in_favourite={product_in_favourite.includes(p.id)}
                                in_bag={products_in_bag.includes(p.id)}
                                product_height={200}
                                onImagePress={() =>
                                    navigation.navigate("Shop_Product_Detail", {
                                        item: p,
                                    })
                                }
                                onAddToFavouritePress={() => {}}
                            />
                        ))}
                    </ScrollView>
                </Box>
                <Box>
                    <Text margin="m" variant="body2" opacity={0.9}>
                        NEW
                    </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={"fast"}
                        snapToInterval={PRODUCT_WIDTH + theme.spacing.m * 2}
                    >
                        {products.slice(3, 7).map((p) => (
                            <HomeProductCard
                                key={p.id}
                                product={p}
                                product_width={PRODUCT_WIDTH}
                                in_favourite={product_in_favourite.includes(p.id)}
                                in_bag={products_in_bag.includes(p.id)}
                                onImagePress={() =>
                                    navigation.navigate("Shop_Product_Detail", {
                                        item: p,
                                    })
                                }
                                onAddToFavouritePress={() => {}}
                            />
                        ))}
                    </ScrollView>
                </Box>
                <Box>
                    <Text margin="m" variant="body2" opacity={0.9}>
                        RECEMENDED
                    </Text>
                    <TowColumnScrollView
                        marginBottom="l"
                        width={width}
                        products={products.slice(12, 16)}
                        products_in_bag={products_in_bag}
                        products_in_favourite={product_in_favourite}
                    />
                </Box>
                <Box>
                    <Text margin="m" variant="body2" opacity={0.9}>
                        RECEMENDED
                    </Text>
                    <AnimatedScrollView
                        navigation={navigation}
                        data={products.slice(8, 12)}
                        itemWidth={width / 2}
                        products_in_bag={products_in_bag}
                        products_in_favourite={product_in_favourite}
                    />
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default HomeScreen;
