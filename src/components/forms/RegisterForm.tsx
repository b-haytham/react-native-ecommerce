import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

import { useTheme } from '@shopify/restyle'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Theme } from '../../utils/theme'
import { Box } from '../../utils/restyle'
import Input from './form_elements/Input'
import Button from './form_elements/Button'

interface RegisterFormProps{
    onSubmit(data: {username: string, email: string, password: string}): void
}

const RegisterForm: React.FC<RegisterFormProps> = ({onSubmit}) =>{
    const theme = useTheme<Theme>()
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Box>
             <Input
                placeholder="Username"
                textInputProps={{value: username, onChangeText: (v) => setUserName(v)}}
                icon={
                    <MaterialCommunityIcons
                        name="check"
                        size={24}
                        color={theme.colors.success}
                    />
                }
            />
            <Input
                placeholder="E-mail"
                textInputProps={{value: email, onChangeText: (v) => setEmail(v)}}
                icon={
                    <MaterialCommunityIcons
                        name="check"
                        size={24}
                        color={theme.colors.success}
                    />
                }
            />
            <Input
                placeholder="Password"
                password
                textInputProps={{value: password, onChangeText: (v) => setPassword(v)}}
                icon={
                    <MaterialCommunityIcons
                        name="check"
                        size={24}
                        color={theme.colors.success}
                    />
                }
            />
            <Button variant='PRIMARY' title={"REGISTER"} onPress={ () => onSubmit({username, email, password})} />
        </Box>
    )
}

export default RegisterForm