import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";

import { BoxProps } from "@shopify/restyle";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface ListItemProps extends BoxProps<Theme> {
    left_icon?: ReactNode;
    right_icon?: ReactNode;
    title: string;
    description: string;
}

const ListItem: React.FC<ListItemProps> = ({
    title,
    description,
    left_icon,
    right_icon,
    ...rest
}) => {
    return (
        <Box
            bg="white"
            padding="m"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginVertical='s'
            borderRadius='m'
            {...rest}
        >
            <Box flexDirection="row" alignItems="center">
                {left_icon && left_icon}
                <Box justifyContent="center" marginHorizontal='m'>
                    <Text variant="body2"> {title} </Text>
                    <Text variant="description" opacity={.7}> {description} </Text>
                </Box>
            </Box>
            {right_icon && right_icon}
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ListItem;
