import { NavigateFunction, useNavigate } from "react-router-dom";

export default class NavigationHelper {
    private navigate: NavigateFunction = useNavigate();
    private commonNavigator = (path: string) => {
        this.navigate(path, {replace: true});
    }

    public dashboard = () => {
        this.commonNavigator('/dashboard');
    }

    public logout = () => {
        this.commonNavigator('/');
    }
}