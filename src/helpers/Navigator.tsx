import { NavigateFunction, useNavigate } from "react-router-dom";

export default class Navigator {
    private navigate: NavigateFunction = useNavigate();

    public dashboard = () => {
        this.navigate('/dashboard', {replace: true})
    }
}