import Constants from "../models/Constants";

export default class TripHelper {
    private userUuid: string = window.sessionStorage.getItem(Constants.namespace + '_userUuid') as string;

    public getTripsByUserUuid = () => {
        
    }
}