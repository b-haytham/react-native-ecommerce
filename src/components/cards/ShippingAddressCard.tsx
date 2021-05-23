import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Checkbox from 'react-native-bouncy-checkbox'

import { BoxProps, useTheme } from "@shopify/restyle";
import { Box, Text } from "../../utils/restyle";
import { Theme } from "../../utils/theme";

interface ShippingAddressCardProps extends BoxProps<Theme> {
    name: string;
    address: string;
    is_checked_as_default?: boolean;
    onCheckBoxChange(value: boolean | undefined): void
    onEditPress(): void;
    in_checkout?: boolean
}

const ShippingAddressCard: React.FC<ShippingAddressCardProps> = ({
    name,
    address,
    is_checked_as_default,
    onEditPress,
    in_checkout,
    onCheckBoxChange,
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
                <Text variant="body2">{name}</Text>
                <TouchableOpacity onPress={onEditPress} >
                    <Text variant="body" color="primary">
                        {in_checkout ? 'Change' : 'Edit'}
                    </Text>
                </TouchableOpacity>
            </Box>
            <Box marginBottom='m'>
                <Text variant='body' > {address}</Text>
            </Box>
            {!in_checkout && <Box
                flexDirection="row"
                alignItems="center"
            >
                <Checkbox
                    fillColor={theme.colors.primary}
                    unfillColor={theme.colors.background}
                    onPress={onCheckBoxChange}
                    useNativeDriver
                    iconStyle={{borderColor: theme.colors.gray}}
                    isChecked={is_checked_as_default} 
                />
                <Text variant='smallGray'>Default Address</Text>
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
