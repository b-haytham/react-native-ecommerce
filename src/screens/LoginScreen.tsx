import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Layout from '../components/Layout'
import BottomTab from '../components/navigation/BottomTab'

interface LoginScreenProps{}

const LoginScreen: React.FC<LoginScreenProps> = ({}) =>{
    return (
        <Layout>
            <BottomTab 
                route_name="Home" 
                position='absolute'
                bottom={0}
            />
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default LoginScreen