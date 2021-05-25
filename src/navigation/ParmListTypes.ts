import { NavigatorScreenParams } from "@react-navigation/core"

export type AppStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>
}

export type AuthStackParamList = {
    Login: undefined
    Register: undefined
    ResetPassword: undefined
}

