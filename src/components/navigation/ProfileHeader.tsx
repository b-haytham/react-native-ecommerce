import React, { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

import Constants from 'expo-constants'

import { BoxProps, useTheme } from "@shopify/restyle";
import { Theme } from "../../utils/theme";
import { Box, Text } from "../../utils/restyle";

import Avatar from "../Avatar";

interface ProfileHeaderProps extends BoxProps<Theme> {
    header_width: number;
    header_height: number;
    avatar_size: number;
    avatar_source: ImageSourcePropType;
    right_icon?: ReactNode
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
    header_width,
    header_height,
    avatar_size,
    avatar_source,
    right_icon,
    ...rest
}) => {
    const theme = useTheme<Theme>()
    return (
        <Box
            width={header_width}
            position="absolute"
            elevation={10}
            bg="primary"
            height={header_height}
            borderBottomLeftRadius="xl"
            borderBottomRightRadius="xl"
            {...rest}
        >
            <Box
                position="absolute"
                top={Constants.statusBarHeight + theme.spacing.m}
                right={theme.spacing.m}
            >
               {right_icon && right_icon}
            </Box>
            <Box
                marginHorizontal="m"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                style={{
                    marginTop: Constants.statusBarHeight + theme.spacing.m,
                }}
            >
                <Text variant="headline2" color="white">
                    Profile
                </Text>
            </Box>
            <Box
                zIndex={50}
                position="absolute"
                top={header_height - 40}
                left={header_width / 2 - 40}
                elevation={15}
            >
                <Avatar
                    size={avatar_size}
                    source={avatar_source}
                />
            </Box>
        </Box>
    );
};

export default ProfileHeader;
