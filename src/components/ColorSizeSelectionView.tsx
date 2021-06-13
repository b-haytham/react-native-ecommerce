import React from "react"
import { } from "react-native"

import { Theme } from "../utils/theme"
import { BoxProps } from "@shopify/restyle"
import { Box } from "../utils/restyle"

interface ColorSizeSelectionViewProps extends BoxProps<Theme> {

}

const ColorSizeSelectionView: React.FC<ColorSizeSelectionViewProps> = ({
    ...rest
}) => {
    return (
        <Box
            {...rest}
        >

        </Box>
    )
}

export default ColorSizeSelectionView