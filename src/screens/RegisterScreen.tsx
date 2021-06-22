import React from "react";
import { Platform, ScrollView, TouchableOpacity } from "react-native";
import { Dimensions, Image, KeyboardAvoidingView } from "react-native";
import { StyleSheet } from "react-native";
import Social from "../components/forms/form_elements/Social";
import RegisterForm from "../components/forms/RegisterForm";

import Layout from "../components/Layout";

import {
    RegisterScreenNavigationProps,
    RegisterScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";

interface RegisterScreenProps {
    navigation: RegisterScreenNavigationProps;
    route: RegisterScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
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
                <Box maxWidth={width * 0.6}>
                    <Text variant="headline" mt="xl" color="white">
                        Create Account
                    </Text>
                    <Text variant="description" mb="xl" color="white">
                        Sign up to get started!
                    </Text>
                </Box>
                <Box>
                    <Image
                        source={require("../../assets/icon.png")}
                        style={{ width: 100, height: 100, borderRadius: 50 }}
                    />
                </Box>
            </Box>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1}}

            >
                <ScrollView>
                    <Box padding="m">
                        <RegisterForm
                            onSubmit={() => navigation.navigate("Login")}
                        />

                        <Box
                            flexDirection="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Text variant="body">Have an account?</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Text
                                    marginLeft="m"
                                    variant="body2"
                                    color="primary"
                                >
                                    Sign in
                                </Text>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </ScrollView>
            </KeyboardAvoidingView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default RegisterScreen;
