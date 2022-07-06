import axios from 'axios';
import Constants from '../models/Constants';
import { HttpStatusCodes } from '../models/Generic';
import { IAddTripResponse, ITripData, ITripDetails, ITripResponse } from '../models/TripModel';

export default class TripApi {
    public async getTripsByUserUuid(userUuid: string): Promise<ITripData[]> {
        const res = await axios.get(Constants.baseUrl + '/users/'+ userUuid +'/trips');
        const response: ITripResponse = res.data;

        if (response.httpStatusCode === HttpStatusCodes.SUCCESS) {
            return response.data;
        }

        return [];
    }

    public async getSpecificTrip(userUuid: string, tripUuid: string): Promise<ITripData | null> {
        const res = await axios.get(Constants.baseUrl + '/users/'+ userUuid +'/trips/' + tripUuid);
        const response = res.data;

        if (response.httpStatusCode === HttpStatusCodes.SUCCESS) {
            return response.data;
        }

        return null;
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

    public async updateTrip(data: ITripDetails, tripUuid: string): Promise<boolean> {
        const res = await axios.patch(Constants.baseUrl + '/trips/'+ tripUuid + '/user/'+ Constants.userUuid +'/update', data);
        const response: IAddTripResponse = res.data;
        if (response.httpStatusCode === HttpStatusCodes.SUCCESS) {
            return true;
        }
        else {
            throw new Error();
        }
    }

    public async deleteTrip(tripUuid: string, userUuid: string): Promise<boolean> {
        const res = await axios.delete(Constants.baseUrl + '/trips/' + tripUuid + '/user/' + userUuid + '/delete');
        const response: IAddTripResponse = res.data;

        if (response.httpStatusCode === HttpStatusCodes.SUCCESS) {
            return true;
        }
        else {
            throw new Error();
        }
    }
}