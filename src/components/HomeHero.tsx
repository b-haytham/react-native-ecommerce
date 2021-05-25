import { BoxProps } from "@shopify/restyle";
import React from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";
import Button from "./forms/form_elements/Button";

interface HomeHeroProps extends BoxProps<Theme> {
    width: number;
    height: number;
    image: ImageSourcePropType
    onPress(): void
}

const HomeHero: React.FC<HomeHeroProps> = ({onPress, image, width, height, ...rest }) => {
    return (
        <Box width={width} height={height} {...rest}>
            <Image
                style={{width, height}}
                width={width}
                height={height}
                resizeMode="cover"
                source={image}
            />
            <Box position='absolute' bottom={20} left={20}>
                <Text variant='headline' color='white' >Fashion</Text>
                <Text variant='headline' color='white' >Sales</Text>
                <Button variant='PRIMARY' title='Check' onPress={onPress} />
            </Box>
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeHero;
