import { BoxProps } from "@shopify/restyle";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text } from "../../../utils/restyle";
import { Theme } from "../../../utils/theme";

interface ButtonProps  extends BoxProps<Theme>{
    variant: 'PRIMARY' | "DEFAULT"
    title: string;
    onPress(): void
}

const Button: React.FC<ButtonProps> = ({ title, onPress, variant, ...rest }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Box
                backgroundColor={variant === 'PRIMARY' ? "primary" : 'white'}
                justifyContent="center"
                alignItems="center"
                borderRadius="l"
                paddingVertical="m"
                paddingHorizontal='m'
                marginVertical='m'
                borderWidth={variant === 'PRIMARY'?  0 : 1}
                {...rest}
            >
                <Text variant="body2" color={variant === 'PRIMARY' ? 'white' : undefined}>
                    {title}
                </Text>
            </Box>
        </TouchableOpacity>
    );
};

export default Button;
