import { CompositeNavigationProp, RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"

import { AppStackParamList, AuthStackParamList } from "./ParmListTypes"

// Auth Stack Navigation Props


export type LoginScreenNavigationProps = CompositeNavigationProp<
StackNavigationProp<AuthStackParamList, 'Login'>,
StackNavigationProp<AppStackParamList>
>
export type RegisterScreenNavigationProps = CompositeNavigationProp<
StackNavigationProp<AuthStackParamList, 'Register'>,
StackNavigationProp<AppStackParamList>
>


// Auth Stack route Props

export type LoginScreenRouteProps = RouteProp<AuthStackParamList, 'Login'>
export type RegisterScreenRouteProps = RouteProp<AuthStackParamList, 'Register'>
