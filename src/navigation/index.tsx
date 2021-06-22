import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import theme from "../utils/theme";
import AppStack from "./AppStack";

const Navigation = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default Navigation;
