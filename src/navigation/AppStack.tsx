import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { AppStackParamList } from './ParmListTypes'

import AuthStack from './AuthStack'
import MainStack from './MainStack'
import OnBoardingScreen from '../screens/OnBoardingScreen'

const Stack = createStackNavigator<AppStackParamList>()

const AppStack = () => {
    return (
        <Stack.Navigator headerMode='none' screenOptions={{gestureEnabled: false}}>
            <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
            <Stack.Screen name='Auth' component={AuthStack} />
            <Stack.Screen  name='Main' component={MainStack} />
        </Stack.Navigator>
    )
}

export default AppStack