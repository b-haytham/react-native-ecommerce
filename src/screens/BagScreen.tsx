import { Entypo, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { Dimensions, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BagCard from "../components/cards/BagCard";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import Header from "../components/navigation/Header";
import {
    BagScreenNavigationProps,
    BagScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { useAppSelector } from "../redux/hooks";
import { Theme } from "../utils/theme";

interface BagScreenProps {
    navigation: BagScreenNavigationProps;
    route: BagScreenRouteProps;
}
const { width, height } = Dimensions.get("screen");
const HEADER_HEIGHT = height * 0.15;

const BagScreen: React.FC<BagScreenProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();
    const bagItems = useAppSelector((state) => state.bag.bagItems);

    return (
        <Layout>
            <Header
                height={HEADER_HEIGHT}
                elevation={2}
                title="Bag"
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
                {bagItems &&
                    bagItems.length > 0 &&
                    bagItems.map((b) => (
                        <BagCard
                            key={b.product.id}
                            bagItem={b}
                            onImagePress={() =>
                                navigation.navigate("Shop_Product_Detail", {
                                    item: b.product,
                                })
                            }
                            onDeletePress={() => {}}
                        />
                    ))}
            </ScrollView>
        </Layout>
    );
};

export default BagScreen;
