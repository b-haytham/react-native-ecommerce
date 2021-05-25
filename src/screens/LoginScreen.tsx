import React from 'react'
import { StyleSheet } from 'react-native'

import { LoginScreenNavigationProps, LoginScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'
import { Text } from '../utils/restyle'

import Social from '../components/forms/form_elements/Social'
import LoginForm from '../components/forms/LoginForm'
import Layout from '../components/Layout'
interface LoginScreenProps{
    navigation: LoginScreenNavigationProps
    route: LoginScreenRouteProps
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) =>{
    return (
        <Layout p='l'>
            <Text variant="headline" mt='xl' mb='xl'>Login</Text>
            <LoginForm onSubmit={(data) => navigation.navigate('Main', {screen: 'Home'})} />
            <Social title='Or Login with social account' />
        </Layout>
    )
}

export default LoginScreen