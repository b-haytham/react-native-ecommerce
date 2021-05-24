import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Badge from "../components/Badge";
import OrderCard from "../components/cards/OrderCard";
import ShippingAddressCard from "../components/cards/ShippingAddressCard";
import Button from "../components/forms/form_elements/Button";
import IconButton from "../components/forms/form_elements/IconButton";
import Input from "../components/forms/form_elements/Input";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import Header from "../components/navigation/Header";
import { OrderStatus } from "../redux/data_types";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface ComponentsScreenProps {}

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
