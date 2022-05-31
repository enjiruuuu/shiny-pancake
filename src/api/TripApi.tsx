import axios from "axios";
import Constants from "../models/Constants";
import { HttpStatusCodes } from "../models/Generic";
import { ITripData, ITripResponse } from "../models/TripModel";

export default class TripApi {
    public async getTripsByUserUuid(userUuid: string): Promise<ITripData[]> {
        const res = await axios.get(Constants.baseUrl + '/users/'+ userUuid +'/trips');
        const response: ITripResponse = res.data;

        if (response.httpStatusCode === HttpStatusCodes.SUCCESS) {
            return response.data;
        }

        return [];
    }
}