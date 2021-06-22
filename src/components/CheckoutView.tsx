import React from "react";
import { Dimensions, Image } from "react-native";

import { BoxProps } from "@shopify/restyle";
import { Theme } from "../utils/theme";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring,
} from "react-native-reanimated";
import { Box, Text } from "../utils/restyle";
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    ScrollView,
    TouchableOpacity,
} from "react-native-gesture-handler";

import Constants from "expo-constants";
import { snapPoint } from "react-native-redash";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import ShippingAddressCard from "./cards/ShippingAddressCard";
import Button from "./forms/form_elements/Button";
import { BagItem, emptyBag } from "../redux/bag/bagSlice";
import { BagScreenNavigationProps } from "../navigation/ScreensNavigationRouteProps";
import { SharedElement } from "react-navigation-shared-element";
import { addOrder } from "../redux/orders/orderSlice";
import { OrderStatus } from "../redux/data_types";

interface CheckoutViewProps extends BoxProps<Theme> {
    translateY: Animated.SharedValue<number>;
    headerTranslateY: Animated.SharedValue<number>;
    width: number;
    height: number;
    headerHeight: number;
    total: number;
    bagItems: BagItem[];
    navigation: BagScreenNavigationProps;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

// const { width, height } = Dimensions.get('screen')

const CheckoutView: React.FC<CheckoutViewProps> = ({
    translateY,
    headerTranslateY,
    headerHeight,
    width,
    height,
    total,
    bagItems,
    navigation,
    ...rest
}) => {
    const dispatch = useAppDispatch()

    const defaultshippingAddress = useAppSelector(
        (state) => state.user.current_user?.shipping_addresses
    )?.find((add) => add.is_default);

    const styles = useAnimatedStyle(() => ({
        transform: [{ translateY: withSpring(translateY.value) }],
    }));

    const gestureHandler = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        { startY: number }
    >({
        onStart: (_, ctx) => {
            ctx.startY = translateY.value;
        },
        onActive: (event, ctx) => {
            translateY.value = ctx.startY + event.translationY;
            headerTranslateY.value = interpolate(
                translateY.value,
                [0, headerHeight],
                [-headerHeight, 0],
                Extrapolate.CLAMP
            );
        },
        onEnd: (e) => {
            translateY.value = snapPoint(translateY.value, e.velocityY, [
                0,
                height,
            ]);
            headerTranslateY.value = interpolate(
                translateY.value,
                [headerHeight, 0],
                [0, -headerHeight],
                Extrapolate.CLAMP
            );
        },
    });

    return (
        <AnimatedBox
            position="absolute"
            zIndex={9999999999999}
            bg="white"
            width={width}
            height={height}
            style={[styles]}
            {...rest}
        >
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <AnimatedBox
                    bg="gray"
                    width={100}
                    height={10}
                    borderRadius="m"
                    position="absolute"
                    top={Constants.statusBarHeight + 10}
                    left={width / 2 - 50}
                />
            </PanGestureHandler>
            <ScrollView
                style={{ flex: 1, marginTop: Constants.statusBarHeight + 30, marginBottom: Constants.statusBarHeight }}
            >
                <Box marginVertical="m">
                    <Text paddingHorizontal="m" variant="body2" opacity={0.5}>
                        Shipping Address
                    </Text>
                    {defaultshippingAddress && (
                        <ShippingAddressCard
                            elevation={1}
                            marginHorizontal="m"
                            onCheckBoxChange={() => {}}
                            in_checkout
                            address={defaultshippingAddress}
                            onEditPress={() => {}}
                        />
                    )}
                </Box>
                <Box marginVertical="m">
                    <Text paddingHorizontal="m" variant="body2" opacity={0.5}>
                        Items
                    </Text>
                    <Box marginVertical="m">
                        {bagItems.map((b) => (
                            <Box
                                key={b.product.id}
                                marginHorizontal="m"
                                borderRadius="m"
                                overflow="hidden"
                                flexDirection="row"
                                marginVertical="s"
                            >
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate(
                                            "Shop_Product_Detail",
                                            { item: b.product }
                                        )
                                    }
                                >
                                    <SharedElement id={`image-${b.product.id}`}>
                                        <Image
                                            style={{ width: 80, height: 80 }}
                                            resizeMode="cover"
                                            source={{
                                                uri: b.product.thumbnail!,
                                            }}
                                        />
                                    </SharedElement>
                                </TouchableOpacity>
                                <Box paddingHorizontal="m" width={width * 0.7}>
                                    <Text marginBottom='s' variant="body2">
                                        {b.product.display_name}
                                    </Text>
                                    <Box
                                        flexDirection='row'
                                        alignItems='center'
                                        justifyContent='space-between'
                                    >
                                        <Box
                                            flexDirection='row'
                                            alignItems='center'
                                        >
                                            <Text opacity={.5}>{`Color: `}</Text>
                                            <Text>{b.color}</Text>
                                        </Box>
                                        <Box
                                            flexDirection='row'
                                            alignItems='center'
                                        >
                                            <Text opacity={.5}>{`Size: `}</Text>
                                            <Text>{b.size}</Text>
                                        </Box>
                                        <Box
                                            flexDirection='row'
                                            alignItems='center'
                                        >
                                            <Text opacity={.5}>{`Qty: `}</Text>
                                            <Text>{b.quantity}</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box marginVertical="m" bg="white">
                    <Text
                        marginBottom="m"
                        paddingHorizontal="m"
                        variant="body2"
                        opacity={0.5}
                    >
                        Order Info
                    </Text>
                    <Box marginHorizontal="m" elevation={2}>
                        <Box
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="space-between"
                            paddingHorizontal="m"
                        >
                            <Text variant="body" opacity={0.7}>
                                Order
                            </Text>
                            <Text variant="body">{`${total} DT`}</Text>
                        </Box>
                        <Box
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="space-between"
                            paddingHorizontal="m"
                        >
                            <Text variant="body" opacity={0.7}>
                                Shipping fee
                            </Text>
                            <Text variant="body">{`${7} DT`}</Text>
                        </Box>
                        <Box
                            marginTop="s"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="space-between"
                            paddingHorizontal="m"
                        >
                            <Text variant="body" opacity={0.7}>
                                Summary
                            </Text>
                            <Text variant="body">{`${+(7 + total).toFixed(2)} DT`}</Text>
                        </Box>
                    </Box>
                </Box>
                <Box marginVertical="m" paddingHorizontal="m">
                    <Button
                        title="SUBMIT ORDER"
                        variant="PRIMARY"
                        onPress={() => {
                            dispatch(emptyBag())
                            dispatch(addOrder({
                                id: Math.floor(Math.random() * 10),
                                date: setDate(new Date()),
                                status: OrderStatus.PENDING,
                                order_items: bagItems,
                                tracking_number: `IW${Math.floor(Math.random()*100000) }`,
                                total_amount: total,
                                user: 1 
                            }))
                            headerTranslateY.value= 0
                            translateY.value = height
                        }}
                    />
                </Box>
            </ScrollView>
        </AnimatedBox>
    );
};

const setDate =(date: Date) => {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
}

export default CheckoutView;
