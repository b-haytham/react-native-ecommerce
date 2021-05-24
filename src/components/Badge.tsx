import React from 'react'
import { StyleSheet } from 'react-native'

import { BoxProps } from '@shopify/restyle'
import { Box, Text } from '../utils/restyle'
import { Theme } from '../utils/theme'

interface BadgeProps extends BoxProps<Theme>{
    title: string
}

const Badge: React.FC<BadgeProps> = ({ title, ...rest }) =>{
    return (
        <Box
            justifyContent='center'
            alignItems='center'
            paddingHorizontal='s'
            borderRadius='m'
            {...rest}
        >
            <Text variant='body' color='white'>{title}</Text>
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Badge