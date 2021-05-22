import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface RegisterScreenProps{}

const RegisterScreen: React.FC<RegisterScreenProps> = ({}) =>{
    return (
        <View style={styles.container}>
            <Text>RegisterScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default RegisterScreen