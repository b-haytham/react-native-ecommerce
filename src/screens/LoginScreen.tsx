import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface LoginScreenProps{}

const LoginScreen: React.FC<LoginScreenProps> = ({}) =>{
    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default LoginScreen