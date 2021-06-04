import React from 'react'
import { } from 'react-native'

import { BoxProps } from '@shopify/restyle'
import { Box } from '../utils/restyle'
import { Theme } from '../utils/theme'
import Animated from 'react-native-reanimated'

interface OrderDetailViewProps extends BoxProps<Theme> {}

const AnimatedBox = Animated.createAnimatedComponent(Box)

const OrderDetailView: React.FC<OrderDetailViewProps> = ({
    ...rest
}) =>{
    return (
        <AnimatedBox
            {...rest}
        >
            
        </AnimatedBox>
    )
}


export default OrderDetailView