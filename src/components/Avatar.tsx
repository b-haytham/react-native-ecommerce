import React from 'react'
import { Image, ImageSourcePropType, StyleSheet } from 'react-native'

import { BoxProps } from '@shopify/restyle'
import { Box } from '../utils/restyle'
import { Theme } from '../utils/theme'

interface AvatarProps extends BoxProps<Theme>{
    size: number
    source: ImageSourcePropType
}

const Avatar: React.FC<AvatarProps> = ({source ,size, ...rest}) =>{
    return (
        <Box
            {...rest}
            style={{borderRadius: size / 2}}
        >
            <Image
                width={size}
                height={size}
                style={{width: size,height: size, borderRadius: size / 2, borderWidth:2, borderColor: 'red' }}
                resizeMode='cover'
                source={source}
            />
        </Box>
    )
}


export default Avatar