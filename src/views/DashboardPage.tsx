import { useEffect } from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import LoginHelper from "../helpers/LoginHelper";
import NavigationHelper from "../helpers/Navigator";
import Constants from "../models/Constants";

const DashboardPage = () => {
    const navigator: NavigationHelper = new NavigationHelper();
    const userName: string = window.sessionStorage.getItem(Constants.namespace + '_userName') as string;

    useEffect(() => {
        if (!LoginHelper.checkSession()) {
            navigator.logout();
        }
    });

    return (
        <Wrapper>
            <Header></Header>
            <main>
                <h1>Hello, {userName}! 👋</h1>
                <div>
                    <div>
                        <h2>Your trips</h2>
                        <button className="tertiary">Create new trip</button>
                    </div>
                </div>
            </main>
        </Wrapper>
    );
}

export default DashboardPage;