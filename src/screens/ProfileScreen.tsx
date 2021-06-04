import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { Dimensions, ScrollView } from "react-native";

import Layout from "../components/Layout";
import ListItem from "../components/ListItem";
import BottomTab from "../components/navigation/BottomTab";

import {
    ProfileScreenNavigationProps,
    ProfileScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";


import { TouchableOpacity } from "react-native-gesture-handler";
import ProfileHeader from "../components/navigation/ProfileHeader";
import { useAppSelector } from "../redux/hooks";
interface ProfileScreenProps {
    navigation: ProfileScreenNavigationProps;
    route: ProfileScreenRouteProps;
}
const { width, height } = Dimensions.get("screen");

const HEADER_HEIGHT = height * 0.15;
const AVATAR_SIZE = 80;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();
    const shippingAddressCount = useAppSelector(state => state.user.current_user?.shipping_addresses)?.length
    const ordersCount = useAppSelector(state => state.orders.orderItems).length
    
    return (
        <Layout no_padding>
            <ProfileHeader
                zIndex={555555}
                header_width={width}
                header_height={HEADER_HEIGHT}
                avatar_size={AVATAR_SIZE}
                avatar_source={{
                    uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                }}
                right_icon={
                    <TouchableOpacity onPress={() => navigation.navigate('Auth', {screen: 'Login'})}>
                        <Ionicons
                            name="exit-outline"
                            size={30}
                            color={theme.colors.white}
                        />
                    </TouchableOpacity>
                }
            />
            <BottomTab
                elevation={5}
                route_name={route.name}
                position="absolute"
                bottom={0}
            />
            <ScrollView
                style={{
                    flex: 1,
                    marginBottom: height * 0.1,

                    paddingHorizontal: theme.spacing.m,
                }}
            >
                <Box
                    style={{
                        paddingTop:
                            HEADER_HEIGHT + AVATAR_SIZE / 2 + theme.spacing.m,
                        marginBottom: theme.spacing.m
                    }}
                >
                    <Box alignItems="center" justifyContent="center" marginBottom='m'>
                        <Box
                            width={width * 0.8}
                            borderRadius="m"
                            padding="m"
                            bg="white"
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Box>
                                <Text variant="body2">Name</Text>
                                <Text variant="description" opacity={0.4}>
                                    Jack
                                </Text>
                            </Box>
                            <Box>
                                <Text variant="body2">Email</Text>
                                <Text variant="description" opacity={0.4}>
                                    jack@jack.com
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    <ListItem
                        title="My Orders"
                        description={ordersCount === 0 ? "Don't have any" : `Already have ${ordersCount}`}
                        left_icon={
                            <Entypo
                                name="shopping-bag"
                                size={30}
                                color={theme.colors.primary}
                            />
                        }
                        right_icon={
                            <TouchableOpacity onPress={() => navigation.navigate('Profile_Orders')}> 
                                <MaterialIcons
                                    name="keyboard-arrow-right"
                                    size={30}
                                    color={theme.colors.primary}
                                />
                            </TouchableOpacity>
                        }
                    />
                    <ListItem
                        title="Shipping Addresses"
                        description={shippingAddressCount === 0 ? "Don't have any" : `Already have ${shippingAddressCount}`}
                        left_icon={
                            <Entypo
                                name="address"
                                size={30}
                                color={theme.colors.primary}
                            />
                        }
                        right_icon={
                            <TouchableOpacity onPress={() => navigation.navigate('Profile_ShippingAddresses')}>
                                <MaterialIcons
                                    name="keyboard-arrow-right"
                                    size={30}
                                    color={theme.colors.primary}
                                />
                            </TouchableOpacity>
                        }
                    />
               
                    <ListItem
                        title="Settings"
                        description="Password, notifications ..."
                        left_icon={
                            <MaterialIcons
                                name="settings"
                                size={30}
                                color={theme.colors.primary}
                            />
                        }
                        right_icon={
                            <TouchableOpacity onPress={() => navigation.navigate('Profile_Settings')}>
                                <MaterialIcons
                                    name="keyboard-arrow-right"
                                    size={30}
                                    color={theme.colors.primary}
                                />
                            </TouchableOpacity>
                        }
                    />
                    

                </Box>
            </ScrollView>
        </Layout>
    );
};

export default ProfileScreen;
