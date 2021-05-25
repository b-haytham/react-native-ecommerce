import React from 'react'
import { } from 'react-native'
import Layout from '../components/Layout'
import BottomTab from '../components/navigation/BottomTab'
import { ProfileScreenNavigationProps, ProfileScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'

interface ProfileScreenProps{
    navigation: ProfileScreenNavigationProps
    route: ProfileScreenRouteProps
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation, route}) =>{
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

export default ProfileScreen