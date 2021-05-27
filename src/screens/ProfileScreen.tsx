import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { Dimensions, ScrollView, TouchableOpacity } from "react-native";
import Layout from "../components/Layout";
import ListItem from "../components/ListItem";
import BottomTab from "../components/navigation/BottomTab";
import UserInfo from "../components/UserInfo";
import {
    ProfileScreenNavigationProps,
    ProfileScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface ProfileScreenProps {
    navigation: ProfileScreenNavigationProps;
    route: ProfileScreenRouteProps;
}
const { width, height } = Dimensions.get("screen");

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();
    return (
        <Layout>
            <BottomTab route_name={route.name} position="absolute" bottom={0} />
            <ScrollView
                style={{
                    flex: 1,
                    marginBottom: height * 0.1,
                    paddingHorizontal: theme.spacing.m,
                }}
            >
                <Box>
                    <UserInfo 
                        imageSize={80}
                        image={{uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}
                        name='Jack'
                        email='jack@jack.com'
                    />
                </Box>
                <ListItem
                    title="My Orders"
                    description="Already have 4 Orders"
                    left_icon={
                        <Entypo
                            name="shopping-bag"
                            size={30}
                            color={theme.colors.primary}
                        />
                    }
                    right_icon={
                        <TouchableOpacity>
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
                    description="Already have 2"
                    left_icon={
                        <Entypo
                            name="address"
                            size={30}
                            color={theme.colors.primary}
                        />
                    }
                    right_icon={
                        <TouchableOpacity>
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                size={30}
                                color={theme.colors.primary}
                            />
                        </TouchableOpacity>
                    }
                />
                <ListItem
                    title="My Reviews"
                    description="Already have 7"
                    left_icon={
                        <MaterialIcons
                            name="rate-review"
                            size={30}
                            color={theme.colors.primary}
                        />
                    }
                    right_icon={
                        <TouchableOpacity>
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
                        <TouchableOpacity>
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                size={30}
                                color={theme.colors.primary}
                            />
                        </TouchableOpacity>
                    }
                />
            </ScrollView>
        </Layout>
    );
};

export default ProfileScreen;
