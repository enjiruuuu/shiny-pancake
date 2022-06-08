import axios from "axios";
import Constants from "../models/Constants";
import { HttpStatusCodes } from "../models/Generic";
import { IAddTripResponse, ITripData, ITripDetails, ITripResponse } from "../models/TripModel";

export default class TripApi {
    public async getTripsByUserUuid(userUuid: string): Promise<ITripData[]> {
        const res = await axios.get(Constants.baseUrl + '/users/'+ userUuid +'/trips')
        const response: ITripResponse = res.data;

        if (response.httpStatusCode === HttpStatusCodes.SUCCESS) {
            return response.data;
        }

        return [];
    }

    public async addTrip(data: ITripDetails): Promise<boolean> {
        const res = await axios.put(Constants.baseUrl + '/trips/create', data);
        const response: IAddTripResponse = res.data;

        if (response.httpStatusCode === HttpStatusCodes.SUCCESS) {
            return true;
        }
        else {
            throw new Error();
        }
    }
}