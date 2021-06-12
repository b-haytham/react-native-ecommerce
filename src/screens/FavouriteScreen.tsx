import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import Header from "../components/navigation/Header";
import Selectables from "../components/Selectables";
import {
    FavouriteScreenNavigationProps,
    FavouriteScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Box } from "../utils/restyle";
import { Theme } from "../utils/theme";

import Slider from "@react-native-community/slider";
import SelectableColors from "../components/SelectableColors";
import { AnimatePresence } from "framer-motion";
import { MotiView } from "@motify/components";
import FavouriteCard from "../components/cards/FavouriteCard";
import { addToBag } from "../redux/bag/bagSlice";
import { removeFromFavourite } from "../redux/favourite/favouriteSlice";
import Animated, {
    concat,
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { useAnimatedStyle } from "react-native-reanimated";
import { useDerivedValue } from "react-native-reanimated";
import { Image } from "react-native";

interface FavouriteScreenProps {
    navigation: FavouriteScreenNavigationProps;
    route: FavouriteScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");
const HEADER_HEIGHT = height * 0.12;

const AnimatedBox = Animated.createAnimatedComponent(Box);

const FavouriteScreen: React.FC<FavouriteScreenProps> = ({
    navigation,
    route,
}) => {
    const theme = useTheme<Theme>();
    const [display, setDisplay] = useState(false);

    const dispatch = useAppDispatch();
    const favourites = useAppSelector((state) => state.favourite.favourites);
    const products_in_bag = useAppSelector(
        (state) => state.bag.products_in_bag
    );

    useEffect(() => {
        setDisplay(true);
    }, []);

    return (
        <Layout bg={favourites.length > 0 ? "background" : "white"}>
            <Header
                height={HEADER_HEIGHT}
                elevation={2}
                title="Favourites"
                position="absolute"
                paddingHorizontal="m"
                top={0}
                left_icon={
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Profile_Main")}
                    >
                        <Ionicons
                            name="arrow-back"
                            size={30}
                            color={theme.colors.darkColor}
                        />
                    </TouchableOpacity>
                }
            />
            <BottomTab route_name={route.name} position="absolute" bottom={0} />
            {display ? (
                <ScrollView
                    style={{
                        flex: 1,
                        marginBottom: height * 0.1,
                        marginTop: HEADER_HEIGHT - theme.spacing.l,
                    }}
                >
                    <Box marginVertical="m">
                        <AnimatePresence>
                            {favourites && favourites.length > 0 ? (
                                favourites.map((f, i) => (
                                    <MotiView
                                        key={f.product.id}
                                        from={{
                                            opacity: 0,
                                            translateX: -width,
                                        }}
                                        animate={{ opacity: 1, translateX: 0 }}
                                        exit={{
                                            opacity: 0,
                                            translateX: -width,
                                        }}
                                        transition={{
                                            type: "timing",
                                            duration: 300,
                                            delay: i * 10,
                                        }}
                                        exitTransition={{
                                            type: "timing",
                                            duration: 300,
                                        }}
                                    >
                                        <FavouriteCard
                                            is_in_bag={products_in_bag.includes(
                                                f.product.id
                                            )}
                                            favouriteItem={f}
                                            onDeletePress={() =>
                                                dispatch(
                                                    removeFromFavourite(
                                                        f.product.id
                                                    )
                                                )
                                            }
                                            onImagePress={() =>
                                                navigation.navigate(
                                                    "Shop_Product_Detail",
                                                    { item: f.product }
                                                )
                                            }
                                            onAddToBagPress={() =>
                                                dispatch(
                                                    addToBag({
                                                        ...f,
                                                        quantity: 1,
                                                    })
                                                )
                                            }
                                        />
                                    </MotiView>
                                ))
                            ) : (
                                <MotiView
                                    from={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    delay={300}
                                >
                                    <Box
                                        flex={1}
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Image
                                            source={require("../../assets/empty.png")}
                                            resizeMode="contain"
                                            style={{
                                                width: width * 0.6,
                                                height: height * 0.6,
                                            }}
                                        />
                                    </Box>
                                </MotiView>
                            )}
                        </AnimatePresence>
                    </Box>
                </ScrollView>
            ) : (
                <Box flex={1} justifyContent="center" alignItems="center">
                    <ActivityIndicator
                        size={"large"}
                        color={theme.colors.primary}
                    />
                </Box>
            )}
        </Layout>
    );
};

export default FavouriteScreen;
