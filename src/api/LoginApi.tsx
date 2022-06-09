import axios from 'axios';
import Constants from '../models/Constants';
import { HttpStatusCodes } from '../models/Generic';
import { ILoginDetails, ILoginResponse } from '../models/LoginModel';

export default class LoginApi {
    public async login(data: ILoginDetails): Promise<boolean> {
        const res = await axios.get(Constants.baseUrl + '/login', {
            params: data
        });

        const response: ILoginResponse = res.data;
        if (response.httpStatusCode === HttpStatusCodes.SUCCESS) {
            window.localStorage.setItem(Constants.namespace + '_userUuid', response.data?.uuid as string);
            window.localStorage.setItem(Constants.namespace + '_userName', response.data?.name as string);
            Constants.userUuid = window.localStorage.getItem(Constants.namespace + '_userUuid') as string;
            
            return true;
        }
        else {
            throw new Error();
        }
    }
}