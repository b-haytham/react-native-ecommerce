import { TransitionPresets } from "@react-navigation/stack";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import BagScreen from "../screens/BagScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ShopScreen from "../screens/ShopScreen";
import { MainStackParamList } from "./ParmListTypes";

const Stack = createSharedElementStackNavigator<MainStackParamList>();

export const iosTransitionSpec: TransitionSpec = {
    animation: "spring",
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 10,
        restSpeedThreshold: 10,
    },
};

const MainStack = () => {
    return (
        <Stack.Navigator
            mode="modal"
            screenOptions={{
                // Enable gestures if you want. I disabled them because of my card style interpolator opacity animation
                gestureEnabled: false,
                // gestureResponseDistance: {
                // 	vertical: 100,
                // },
                // gestureDirection: 'vertical',
                ...TransitionPresets.ModalSlideFromBottomIOS,
                transitionSpec: {
                    open: iosTransitionSpec,
                    close: iosTransitionSpec,
                },
                // Opacity animation, you can also adjust this by playing with transform properties.
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                        opacity: progress,
                    },
                }),
            }}
            headerMode="none"
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Shop_Main" component={ShopScreen} />
            <Stack.Screen name="Bag_Main" component={BagScreen} />
            <Stack.Screen name="Favourite_Main" component={FavouriteScreen} />
            <Stack.Screen name="Profile_Main" component={ProfileScreen} />
        </Stack.Navigator>
    );
};
export default MainStack;
