import React from 'react'
import { } from 'react-native'
import Layout from '../components/Layout'
import BottomTab from '../components/navigation/BottomTab'
import { BagScreenNavigationProps, BagScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'
import { useAppSelector } from '../redux/hooks'

interface BagScreenProps{
    navigation: BagScreenNavigationProps
    route: BagScreenRouteProps
}

const BagScreen: React.FC<BagScreenProps> = ({navigation, route}) =>{
    const bagItems = useAppSelector(state => state.bag.bagItems)

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