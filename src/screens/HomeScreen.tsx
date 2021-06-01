import { Entypo, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Dimensions,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { SharedElement } from "react-navigation-shared-element";
import ProductCard from "../components/cards/ProductCard";
import Button from "../components/forms/form_elements/Button";
import Input from "../components/forms/form_elements/Input";
import HomeHero from "../components/HomeHero";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";

import {
    HomeScreenNavigationProps,
    HomeScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { PRODUCTS } from "../redux/data";
import { Product } from "../redux/data_types";
import { useAppSelector } from "../redux/hooks";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface HomeScreenProps {
    navigation: HomeScreenNavigationProps;
    route: HomeScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
    const [display, setDisplay] = useState(false);
    const products = useAppSelector((state) => state.products.products);

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
                <Box p="m" flexDirection="row" justifyContent="space-between">
                    <Text variant="headline" color="darkColor" opacity={0.9}>
                        Home
                    </Text>
                    <TouchableOpacity>
                        <Entypo
                            name="shopping-bag"
                            size={25}
                            color={theme.colors.darkColor}
                        />
                    </TouchableOpacity>
                </Box>
                <Box p="m">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Shop_Search")}
                    >
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
                                color={theme.colors.darkColor}
                            />
                        </Box>
                    </TouchableOpacity>
                </Box>
                <Box>
                    <Text margin="m" variant="body2" opacity={0.8}>
                        EXPLORE
                    </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={"fast"}
                    >
                        <Box
                            width={width * 0.6}
                            height={150}
                            marginHorizontal="s"
                        >
                            <TouchableOpacity activeOpacity={0.6}>
                                <Image
                                    style={{
                                        width: width * 0.6,
                                        height: 150,
                                        borderRadius: 20,
                                        overflow: "hidden",
                                    }}
                                    resizeMode="cover"
                                    source={{
                                        uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-female-shoes-on-feet-royalty-free-image-912581410-1563805834.jpg?crop=0.66667xw:1xh;center,top&resize=768:*",
                                    }}
                                />
                                <Box position="absolute" bottom={10} left={10}>
                                    <Text variant="body2" color="white">
                                        Shoes
                                    </Text>
                                </Box>
                            </TouchableOpacity>
                        </Box>
                        <Box
                            width={width * 0.6}
                            height={150}
                            marginHorizontal="s"
                        >
                            <TouchableOpacity activeOpacity={0.6}>
                                <Image
                                    style={{
                                        width: width * 0.6,
                                        height: 150,
                                        borderRadius: 20,
                                        overflow: "hidden",
                                    }}
                                    resizeMode="cover"
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80",
                                    }}
                                />
                                <Box position="absolute" bottom={10} left={10}>
                                    <Text variant="body2" color="white">
                                        Jeans
                                    </Text>
                                </Box>
                            </TouchableOpacity>
                        </Box>
                        <Box
                            width={width * 0.6}
                            height={150}
                            marginHorizontal="s"
                        >
                            <TouchableOpacity activeOpacity={0.6}>
                                <Image
                                    style={{
                                        width: width * 0.6,
                                        height: 150,
                                        borderRadius: 20,
                                        overflow: "hidden",
                                    }}
                                    resizeMode="cover"
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                                    }}
                                />
                                <Box position="absolute" bottom={10} left={10}>
                                    <Text variant="body2" color="white">
                                        Shirts
                                    </Text>
                                </Box>
                            </TouchableOpacity>
                        </Box>
                        <Box
                            width={width * 0.6}
                            height={150}
                            marginHorizontal="s"
                        >
                            <TouchableOpacity activeOpacity={0.6}>
                                <Image
                                    style={{
                                        width: width * 0.6,
                                        height: 150,
                                        borderRadius: 20,
                                        overflow: "hidden",
                                    }}
                                    resizeMode="cover"
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1518520247810-9d56f8bc5556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                                    }}
                                />
                                <Box position="absolute" bottom={10} left={10}>
                                    <Text variant="body2" color="white">
                                        Watches
                                    </Text>
                                </Box>
                            </TouchableOpacity>
                        </Box>
                    </ScrollView>
                </Box>
                <Box marginVertical="m">
                    <Text margin="m" variant="body2" opacity={0.8}>
                        POPULAR
                    </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {products.slice(0, 3).map((p) => (
                            <Box
                                
                                key={p.id}
                                width={width * 0.6}
                                height={150}
                                marginHorizontal="s"
                            >
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={() =>
                                        navigation.navigate(
                                            "Shop_Product_Detail",
                                            { item: p }
                                        )
                                    }
                                >
                                    <SharedElement id={`image-${p.id}`}>
                                        <Image
                                            style={{
                                                width: width * 0.6,
                                                height: 150,
                                                borderRadius: 20,
                                                overflow: "hidden",
                                            }}
                                            resizeMode="cover"
                                            source={{ uri: p.thumbnail! }}
                                        />
                                    </SharedElement>
                                    <Box
                                        position="absolute"
                                        bottom={10}
                                        left={10}
                                    >
                                        <Text variant="body2" color="white">
                                            {p.name}
                                        </Text>
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        ))}
                    </ScrollView>
                </Box>
                <Box marginVertical="m">
                    <Text margin="m" variant="body2" opacity={0.8}>
                        NEW
                    </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {products.slice(3, 7).map((p) => (
                            <Box
                                key={p.id}
                                width={width * 0.6}
                                height={150}
                                marginHorizontal="s"
                            >
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={() =>
                                        navigation.navigate(
                                            "Shop_Product_Detail",
                                            { item: p }
                                        )
                                    }
                                >
                                    <SharedElement id={`image-${p.id}`}>
                                        <Image
                                            style={{
                                                width: width * 0.6,
                                                height: 150,
                                                borderRadius: 20,
                                                overflow: "hidden",
                                            }}
                                            resizeMode="cover"
                                            source={{ uri: p.thumbnail! }}
                                        />
                                    </SharedElement>

                                    <Box
                                        position="absolute"
                                        bottom={10}
                                        left={10}
                                    >
                                        <Text variant="body2" color="white">
                                            {p.name}
                                        </Text>
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        ))}
                    </ScrollView>
                </Box>
                <Box marginVertical="m">
                    <Text margin="m" variant="body2" opacity={0.8}>
                        RECEMENDED
                    </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {products.slice(8, 12).map((p) => (
                            <Box
                                key={p.id}
                                width={width * 0.6}
                                height={150}
                                marginHorizontal="s"
                            >
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={() =>
                                        navigation.navigate(
                                            "Shop_Product_Detail",
                                            { item: p }
                                        )
                                    }
                                >
                                    <SharedElement id={`image-${p.id}`}>
                                        <Image
                                            style={{
                                                width: width * 0.6,
                                                height: 150,
                                                borderRadius: 20,
                                                overflow: "hidden",
                                            }}
                                            resizeMode="cover"
                                            source={{ uri: p.thumbnail! }}
                                        />
                                    </SharedElement>

                                    <Box
                                        position="absolute"
                                        bottom={10}
                                        left={10}
                                    >
                                        <Text variant="body2" color="white">
                                            {p.name}
                                        </Text>
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        ))}
                    </ScrollView>
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default HomeScreen;
