import React, { useState } from "react";
import { Dimensions, ScrollView, Switch } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import Header from "../components/navigation/Header";

import {
    SettingsScreenNavigationProps,
    SettingsScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";

import { Theme } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { Box, Text } from "../utils/restyle";
import Input from "../components/forms/form_elements/Input";

interface SettingScreenProps {
    navigation: SettingsScreenNavigationProps;
    route: SettingsScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");
const HEADER_HEIGHT = height * .12

const SettingScreen: React.FC<SettingScreenProps> = ({ route, navigation }) => {
    const theme = useTheme<Theme>();
    const [salesNoification, setSalesNotification] = useState(false);
    const [deliveryStatus, setDeliveryStatus] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    return (
        <Layout>
            <Header
                height={HEADER_HEIGHT}
                elevation={2}
                paddingHorizontal='m'
                title="Settings"
                position="absolute"
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
                    marginTop: HEADER_HEIGHT - theme.spacing.l,
                }}
            >
                <Box margin="m">
                    <Text mb="s" variant="body2">
                        Personal Informations
                    </Text>
                    <Input marginVertical="s" placeholder="First Name" />
                    <Input placeholder="Last Name" />
                </Box>
                <Box margin="m">
                    <Text mb="s" variant="body2">
                        Notification
                    </Text>
                    <Box
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        marginVertical="s"
                    >
                        <Text variant="body">Sales</Text>
                        <Switch
                            onValueChange={(value) =>
                                setSalesNotification(value)
                            }
                            value={salesNoification}
                            thumbColor={theme.colors.black}
                            trackColor={{
                                true: theme.colors.darkColor,
                                false: theme.colors.gray,
                            }}
                        />
                    </Box>
                    <Box
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        marginVertical="s"
                    >
                        <Text variant="body">Delivery Status Change</Text>
                        <Switch
                            onValueChange={(value) => setDeliveryStatus(value)}
                            value={deliveryStatus}
                            thumbColor={theme.colors.black}
                            trackColor={{
                                true: theme.colors.darkColor,
                                false: theme.colors.gray,
                            }}
                        />
                    </Box>
                </Box>
                <Box margin="m">
                    <Text mb="s" variant="body2">
                        Others
                    </Text>
                    <Box
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        marginVertical="s"
                    >
                        <Text variant="body">Dark Mode</Text>
                        <Switch
                            onValueChange={(value) => setDarkMode(value)}
                            value={darkMode}
                            thumbColor={theme.colors.black}
                            trackColor={{
                                true: theme.colors.darkColor,
                                false: theme.colors.gray,
                            }}
                        />
                    </Box>
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default SettingScreen;
