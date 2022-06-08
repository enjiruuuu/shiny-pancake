import Constants from "../models/Constants"

export default class LoginHelper {
    public static checkSession = (): boolean => {
        if (window.localStorage.getItem(Constants.namespace + '_userUuid') && window.localStorage.getItem(Constants.namespace + '_userName')) {
            return true;
        }

        return false;
    }
}