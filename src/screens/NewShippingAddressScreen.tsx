import { Entypo, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../components/forms/form_elements/Button";
import Input from "../components/forms/form_elements/Input";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import Header from "../components/navigation/Header";
import {
    NewShippingAddessScreenRouteProps,
    NewShippingAddressScreenNavigationProps,
} from "../navigation/ScreensNavigationRouteProps";
import { useAppDispatch } from "../redux/hooks";
import { addShippingAddress, editShippingAddress } from "../redux/user/userSlice";
import { Box } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface NewShippingAddressScreenProps {
    navigation: NewShippingAddressScreenNavigationProps;
    route: NewShippingAddessScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");
const HEADER_HEIGHT = height * 0.12;

const NewShippingAddressScreen: React.FC<NewShippingAddressScreenProps> = ({
    navigation,
    route,
}) => {
    const { shipping_address } = route.params
    const theme = useTheme<Theme>();
    const dispatch = useAppDispatch()

    const [fullName, setFullName] = useState(shipping_address ? shipping_address.full_name :"");
    const [address, setAddress] = useState(shipping_address ? shipping_address.address : "");
    const [city, setCity] = useState( shipping_address ? shipping_address.city :"");
    const [state, setState] = useState(shipping_address ? shipping_address.state : "");
    const [zipCode, setZipCode] = useState(shipping_address ? shipping_address.zip_code : "");
    const [country, setCountry] = useState(shipping_address ? shipping_address.country : "");
   
    const handleSubmit = () => {
        if(shipping_address) {
            dispatch(editShippingAddress({
                id: shipping_address.id,
                address,
                city,
                country,
                state,
                full_name: fullName,
                zip_code: +zipCode,
                is_default: shipping_address.is_default
            }))
            navigation.navigate('Profile_ShippingAddresses')
        }else {
            dispatch(addShippingAddress({
                id: Math.floor(Math.random() * 100) ,
                address,
                city,
                country,
                state,
                full_name: fullName,
                zip_code: +zipCode,
                is_default: false
            }))
            navigation.navigate('Profile_ShippingAddresses')
        }
    }
    return (
        <Layout>
            <Header
                height={HEADER_HEIGHT}
                elevation={2}
                paddingHorizontal='m'
                title={shipping_address ? 'Edit Address' : "New Address"}
                position="absolute"
                top={0}
                left_icon={
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Profile_ShippingAddresses")
                        }
                    >
                        <Ionicons
                            name="arrow-back"
                            size={30}
                            color={theme.colors.darkColor}
                        />
                    </TouchableOpacity>
                }
            />
            {/* <BottomTab
                elevation={5}
                route_name={route.name}
                position="absolute"
                bottom={0}
            /> */}
            <ScrollView
                style={{
                    flex: 1,
                    // marginBottom: height * 0.1,
                    marginTop: HEADER_HEIGHT + theme.spacing.s,
                }}
            >
                <Box marginHorizontal="m">
                    <Input
                        placeholder="Full Name"
                        textInputProps={{
                            value: fullName,
                            onChangeText: (v) => setFullName(v),
                        }}
                    />
                </Box>
                <Box marginHorizontal="m">
                    <Input placeholder="Address" textInputProps={{
                            value: address,
                            onChangeText: (v) => setAddress(v),
                        }} />
                </Box>
                <Box marginHorizontal="m">
                    <Input placeholder="City" textInputProps={{
                            value: city,
                            onChangeText: (v) => setCity(v),
                        }}/>
                </Box>
                <Box marginHorizontal="m">
                    <Input placeholder="State" textInputProps={{
                            value: state,
                            onChangeText: (v) => setState(v),
                        }}/>
                </Box>
                <Box marginHorizontal="m">
                    <Input placeholder="Zip Code" textInputProps={{
                            value: zipCode.toString(),
                            keyboardType: 'numeric',
                            onChangeText: (v) => setZipCode(v),
                        }}/>
                </Box>
                <Box marginHorizontal="m">
                    <Input placeholder="Country"  textInputProps={{
                            value: country,
                            onChangeText: (v) => setCountry(v),
                        }}/>
                </Box>
                <Box marginHorizontal="m">
                    <Button
                        variant="PRIMARY"
                        title={"SAVE"}
                        onPress={handleSubmit}
                    />
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default NewShippingAddressScreen;
