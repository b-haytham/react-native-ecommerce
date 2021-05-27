import { NavigatorScreenParams } from "@react-navigation/core"
import { Product } from "../redux/data_types"

export type AppStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>
    Main: NavigatorScreenParams<MainStackParamList>
}

export type AuthStackParamList = {
    Login: undefined
    Register: undefined
    ResetPassword: undefined
}

export type MainStackParamList = {
    Home: undefined
    Shop_Main: undefined
    Bag_Main: undefined
    Favourite_Main: undefined
    Profile_Main: undefined
    Profile_Orders: undefined
    Profile_ShippingAddresses: undefined
    Profile_Reviews: undefined
    Profile_Settings: undefined
    Shop_Product_Detail: {
        item: Product
    } 
}

