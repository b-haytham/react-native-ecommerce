import { CompositeNavigationProp, RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"

import { AppStackParamList, AuthStackParamList, MainStackParamList } from "./ParmListTypes"

// Auth Stack Navigation Props


export type LoginScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<AuthStackParamList, 'Login'>,
    StackNavigationProp<AppStackParamList>
>
export type RegisterScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<AuthStackParamList, 'Register'>,
    StackNavigationProp<AppStackParamList>
>


// Main Stack Navigation Props
export type HomeScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Home'>,
    StackNavigationProp<AppStackParamList>
>

export type ShopScreenScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Shop_Main'>,
    StackNavigationProp<AppStackParamList>
>

export type BagScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Bag_Main'>,
    StackNavigationProp<AppStackParamList>
>
export type FavouriteScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Favourite_Main'>,
    StackNavigationProp<AppStackParamList>
>
export type ProfileScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Profile_Main'>,
    StackNavigationProp<AppStackParamList>
>


// Auth Stack route Props

export type LoginScreenRouteProps = RouteProp<AuthStackParamList, 'Login'>
export type RegisterScreenRouteProps = RouteProp<AuthStackParamList, 'Register'>

// Main Stack route props

export type HomeScreenRouteProps = RouteProp<MainStackParamList, 'Home'>
export type ShopScreenRouteProps = RouteProp<MainStackParamList, 'Shop_Main'>
export type BagScreenRouteProps = RouteProp<MainStackParamList, 'Bag_Main'>
export type FavouriteScreenRouteProps = RouteProp<MainStackParamList, 'Favourite_Main'>
export type ProfileScreenRouteProps = RouteProp<MainStackParamList, 'Profile_Main'>
