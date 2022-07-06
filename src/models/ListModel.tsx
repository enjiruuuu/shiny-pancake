import { IPlaceData } from './PlaceModel';

export interface IListResponse {
    httpStatusCode: number,
    data: IListData[],
}

export interface IListData {
    listUuid: string;
    name: string;
    ownerUuid: string;
    places: IPlaceData[];
    tripUuid: string;
}