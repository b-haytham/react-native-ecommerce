import { Entypo, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import BagCard from "../components/cards/BagCard";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import Header from "../components/navigation/Header";
import {
    BagScreenNavigationProps,
    BagScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { removeFromBag } from "../redux/bag/bagSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Theme } from "../utils/theme";

import { AnimatePresence, MotiView } from "moti";
import { Box, Text } from "../utils/restyle";
import Button from "../components/forms/form_elements/Button";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import CheckoutView from "../components/CheckoutView";
import { Image } from "react-native";

interface BagScreenProps {
    navigation: BagScreenNavigationProps;
    route: BagScreenRouteProps;
}
const { width, height } = Dimensions.get("screen");
const HEADER_HEIGHT = height * 0.12;

const AnimatedBox = Animated.createAnimatedComponent(Box);

const BagScreen: React.FC<BagScreenProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();
    const [display, setDisplay] = useState(false);

    const dispatch = useAppDispatch();
    const bagItems = useAppSelector((state) => state.bag.bagItems);
    const total = useAppSelector((state) => state.bag.total);

    const headerTranslateY = useSharedValue(0);
    const checkoutTranslateY = useSharedValue(height);

    const headerStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: withSpring(headerTranslateY.value, {mass: 0.5}) }],
    }));

    useEffect(() => {
        setDisplay(true);
    }, []);

    return (
        <Layout bg={bagItems!.length > 0 ? 'background' : 'white'}>
            {display && (
                <CheckoutView
                    navigation={navigation}
                    bagItems={bagItems!}
                    total={total}
                    headerHeight={HEADER_HEIGHT}
                    headerTranslateY={headerTranslateY}
                    zIndex={999999}
                    position="absolute"
                    width={width}
                    height={height}
                    translateY={checkoutTranslateY}
                />
            )}

            <AnimatedBox
                width={width}
                height={HEADER_HEIGHT}
                position="absolute"
                top={0}
                elevation={2}
                style={headerStyles}
            >
                <Header
                    height={HEADER_HEIGHT}
                    elevation={2}
                    title="Bag"
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
            </AnimatedBox>
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
                            {bagItems && bagItems.length > 0 ? (
                                bagItems.map((b, i) => {
                                    return (
                                        <MotiView
                                            key={b.product.id}
                                            from={{
                                                opacity: 0,
                                                translateX: -width,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                translateX: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                translateX: -width,
                                            }}
                                            transition={{
                                                type: "timing",
                                                duration: 300,
                                            }}
                                            exitTransition={{
                                                type: "timing",
                                                duration: 300,
                                            }}
                                        >
                                            <BagCard
                                                bagItem={b}
                                                onImagePress={() =>
                                                    navigation.navigate(
                                                        "Shop_Product_Detail",
                                                        {
                                                            item: b.product,
                                                        }
                                                    )
                                                }
                                                onDeletePress={() => {
                                                    dispatch(
                                                        removeFromBag(
                                                            b.product.id
                                                        )
                                                    );
                                                }}
                                            />
                                        </MotiView>
                                    );
                                })
                            ) : (
                                <MotiView
                                from={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
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
                    {bagItems && bagItems.length > 0 && (
                        <Box>
                            <Box
                                p="m"
                                bg="white"
                                flexDirection="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Text variant="body2">Total</Text>
                                <Text variant="body2">{`${total} DT`}</Text>
                            </Box>
                            <Box marginHorizontal="m">
                                <Button
                                    title="CHECKOUT"
                                    onPress={() => {
                                        headerTranslateY.value = -HEADER_HEIGHT;
                                        checkoutTranslateY.value = 0;
                                    }}
                                    variant="PRIMARY"
                                />
                            </Box>
                        </Box>
                    )}
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

export default BagScreen;
