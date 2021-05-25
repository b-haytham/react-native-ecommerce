import React from "react";
import { StyleSheet } from "react-native";
import Social from "../components/forms/form_elements/Social";
import RegisterForm from "../components/forms/RegisterForm";

import Layout from "../components/Layout";

import {
    RegisterScreenNavigationProps,
    RegisterScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Text } from "../utils/restyle";

interface RegisterScreenProps {
    navigation: RegisterScreenNavigationProps;
    route: RegisterScreenRouteProps;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
    return (
        <Layout p="l">
            <Text variant="headline" mt="xl" mb="xl">
                Register
            </Text>
            <RegisterForm onSubmit={() => navigation.navigate("Login")} />
            <Social title="Or Register with social account" />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default RegisterScreen;
