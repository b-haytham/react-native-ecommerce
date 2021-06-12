import React from "react";
import { Dimensions } from "react-native";

import { BoxProps } from "@shopify/restyle";
import { Theme } from "../utils/theme";
import { Box } from "../utils/restyle";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring,
} from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";
import {
    PanGestureHandlerGestureEvent,
    PanGestureHandler,
} from "react-native-gesture-handler";
import { snapPoint } from "react-native-redash";
import { Image } from "react-native";

import { SharedElement } from "react-navigation-shared-element";

interface ImageCarouselProps extends BoxProps<Theme> {
    thumbnail: string;
    images: string[];
    imageHeight?: number;
    imageWidth?: number;
    productId: number;
}

const { width, height } = Dimensions.get("screen");

const AnimatedBox = Animated.createAnimatedComponent(Box);

const ImageCarousel: React.FC<ImageCarouselProps> = ({
    thumbnail,
    images,
    imageHeight,
    imageWidth,
    productId,
    ...rest
}) => {
    const translateX = useSharedValue(0);
    const BOX_WIDTH = (images.length + 1) * width;

    const snapPoints = new Array(images.length + 1)
        .fill(null)
        .map((item, i) => -width * i);

    const styles = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: withSpring(translateX.value, {
                    overshootClamping: true,
                    restSpeedThreshold: 0.01,
                }),
            },
        ],
    }));

    const gestureHandler = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        { startX: number }
    >({
        onStart: (_, ctx) => {
            ctx.startX = translateX.value;
        },
        onActive: (event, ctx) => {
            translateX.value = ctx.startX + event.translationX;
        },
        onEnd: (e) => {
            translateX.value = snapPoint(
                translateX.value,
                e.velocityX,
                snapPoints
            );
        },
    });
    return (
        <PanGestureHandler onGestureEvent={gestureHandler}>
            <AnimatedBox
                width={BOX_WIDTH}
                flexDirection="row"
                style={styles}
                {...rest}
            >
                <SharedElement id={`image-${productId}`}>
                    <Image
                        resizeMode={"cover"}
                        style={{
                            width: imageWidth ? imageWidth : width,
                            height: imageHeight ? imageHeight : height * 0.4,
                        }}
                        source={{ uri: thumbnail }}
                    />
                </SharedElement>
                {images.map((m, index) => (
                    <Image
                        key={index}
                        resizeMode={"cover"}
                        style={{
                            width: imageWidth ? imageWidth : width,
                            height: imageHeight ? imageHeight : height * 0.4,
                        }}
                        source={{ uri: m }}
                    />
                ))}
            </AnimatedBox>
        </PanGestureHandler>
    );
};

export default ImageCarousel;
