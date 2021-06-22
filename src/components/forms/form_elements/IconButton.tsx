import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

import { BoxProps } from "@shopify/restyle";
import { Theme } from "../../../utils/theme";
import { Box } from "../../../utils/restyle";

interface IconButtonProps extends BoxProps<Theme> {
    onPress(): void;
    icon: ReactNode
    style?: StyleProp<ViewStyle>
}

const IconButton: React.FC<IconButtonProps> = ({style, icon, onPress, ...rest }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Box
                justifyContent="center"
                alignItems="center"
                width={40}
                height={40}
                style={[styles.container, style]} 
                {...rest}
            >
                {icon}
            </Box>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 20
    },
});

export default IconButton;
