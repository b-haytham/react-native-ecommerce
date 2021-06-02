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
                    <TouchableOpacity onPress={() => navigation.navigate('Bag_Main')}>
                        <Entypo
                            name="shopping-bag"
                            size={25}
                            color={theme.colors.darkColor}
                        />
                    </TouchableOpacity>
                </Box>
                <Box p="m">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Shop_Search", {search_term: null})}
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
                        decelerationRate={0}
                        snapToInterval={width * .6 + theme.spacing.s * 2}
                    >
                        {EXPORLE_SETION.map((s) => (
                            <Box
                                key={s.id}
                                width={width * 0.6}
                                height={150}
                                marginHorizontal="s"
                            >
                                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Shop_Search', {search_term: s.title})}>
                                    <Image
                                        style={{
                                            width: width * 0.6,
                                            height: 150,
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
                <Box marginVertical="m">
                    <Text margin="m" variant="body2" opacity={0.8}>
                        POPULAR
                    </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={0}
                        snapToInterval={width * .6 + theme.spacing.s * 2}
                    >
                        {products.slice(0, 3).map((p) => (
                            <Box 
                                elevation={1}
                                key={p.id} 
                                width={width * 0.6} 
                                marginHorizontal="s" 
                                bg="white"
                                borderRadius="m"
                                overflow='hidden'
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
                                                    
                                                    overflow: "hidden",
                                                }}
                                                resizeMode="cover"
                                                source={{ uri: p.thumbnail! }}
                                            />
                                        </SharedElement>
                                    </TouchableOpacity>
                                
                                <Box p='m'>
                                    <Text variant="body2">{p.name}</Text>
                                </Box>
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
                        decelerationRate={0}
                        snapToInterval={width * .6 + theme.spacing.s * 2}
                    >
                        {products.slice(3, 7).map((p) => (
                            <Box 
                            elevation={1}
                            key={p.id} 
                            width={width * 0.6} 
                            marginHorizontal="s" 
                            bg="white"
                            borderRadius="m"
                            overflow='hidden'
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
                                                
                                                overflow: "hidden",
                                            }}
                                            resizeMode="cover"
                                            source={{ uri: p.thumbnail! }}
                                        />
                                    </SharedElement>
                                </TouchableOpacity>
                            
                            <Box p='m'>
                                <Text variant="body2">{p.name}</Text>
                            </Box>
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
                        decelerationRate={0}
                        snapToInterval={width * .6 + theme.spacing.s * 2}
                    >
                        {products.slice(8, 12).map((p) => (
                            <Box 
                            elevation={1}
                            key={p.id} 
                            width={width * 0.6} 
                            marginHorizontal="s" 
                            bg="white"
                            borderRadius="m"
                            overflow='hidden'
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
                                                
                                                overflow: "hidden",
                                            }}
                                            resizeMode="cover"
                                            source={{ uri: p.thumbnail! }}
                                        />
                                    </SharedElement>
                                </TouchableOpacity>
                            
                            <Box p='m'>
                                <Text variant="body2">{p.name}</Text>
                            </Box>
                        </Box>
                        ))}
                    </ScrollView>
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default HomeScreen;
