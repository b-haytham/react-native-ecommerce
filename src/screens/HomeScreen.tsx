import React from 'react'
import {  } from 'react-native'
import Button from '../components/forms/form_elements/Button'
import Layout from '../components/Layout'

import { HomeScreenNavigationProps, HomeScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'

interface HomeScreenProps{
    navigation: HomeScreenNavigationProps
    route: HomeScreenRouteProps
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) =>{
    return (
        <Layout>
            
        </Layout>
    )
}


export default HomeScreen