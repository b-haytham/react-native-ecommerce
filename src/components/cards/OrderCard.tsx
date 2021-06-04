import React from "react";

import { BoxProps } from "@shopify/restyle";
import { StyleSheet } from "react-native";
import { Theme } from "../../utils/theme";
import { Box, Text } from "../../utils/restyle";
import { Order, OrderStatus } from "../../redux/data_types";
import Button from "../forms/form_elements/Button";

interface OrderCardProps extends BoxProps<Theme> {
    order: Order
    onDetailPress(): void;
}

const OrderCard: React.FC<OrderCardProps> = ({
    order,
    onDetailPress,
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
                <Text variant="body2">{`Tracking Number: ${order.tracking_number}`}</Text>
            </Box>
            <Box
                flexDirection='row'
                alignItems='center'
            >
                <Text variant='description'>{`Date:`}</Text>
                <Text ml='s' variant="body">{order.date}</Text>
            </Box>
            <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Text variant="body" opacity={0.6}>
                    Items:{" "}
                    <Text variant="body" fontWeight="bold">
                        {order.order_items.length}
                    </Text>
                </Text>
                <Text variant="body" opacity={0.6}>
                    Total:{" "}
                    <Text
                        variant="body"
                        fontWeight="bold"
                    >{`${order.total_amount} DT`}</Text>
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
                        order.status === OrderStatus.SUCCESS
                            ? "success"
                            : order.status === OrderStatus.PENDING
                            ? "darkColor"
                            : "error"
                    }
                >
                    {order.status}
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
