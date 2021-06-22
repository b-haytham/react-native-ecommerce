import React, { useState } from "react";
import {} from "react-native";

import { BoxProps, useTheme } from "@shopify/restyle";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";

import Animated, {
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ExitIcon from "./forms/form_elements/ExitIcon";
import Selectables from "./Selectables";
import SelectableColors from "./SelectableColors";
import Button from "./forms/form_elements/Button";

interface FilterViewProps extends BoxProps<Theme> {
    width: number;
    height: number;
    onClose(): void;
    translateY: Animated.SharedValue<number>;
    onApply(filters: {
        category: string;
        sub_category: string;
        color: string;
    }): void;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

const FilterView: React.FC<FilterViewProps> = ({
    width,
    height,
    onClose,
    translateY,
    onApply,
    ...rest
}) => {
    const theme = useTheme<Theme>();

    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [selectedSubCategory, setSelectedSubCategory] = useState("ALL");
    const [selectedColor, setSelectedColor] = useState("Black");
    const styles = useAnimatedStyle(() => ({
        transform: [{ translateY: withTiming(translateY.value) }],
    }));
    return (
        <AnimatedBox
            width={width}
            height={height}
            borderTopLeftRadius="xl"
            borderTopRightRadius="xl"
            bg="white"
            elevation={20}
            position={"absolute"}
            bottom={0}
            zIndex={7777777}
            style={styles}
            {...rest}
        >
            <Box position="absolute" top={-15} left={width / 2 - 15}>
                <TouchableOpacity>
                    <ExitIcon onPress={onClose} />
                </TouchableOpacity>
            </Box>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, marginTop: theme.spacing.xl }}
            >
                <Box>
                    <Box marginVertical="m">
                        <Text
                            paddingHorizontal="m"
                            variant="body2"
                            opacity={0.5}
                        >
                            SELECT CATEGORY
                        </Text>
                        <Selectables
                            marginVertical="s"
                            value={selectedCategory}
                            items={["ALL", "MEN", "WOMEN", "KIDS"]}
                            onChange={(v) => setSelectedCategory(v)}
                        />
                    </Box>
                    <Box marginVertical="m">
                        <Text
                            paddingHorizontal="m"
                            variant="body2"
                            opacity={0.5}
                        >
                            SELECT SUB-CATEGORY
                        </Text>
                        <Selectables
                            marginVertical="s"
                            value={selectedSubCategory}
                            items={[
                                "ALL",
                                "JEANS",
                                "SHIRTS",
                                "SHOES",
                                "MONTRE",
                                "LUNETTE",
                            ]}
                            onChange={(v) => setSelectedSubCategory(v)}
                        />
                    </Box>
                    <Box marginVertical="m">
                        <Text
                            paddingHorizontal="m"
                            variant="body2"
                            opacity={0.5}
                        >
                            SELECT COLOR
                        </Text>
                        <SelectableColors
                            marginVertical="s"
                            value={selectedColor}
                            items={[
                                "Black",
                                "Blue",
                                "Red",
                                "Cyan",
                                "Green",
                                "Yellow",
                            ]}
                            onChange={(v) => setSelectedColor(v)}
                        />
                    </Box>
                    <Box paddingHorizontal="m">
                        <Button
                            title="APPLY"
                            variant="PRIMARY"
                            onPress={() =>
                                onApply({
                                    category: selectedCategory,
                                    sub_category: selectedSubCategory,
                                    color: selectedColor,
                                })
                            }
                        />
                    </Box>
                </Box>
            </ScrollView>
        </AnimatedBox>
    );
};

export default FilterView;
