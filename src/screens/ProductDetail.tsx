import React from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, ScrollView, StyleSheet } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import Layout from "../components/Layout";
import {
    ProductDetailScreenNavigationProps,
    ProductDetailScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";
import ExitIcon from "../components/forms/form_elements/ExitIcon";

import Constants from "expo-constants";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../utils/theme";
import Carousel from "react-native-snap-carousel";
import Chip from "../components/Chip";
import Button from "../components/forms/form_elements/Button";

interface ProductDetailProps {
    navigation: ProductDetailScreenNavigationProps;
    route: ProductDetailScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const IMAGE_HEIGHT = height * 0.6;

const ProductDetail: React.FC<ProductDetailProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();
    return (
        <Layout no_padding>
            <ScrollView>
                <Box
                    width={width}
                    height={IMAGE_HEIGHT}
                    borderBottomLeftRadius="l"
                    borderBottomRightRadius="l"
                    overflow={"hidden"}
                >
                    <Box
                        zIndex={555}
                        position={"absolute"}
                        top={Constants.statusBarHeight + theme.spacing.m}
                        right={theme.spacing.m}
                    >
                        <ExitIcon onPress={() => navigation.goBack()} />
                    </Box>
                    <SharedElement id={`image-${route.params.item.id}`}>
                    <Image
                        style={{ width, height: IMAGE_HEIGHT }}
                        source={{ uri: route.params.item.thumbnail! }}
                        resizeMode="cover"
                        width={width}
                        height={height * 0.6}
                    />
                </SharedElement>
                    {/* <Carousel
                        data={route.params.item.images}
                        keyExtractor={(item, index) => index.toString()}
                        sliderWidth={width}
                        itemWidth={width}
                        renderItem={({ item }: { item: string }) => (
                            <SharedElement id={`image-${route.params.item.id}`}>
                                <Image
                                    style={{ width, height: IMAGE_HEIGHT }}
                                    source={{ uri: item }}
                                    resizeMode="cover"
                                    width={width}
                                    height={height * 0.6}
                                />
                            </SharedElement>
                        )}
                    /> */}
                </Box>
                <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    margin="m"
                >
                    <Box flex={2}>
                        <Text variant="description" opacity={0.5}>
                            {route.params.item.brand.display_name}
                        </Text>
                        <Text variant="headline3">
                            {route.params.item.display_name}
                        </Text>
                    </Box>
                    <Box flex={1} alignItems="flex-end">
                        <Text variant="body2">{`${route.params.item.price} DT`}</Text>
                    </Box>
                </Box>
                <Box>
                    <Text margin="m" variant="body2" opacity={0.5}>
                        AVAILABLE SIZES
                    </Text>
                    <Box
                        flexDirection="row"
                        flexWrap="wrap"
                        marginHorizontal="m"
                    >
                        <Box
                            marginRight="s"
                            marginBottom="s"
                            bg="darkColor"
                            borderRadius={"m"}
                            justifyContent={"center"}
                            alignItems="center"
                            width={100}
                            height={40}
                        >
                            <Text color="white">S</Text>
                        </Box>
                        <Box
                            marginRight="s"
                            marginBottom="s"
                            bg="darkColor"
                            borderRadius={"m"}
                            justifyContent={"center"}
                            alignItems="center"
                            width={100}
                            height={40}
                        >
                            <Text color="white">M</Text>
                        </Box>
                        <Box
                            marginRight="s"
                            marginBottom="s"
                            bg="darkColor"
                            borderRadius={"m"}
                            justifyContent={"center"}
                            alignItems="center"
                            width={100}
                            height={40}
                        >
                            <Text color="white">L</Text>
                        </Box>
                        <Box
                            marginRight="s"
                            marginBottom="s"
                            bg="darkColor"
                            borderRadius={"m"}
                            justifyContent={"center"}
                            alignItems="center"
                            width={100}
                            height={40}
                        >
                            <Text color="white">XL</Text>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Text margin="m" variant="body2" opacity={0.5}>
                        AVAILABLE COLORS
                    </Text>
                    <Box
                        flexDirection="row"
                        flexWrap="wrap"
                        marginHorizontal="m"
                    >
                        <Box
                            marginRight="s"
                            style={{
                                backgroundColor: "black",
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                            }}
                        />
                        <Box
                            marginRight="s"
                            style={{
                                backgroundColor: "red",
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                            }}
                        />
                        <Box
                            marginRight="s"
                            style={{
                                backgroundColor: "blue",
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                            }}
                        />
                        <Box
                            marginRight="s"
                            style={{
                                backgroundColor: "green",
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                            }}
                        />
                    </Box>
                </Box>
                <Box>
                    <Text margin="m" variant="body2" opacity={0.5}>
                        PRODUCT DETAILS
                    </Text>
                    <Box>
                        {route.params.item.details.detail_list.map(
                            (d: string, i: number) => (
                                <Box marginBottom='s' key={i} marginHorizontal="m">
                                    <Text variant='body' opacity={.5}>{d}</Text>
                                </Box>
                            )
                        )}
                    </Box>
                </Box>
                <Box marginTop='m' flexDirection='row'>
                    <Box marginHorizontal='m' flex={1}>
                        <Button variant='DEFAULT' title='' onPress={() => {}} />
                    </Box>
                    <Box marginHorizontal='m' flex={1}>

                    <Button variant='PRIMARY' title='' onPress={() => {}} />
                    </Box>
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default ProductDetail;
