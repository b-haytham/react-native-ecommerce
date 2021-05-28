import React from "react";
import { Dimensions, Image } from "react-native";
import Layout from "../components/Layout";
import {
    CategoryScreenNavigationProps,
    CategoryScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";

import Constants from "expo-constants";
import ExitIcon from "../components/forms/form_elements/ExitIcon";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../utils/theme";
import { SharedElement } from "react-navigation-shared-element";

interface CategoryScreenProps {
    navigation: CategoryScreenNavigationProps;
    route: CategoryScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const IMAGE_HEIGHT = height * 0.6;

const CategoryScreen: React.FC<CategoryScreenProps> = ({
    route,
    navigation,
}) => {
    const theme = useTheme<Theme>();
    return (
        <Layout no_padding>
            <Box
                position="absolute"
                width={width}
                height={IMAGE_HEIGHT}
                borderBottomRightRadius="l"
                borderBottomLeftRadius="l"
                overflow="hidden"
            >
                <SharedElement id={`category-${route.params.category.display_name}`}>
                    <Image
                        width={width}
                        height={IMAGE_HEIGHT}
                        style={{ width, height: IMAGE_HEIGHT }}
                        source={route.params.category.image}
                        resizeMode='cover'
                    />
                </SharedElement>
                <Box position="absolute" bottom={20} left={20}>
                    <Text variant="headline" color="white">
                        {route.params.category.display_name}
                    </Text>
                </Box>
                <Box
                    position="absolute"
                    top={Constants.statusBarHeight + theme.spacing.m}
                    right={theme.spacing.m}
                >
                    <ExitIcon
                        onPress={() => navigation.navigate("Shop_Main")}
                    />
                </Box>
            </Box>
        </Layout>
    );
};

export default CategoryScreen;
