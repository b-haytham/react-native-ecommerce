import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import Badge from "../components/Badge";
import OrderCard from "../components/cards/OrderCard";
import ProductCard from "../components/cards/ProductCard";
import ShippingAddressCard from "../components/cards/ShippingAddressCard";
import Button from "../components/forms/form_elements/Button";
import IconButton from "../components/forms/form_elements/IconButton";
import Input from "../components/forms/form_elements/Input";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import Header from "../components/navigation/Header";
import { OrderStatus, Product } from "../redux/data_types";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";

import Carousel from "react-native-snap-carousel";
import { PRODUCTS } from "../redux/data";
import CategoryCard from "../components/cards/CategoryCard";

interface ComponentsScreenProps {}

const { width, height } = Dimensions.get("screen");

const ComponentsScreen: React.FC<ComponentsScreenProps> = ({}) => {
    const theme = useTheme<Theme>();
    return (
        <Layout>
            <ScrollView style={styles.container}>
                <Box m="m">
                    <Text variant="headline">Form Elements</Text>
                    <Input placeholder="Input" />
                    <Button
                        title="PRIMARY"
                        variant="PRIMARY"
                        onPress={() => {}}
                    />
                    <Button
                        title="DEFAULT"
                        variant="DEFAULT"
                        onPress={() => {}}
                    />
                </Box>
                <Box marginVertical="m">
                    <Text variant="headline" mb="m" marginHorizontal="m">
                        Navigation
                    </Text>
                    <BottomTab route_name="Home" />
                    <Box marginVertical="s">
                        <Header
                            title="Header"
                            left_icon={
                                <TouchableOpacity>
                                    <MaterialIcons
                                        name="keyboard-arrow-left"
                                        size={24}
                                        color={theme.colors.black}
                                    />
                                </TouchableOpacity>
                            }
                            right_icon={
                                <TouchableOpacity>
                                    <MaterialIcons
                                        name="search"
                                        size={24}
                                        color={theme.colors.black}
                                    />
                                </TouchableOpacity>
                            }
                        />
                    </Box>
                </Box>
                <Box marginVertical="m">
                    <Text variant="headline" mb="m" marginHorizontal="m">
                        Cards
                    </Text>
                    <Box marginHorizontal="s">
                        <ShippingAddressCard
                            elevation={1}
                            address="3 Newbridge Court, Chino Hills, CA 91709 United States"
                            name="Jack Jack"
                            is_checked_as_default={true}
                            onCheckBoxChange={(v) => {}}
                            onEditPress={() => {}}
                        />
                        <ShippingAddressCard
                            elevation={1}
                            address="3 Newbridge Court, Chino Hills, CA 91709 United States"
                            name="Jack Jack"
                            is_checked_as_default={false}
                            onCheckBoxChange={(v) => {}}
                            onEditPress={() => {}}
                            in_checkout
                        />
                    </Box>
                    <Box marginHorizontal="s">
                        <OrderCard
                            elevation={1}
                            date="05-12-2020"
                            tracking_number="IW15884531358"
                            number_items={3}
                            total_amount={112}
                            status={OrderStatus.SUCCESS}
                            onDetailPress={() => {}}
                        />
                        <OrderCard
                            elevation={1}
                            date="05-12-2020"
                            tracking_number="IW15884531358"
                            number_items={3}
                            total_amount={112}
                            status={OrderStatus.PENDING}
                            onDetailPress={() => {}}
                        />
                        <OrderCard
                            elevation={1}
                            date="05-12-2020"
                            tracking_number="IW15884531358"
                            number_items={3}
                            total_amount={112}
                            status={OrderStatus.FAILURE}
                            onDetailPress={() => {}}
                        />
                    </Box>
                    <Box
                        elevation={2}
                        marginVertical="s"
                        borderRadius="s"
                        marginHorizontal="s"
                        overflow="hidden"
                    >
                        <CategoryCard
                            icon={
                                <TouchableOpacity>
                                    
                                    <Ionicons
                                        name="ios-arrow-forward"
                                        size={30}
                                        color={theme.colors.white}
                                    />
                                </TouchableOpacity>
                            }
                            title="Men"
                            width={width}
                            height={200}
                            image="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        />
                    </Box>
                    <Box>
                        <Carousel
                            data={PRODUCTS}
                            keyExtractor={(item: Product) => item.id.toString()}
                            sliderWidth={width}
                            itemWidth={200}
                            activeAnimationType="spring"
                            numColumns={4}
                            renderItem={({ item }: { item: Product }) => (
                                <ProductCard
                                    width={200}
                                    product={item}
                                    onImagePress={() => {}}
                                    onAddToBagPress={() => {}}
                                />
                            )}
                        />
                    </Box>
                </Box>
                <Box marginVertical="m">
                    <Text variant="headline" mb="m" marginHorizontal="m">
                        Badges
                    </Text>
                    <Box marginHorizontal="s" flexDirection="row">
                        <Badge
                            marginHorizontal="s"
                            title="New"
                            bg="darkColor"
                        />
                        <Badge marginHorizontal="s" title="-50%" bg="primary" />
                        <Badge
                            marginHorizontal="s"
                            title="Succress"
                            bg="success"
                        />
                    </Box>
                </Box>
                <Box marginVertical="m">
                    <Text variant="headline" mb="m" marginHorizontal="m">
                        Icon buttons
                    </Text>
                    <Box marginHorizontal="s" flexDirection="row">
                        <IconButton
                            elevation={20}
                            marginHorizontal="s"
                            onPress={() => {}}
                            bg="darkColor"
                            icon={
                                <Entypo
                                    name="plus"
                                    size={24}
                                    color={"#ffffff"}
                                />
                            }
                        />
                        <IconButton
                            elevation={10}
                            onPress={() => {}}
                            bg="primary"
                            icon={
                                <Entypo
                                    name="shopping-bag"
                                    size={24}
                                    color={"#ffffff"}
                                />
                            }
                        />
                    </Box>
                </Box>
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ComponentsScreen;
