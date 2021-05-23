import React from 'react'
import { StyleSheet } from 'react-native'

import Constants from "expo-constants";

import { BoxProps } from '@shopify/restyle'
import { Theme } from '../utils/theme'
import { Box } from '../utils/restyle'


interface LayoutProps extends BoxProps<Theme>{}

const Layout: React.FC<LayoutProps> = ({children, ...rest}) =>{
    return (
        <Box
            bg='background'
            style={styles.container}
            {...rest}
        >
            {children}
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    }
})

export default Layout