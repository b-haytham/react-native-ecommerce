import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Checkbox from 'react-native-bouncy-checkbox'

import { BoxProps, useTheme } from "@shopify/restyle";
import { Box, Text } from "../../utils/restyle";
import { Theme } from "../../utils/theme";
import { ShippingAddress } from "../../redux/data_types";
import { Entypo } from "@expo/vector-icons";

interface ShippingAddressCardProps extends BoxProps<Theme> {
    address: ShippingAddress
    onCheckBoxChange(value: boolean | undefined): void
    onEditPress(): void;
    in_checkout?: boolean
    onDeletePress?(): void
}

const ShippingAddressCard: React.FC<ShippingAddressCardProps> = ({
    address,
    onEditPress,
    in_checkout,
    onCheckBoxChange,
    onDeletePress,
    ...rest
}) => {
    const theme = useTheme<Theme>()
    return (
        <Box
            p="m"
            bg="white"
            borderRadius="m"
            marginVertical="s"
            {...rest}
        >
            <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                marginBottom='s'
            >
                <Text variant="body2">{address.full_name}</Text>
                {in_checkout ? <TouchableOpacity onPress={onEditPress} >
                   <Text variant='body' color='primary'>Change</Text>
                </TouchableOpacity> :  <TouchableOpacity onPress={onDeletePress} >
                    <Entypo name='cross' size={25} color={theme.colors.primary} />
                </TouchableOpacity>}
            </Box>
            <Box marginBottom='m'>
                <Text variant='body' > {`${address.address}, ${address.city}, ${address.state} ${address.zip_code}, ${address.country}`}</Text>
            </Box>
            {!in_checkout && <Box
                flexDirection="row"
                alignItems="center"
                justifyContent='space-between'
            >
                <Box flexDirection='row' alignItems='center'>
                <Checkbox
                    fillColor={theme.colors.primary}
                    unfillColor={theme.colors.background}
                    onPress={onCheckBoxChange}
                    useNativeDriver
                    iconStyle={{borderColor: theme.colors.gray}}
                    isChecked={address.is_default} 
                />
                <Text variant='smallGray'>Default Address</Text>
                </Box>
                <TouchableOpacity onPress={onEditPress} >
                    <Text variant="body" color="primary">
                        {in_checkout ? 'Change' : 'Edit'}
                    </Text>
                </TouchableOpacity>
            </Box>}
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 2,
    },
});

export default ShippingAddressCard;
