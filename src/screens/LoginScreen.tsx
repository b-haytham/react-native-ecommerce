import React from "react";
import { TouchableOpacity } from "react-native";

import {
    LoginScreenNavigationProps,
    LoginScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";

import Social from "../components/forms/form_elements/Social";
import LoginForm from "../components/forms/LoginForm";
import Layout from "../components/Layout";
import { Image } from "react-native";
interface LoginScreenProps {
    navigation: LoginScreenNavigationProps;
    route: LoginScreenRouteProps;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    return (
        <Layout no_padding>
            <Box
                padding="m"
                bg="primary"
                borderBottomLeftRadius="l"
                borderBottomRightRadius="l"
                elevation={10}
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box>
                    <Text variant="headline" mt="xl" color="white">
                        Welcome
                    </Text>
                    <Text variant="description" mb="xl" color="white">
                        Sign in to continue!
                    </Text>
                </Box>
                <Box>
                    <Image
                        source={require("../../assets/icon.png")}
                        style={{ width: 100, height: 100, borderRadius: 50 }}
                    />
                </Box>
            </Box>
            <Box paddingHorizontal="m" paddingTop="l">
                <LoginForm
                    onSubmit={(data) =>
                        navigation.navigate("Main", { screen: "Home" })
                    }
                />
                <Box
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text variant="body">Don't Have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text marginLeft='m' variant="body2" color='primary'>Sign up</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Layout>
    );
};

export default LoginScreen;
