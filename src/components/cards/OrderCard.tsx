import React from "react";

import { BoxProps } from "@shopify/restyle";
import { StyleSheet } from "react-native";
import { Theme } from "../../utils/theme";
import { Box, Text } from "../../utils/restyle";
import { OrderStatus } from "../../redux/data_types";
import Button from "../forms/form_elements/Button";

interface OrderCardProps extends BoxProps<Theme> {
    tracking_number: string;
    date: string;
    number_items: number;
    total_amount: number;
    status: OrderStatus;
    onDetailPress(): void;
}

const OrderCard: React.FC<OrderCardProps> = ({
    status,
    onDetailPress,
    total_amount,
    number_items,
    tracking_number,
    date,
    ...rest
}) => {
    return (
        <Box p="m" bg="white" borderRadius="m" marginVertical="s" {...rest}>
            <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                marginBottom="m"
            >
                <Text variant="body2">{`Tracking Number: ${tracking_number}`}</Text>
            </Box>
            <Box
                flexDirection='row'
                alignItems='center'
            >
                <Text variant='description'>{`Date:`}</Text>
                <Text ml='s' variant="body">{date}</Text>
            </Box>
            <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Text variant="body" opacity={0.6}>
                    Items:{" "}
                    <Text variant="body" fontWeight="bold">
                        {number_items}
                    </Text>
                </Text>
                <Text variant="body" opacity={0.6}>
                    Total:{" "}
                    <Text
                        variant="body"
                        fontWeight="bold"
                    >{`$${total_amount}`}</Text>
                </Text>
            </Box>
            <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                marginTop="m"
            >
                <Button
                    title="DETAILS"
                    variant="DEFAULT"
                    onPress={onDetailPress}
                    marginVertical='s'
                />
                <Text
                    variant="body"
                    color={
                        status === OrderStatus.SUCCESS
                            ? "success"
                            : status === OrderStatus.PENDING
                            ? "darkColor"
                            : "error"
                    }
                >
                    {status}
                </Text>
            </Box>
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default OrderCard;
