import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { AppStackParamList } from './ParmListTypes'

import AuthStack from './AuthStack'

const Stack = createStackNavigator<AppStackParamList>()


const AppStack = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Auth' component={AuthStack} />
        </Stack.Navigator>
    )
}

export default AppStack