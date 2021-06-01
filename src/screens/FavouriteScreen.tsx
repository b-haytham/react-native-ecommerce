import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import Header from "../components/navigation/Header";
import Selectables from "../components/Selectables";
import {
    FavouriteScreenNavigationProps,
    FavouriteScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { useAppSelector } from "../redux/hooks";
import { Box } from "../utils/restyle";
import { Theme } from "../utils/theme";

import Slider from "@react-native-community/slider";
import SelectableColors from "../components/SelectableColors";

interface FavouriteScreenProps {
    navigation: FavouriteScreenNavigationProps;
    route: FavouriteScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");
const HEADER_HEIGHT = height * 0.15;

const FavouriteScreen: React.FC<FavouriteScreenProps> = ({
    navigation,
    route,
}) => {
    const theme = useTheme<Theme>();
    const favourites = useAppSelector((state) => state.favourite.favourites);
    console.log(favourites)
    return (
        <Layout>
            <Header
                height={HEADER_HEIGHT}
                elevation={2}
                title="Favourites"
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
            <BottomTab route_name={route.name} position="absolute" bottom={0} />
            <ScrollView
                style={{
                    flex: 1,
                    marginBottom: height * 0.1,
                    marginTop: HEADER_HEIGHT - theme.spacing.l,
                }}
            >
                <Box>
                    <Box  marginVertical='m'>
                        <Selectables
                            value={"S"}
                            items={["S", "M", "L", "XL"]}
                            onChange={(v) => {}}
                        />
                    </Box>
                    <Box marginVertical='m'>
                        <SelectableColors
                            value={"Black"}
                            items={["Black", "Blue", "Brown", "Green"]}
                            onChange={(v) => {}}
                        />
                    </Box>
                    <Box marginVertical="m">
                        <Slider
                            style={{ width: 300, height: 40 }}
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="#000"
                            maximumTrackTintColor="gray"
                            thumbTintColor='#000'
                        />
                    </Box>
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default FavouriteScreen;
