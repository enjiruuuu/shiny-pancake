import axios from 'axios';
import Constants from '../models/Constants';
import { HttpStatusCodes } from '../models/Generic';
import { IListData, IListResponse } from '../models/ListModel';

export default class ListApi {
    public async getListsByTripUuid(tripUuid: string): Promise<IListData[]> {
        const res = await axios.get(Constants.baseUrl + '/trips/'+ tripUuid +'/lists');
        const response: IListResponse = res.data;

        if (response.httpStatusCode === HttpStatusCodes.SUCCESS) {
            return response.data;
        }

        return [];
    }
}