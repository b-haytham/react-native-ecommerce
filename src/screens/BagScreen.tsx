import React from 'react'
import { } from 'react-native'
import Layout from '../components/Layout'
import BottomTab from '../components/navigation/BottomTab'
import { BagScreenNavigationProps, BagScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'

interface BagScreenProps{
    navigation: BagScreenNavigationProps
    route: BagScreenRouteProps
}

const BagScreen: React.FC<BagScreenProps> = ({navigation, route}) =>{
    return (
        <Layout>
            <BottomTab
                route_name={route.name}
                position='absolute'
                bottom={0}
            />
        </Layout>
    )
}

export default BagScreen