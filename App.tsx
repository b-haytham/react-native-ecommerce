import React from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import Navigation from "./src/navigation";
import store from "./src/redux/store";
import AppLoading from "expo-app-loading";
import { Entypo, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function App() {
    const [fontLoaded] = useFonts({
        ...Entypo.font,
        ...MaterialCommunityIcons.font,
        ...Ionicons.font,
        ...MaterialIcons.font,
        "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
        "Ubuntu-BoldItalic": require("./assets/fonts/Ubuntu-BoldItalic.ttf"),
        "Ubuntu-Italic": require("./assets/fonts/Ubuntu-Italic.ttf"),
        "Ubuntu-Light": require("./assets/fonts/Ubuntu-Light.ttf"),
        "Ubuntu-LightItalic": require("./assets/fonts/Ubuntu-LightItalic.ttf"),
        "Ubuntu-Medium": require("./assets/fonts/Ubuntu-Medium.ttf"),
        "Ubuntu-MediumItalic": require("./assets/fonts/Ubuntu-MediumItalic.ttf"),
        "Ubuntu-Regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    });

    if (!fontLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}
