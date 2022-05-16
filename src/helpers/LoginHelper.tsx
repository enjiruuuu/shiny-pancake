import Constants from "../models/Constants"

export default class LoginHelper {
    public static checkSession = (): boolean => {
        if (window.sessionStorage.getItem(Constants.namespace + '_userUuid') && window.sessionStorage.getItem(Constants.namespace + '_userName')) {
            return true;
        }

        return false;
    }
}