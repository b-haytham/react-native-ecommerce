import React, { ReactNode } from 'react'
import { Dimensions, StyleSheet } from 'react-native'

import { BoxProps } from '@shopify/restyle'
import { Box, Text } from '../../utils/restyle'
import { Theme } from '../../utils/theme'

interface HeaderProps extends BoxProps<Theme>{
    title: string
    left_icon?: ReactNode
    right_icon?: ReactNode
}

const { width, height } = Dimensions.get('screen')

const Header: React.FC<HeaderProps> = ({ title, left_icon, right_icon, ...rest}) =>{
    return (
        <Box
        width={width}
        borderBottomRightRadius='m'
        borderBottomLeftRadius='m'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        bg='white'
        paddingHorizontal='s'
        paddingTop='xl'
        paddingBottom='m'
            {...rest}
        >
            {left_icon ? left_icon : <Box p='m' /> }
            <Text variant='headline2'>{title}</Text>
            {right_icon ? right_icon :  <Box p='m' />}
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Header