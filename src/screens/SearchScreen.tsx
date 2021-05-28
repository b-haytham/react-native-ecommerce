import React from 'react'
import { } from 'react-native'
import Layout from '../components/Layout'
import { SearchScreenNavigationProps, SearchScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'

interface SearchScreenProps{
    navigation: SearchScreenNavigationProps
    route: SearchScreenRouteProps
}

const SearchScreen: React.FC<SearchScreenProps> = ({
    navigation,
    route
}) =>{
    return (
        <Layout>

        </Layout>
    )
}

export default SearchScreen