import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useIsFocused } from "@react-navigation/core";
import { useTheme } from "@shopify/restyle";
import React, { createRef, useEffect, useRef } from "react";
import { Dimensions, TextInput, TouchableOpacity } from "react-native";
import Input from "../components/forms/form_elements/Input";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import {
    SearchScreenNavigationProps,
    SearchScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box } from "../utils/restyle";
import { Theme } from "../utils/theme";
import { useKeyboard } from "../utils/useKeyboardHeight";

interface SearchScreenProps {
    navigation: SearchScreenNavigationProps;
    route: SearchScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();
    const [keyboardHeight, keyboardVisible] = useKeyboard();
    const inputRef = createRef<TextInput>();
    const searchButtonRef = createRef<TouchableOpacity>()

    
    return (
        <Layout>
            {!keyboardVisible && (
                <BottomTab
                    elevation={5}
                    route_name={route.name}
                    position="absolute"
                    bottom={0}
                />
            )}
            <Box margin="m">
                <Input
                    inputRef={inputRef}   
                    placeholder="Search"
                    icon={
                        <TouchableOpacity ref={searchButtonRef} onPress={() => console.log('PRESSED')}>
                            <Ionicons
                                name="search"
                                size={25}
                                color={theme.colors.darkColor}
                            />
                        </TouchableOpacity>
                    }
                />
            </Box>
        </Layout>
    );
};

export default SearchScreen;
