import React, { ReactNode } from "react";
import { Image, StyleSheet } from "react-native";

import { BoxProps } from "@shopify/restyle";
import { Box, Text } from "../../utils/restyle";
import { Theme } from "../../utils/theme";

interface CategoryCardProps extends BoxProps<Theme> {
    width: number;
    height: number;
    image: string;
    title: string;
    icon: ReactNode;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    width,
    height,
    image,
    title,
    icon,
    ...rest
}) => {
    return (
        <Box
            width={width}
            height={height}
            {...rest}
            borderRadius="s"
            overflow="hidden"
        >
            <Image
                style={StyleSheet.absoluteFillObject}
                width={width}
                height={height}
                resizeMode="cover"
                source={{ uri: image }}
            />
            <Box position="absolute" bottom={10} left={10}>
                <Text variant="headline" color="white">
                    {title}
                </Text>
            </Box>
            <Box position="absolute" bottom={10} right={30}>
                {icon}
            </Box>
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CategoryCard;
