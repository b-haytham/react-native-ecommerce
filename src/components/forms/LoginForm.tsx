import React, { useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../utils/theme";
import { Box } from "../../utils/restyle";
import Input from "./form_elements/Input";
import Button from "./form_elements/Button";

interface LoginFormProps {
    onSubmit(data: {email:string, password: string}): void
}

const LoginForm: React.FC<LoginFormProps> = ({onSubmit}) => {
    const theme = useTheme<Theme>()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Box>
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
                textInputProps={{value: password, onChangeText: (v) => setPassword(v)}}
                password
                icon={
                    <MaterialCommunityIcons
                        name="check"
                        size={24}
                        color={theme.colors.success}
                    />
                }
            />
            
            <Button variant='PRIMARY' title={"LOGIN"} onPress={() =>  onSubmit({email, password})}  />
        </Box>
    );
};


export default LoginForm;
