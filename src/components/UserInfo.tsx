import React from 'react'
import { ImageSourcePropType, StyleSheet } from 'react-native'

import { BoxProps } from '@shopify/restyle'
import { Theme } from '../utils/theme'
import { Box, Text } from '../utils/restyle'
import Avatar from './Avatar'

interface UserInfoProps extends BoxProps<Theme> {
    image: ImageSourcePropType
    imageSize: number
    name: string
    email: string
}

const UserInfo: React.FC<UserInfoProps> = ({name, email ,imageSize, image,...rest}) =>{
    return (
        <Box
            {...rest}
            flexDirection='row'
            alignItems='center'    
        >
            <Avatar size={imageSize} source={image} />
            <Box
                marginHorizontal='m'
            >
                <Text variant='headline3'> {name} </Text>
                <Text variant='description' opacity={.4} > {email} </Text>
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default UserInfo