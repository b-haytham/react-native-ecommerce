import { BoxProps } from "@shopify/restyle";
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface SelectableColorsProps extends BoxProps<Theme> {
    items: string[] | [];
    value: string;
    onChange(value: string): void;
}

const SelectableColors: React.FC<SelectableColorsProps> = ({
    items = [],
    value,
    onChange,
    ...rest
}) => {
    const [selected, setSelected] = useState(value);

    return (
        <Box {...rest}>
            <ScrollView
                style={{ flex: 1 }}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {items.length > 0 &&
                    items.map((it, index) => (
                        <Box
                            key={index}
                            marginHorizontal="s"
                            justifyContent="center"
                            alignItems="center"
                            width={30}
                            height={30}
                            borderWidth={selected === it ? 1 : 0}
                            style={{ borderRadius: selected === it ? 15 : 0 }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    setSelected(it);
                                    onChange(it);
                                }}
                            >
                                <Box
                                    width={25}
                                    height={25}
                                    style={{
                                        borderRadius: 12,
                                        backgroundColor: it.toLowerCase(),
                                    }}
                                ></Box>
                            </TouchableOpacity>
                        </Box>
                    ))}
            </ScrollView>
        </Box>
    );
};

export default SelectableColors;
