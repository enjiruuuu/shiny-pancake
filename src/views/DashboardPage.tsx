import React, { useEffect } from "react";
import Header from "../components/Header";
import LoginHelper from "../helpers/LoginHelper";
import NavigationHelper from "../helpers/Navigator";

const DashboardPage = () => {
    const  navigator: NavigationHelper = new NavigationHelper();

    useEffect(() => {
        if (!LoginHelper.checkSession()) {
            navigator.logout();
        }
    });

    return (
        <Header></Header>
    );
}

export default DashboardPage;