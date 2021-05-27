import React from "react";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import {
    UserReviewsScreenNavigationProps,
    UserReviewsScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";

interface UserReviewsScreenProps {
    navigation: UserReviewsScreenNavigationProps;
    route: UserReviewsScreenRouteProps;
}

const UserReviewsScreen: React.FC<UserReviewsScreenProps> = ({
    route,
    navigation,
}) => {
    return (
        <Layout>
            <BottomTab
                elevation={5}
                route_name={route.name}
                position="absolute"
                bottom={0}
            />
        </Layout>
    );
};

export default UserReviewsScreen;
