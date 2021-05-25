import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import HomeScreen from '../screens/HomeScreen'
import { MainStackParamList } from './ParmListTypes'

const Stack = createSharedElementStackNavigator<MainStackParamList>()

const MainStack = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Home' component={HomeScreen}  />
        </Stack.Navigator>
    )

}
export default MainStack