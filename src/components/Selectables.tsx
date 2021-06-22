import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { BoxProps } from "@shopify/restyle";
import { Box } from "../utils/restyle";
import { Theme } from "../utils/theme";
import Chip from "./Chip";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SelectablesProps extends BoxProps<Theme> {
    items: string[] | [];
    value: string;
    onChange(value: string): void;
}

const Selectables: React.FC<SelectablesProps> = ({
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
                    items.map((it, index) => {
                        return (
                            <Chip
                                marginHorizontal="s"
                                maxWidth={150}
                                borderWidth={selected === it ? 1 : 0}
                                overflow="hidden"
                                bg={selected === it ? "white" : "darkColor"}
                                borderRadius="m"
                                textProps={{
                                    color: selected === it ? "black" : "white",
                                }}
                                key={index}
                                name={it}
                                onPress={() => {
                                    setSelected(it);
                                    onChange(it);
                                }}
                            />
                        );
                    })}
            </ScrollView>
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Selectables;
