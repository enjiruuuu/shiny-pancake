import { NavigateFunction, useNavigate } from "react-router-dom";
import Constants from "../models/Constants";

export default class NavigationHelper {
    private navigate: NavigateFunction = useNavigate();
    private commonNavigator = (path: string) => {
        this.navigate(path, {replace: true});
    }

    public dashboard = () => {
        this.commonNavigator('/dashboard');
    }

    public logout = () => {
        window.sessionStorage.removeItem(Constants.namespace + '_userUuid');
        window.sessionStorage.removeItem(Constants.namespace + '_userName');
        this.commonNavigator('/');
    }
}