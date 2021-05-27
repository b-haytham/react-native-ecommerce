import React from "react";
import { StatusBar } from 'expo-status-bar'
import { Dimensions, Image, StyleSheet } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import Layout from "../components/Layout";
import {
    ProductDetailScreenNavigationProps,
    ProductDetailScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";

interface ProductDetailProps {
    navigation: ProductDetailScreenNavigationProps;
    route: ProductDetailScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const ProductDetail: React.FC<ProductDetailProps> = ({ navigation, route }) => {
    return (
        <Layout>
            
            <SharedElement id={`image-${route.params.item.id}`}>
                <Image
                    style={{ width, height: height * 0.6 }}
                    source={{ uri: route.params.item.thumbnail! }}
                    
                    width={width}
                    height={height * 0.6}
                />
            </SharedElement>
        </Layout>
    );
};

export default ProductDetail;
