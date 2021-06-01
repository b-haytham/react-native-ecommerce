import React from "react";
import { StyleSheet } from "react-native";
import { BoxProps, useTheme } from "@shopify/restyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Theme } from "../../../utils/theme";
import { Box } from "../../../utils/restyle";
import { Entypo } from "@expo/vector-icons";

interface AddToFavouriteIconProps extends BoxProps<Theme> {
    onPress(): void;
}

const AddToFavouriteIcon: React.FC<AddToFavouriteIconProps> = ({ onPress, ...rest }) => {
    const theme = useTheme<Theme>();
    return (
        <TouchableOpacity onPress={onPress}>
            <Box 
                bg='white'
                justifyContent='center'
                alignItems='center'
                width={30}
                height={30}
                style={{borderRadius: 15}}
                {...rest}
            >
                <Entypo name="heart" size={24} color={theme.colors.black} />
            </Box>
        </TouchableOpacity>
    );
};

export default AddToFavouriteIcon;
