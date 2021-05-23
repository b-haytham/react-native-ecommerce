import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { ThemeProvider } from "@shopify/restyle";
import theme from "../utils/theme";

const Navigation = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <AuthStack />
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default Navigation;
