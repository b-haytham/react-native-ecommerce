import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ComponentsScreen from '../screens/ComponentsScreen'

const Stack = createStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator headerMode='none' initialRouteName='Components'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='Components' component={ComponentsScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack