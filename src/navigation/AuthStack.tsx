import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ComponentsScreen from '../screens/ComponentsScreen'
import { AuthStackParamList } from './ParmListTypes'

const Stack = createStackNavigator<AuthStackParamList>()

const AuthStack = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack