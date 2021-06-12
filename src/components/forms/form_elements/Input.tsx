import { useTheme, BoxProps } from "@shopify/restyle";
import React, { ReactNode } from "react";
import {
    NativeSyntheticEvent,
    StyleProp,
    StyleSheet,
    TextInput,
    TextInputFocusEventData,
    TextInputProps,
    TextStyle,
} from "react-native";
import { Box, Text } from "../../../utils/restyle";
import { Theme } from "../../../utils/theme";

interface InputProps extends BoxProps<Theme> {
    placeholder: string;
    icon?: ReactNode;
    textInputStyle?: StyleProp<TextStyle>;
    textInputProps?: TextInputProps;
    password?: boolean;
    elevation?: number;
    inputRef?: React.LegacyRef<TextInput> | undefined;
    onBlur?:
        | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
        | undefined;
    error?: string;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    icon,
    textInputStyle,
    textInputProps,
    password,
    elevation,
    inputRef,
    onBlur,
    error,
}) => {
    const theme = useTheme<Theme>();

    return (
        <Box>
            <Box
                backgroundColor="white"
                paddingHorizontal="m"
                marginVertical="s"
                paddingVertical="s"
                borderRadius="s"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                elevation={elevation ? elevation : 0}
                borderColor="primary"
                borderWidth={1}
            >
                <TextInput
                    onBlur={onBlur}
                    ref={inputRef}
                    style={[styles.textInput, textInputStyle]}
                    placeholder={placeholder}
                    secureTextEntry={password}
                    {...textInputProps}
                />
                {icon && icon}
            </Box>
            {error && (
                <Text marginLeft="s" variant="description" color="error">
                    {error}
                </Text>
            )}
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        flexGrow: 1,
    },
});

export default Input;
