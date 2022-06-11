export interface ITripResponse {
    httpStatusCode: number,
    data: ITripData[],
}

export interface IAddTripResponse {
    httpStatusCode: number,
    message: string,
}

export interface ITripData {
    city: string;
    title?: string;
    endDate: string;
    startDate: string;
    tripUuid?: string;
    ownerUuid?: string;
    refreshTrip?: () => void;
}

export interface ITripDetails {
    ownerUuid?: string;
    tripUuid?: string;
    city?: string;
    title?:string;
    endDate?: string;
    startDate?: string;
}

export interface IModifyTrip extends ITripDetails {
    header: string;
    isEdit?: boolean;
    parentCallback?: () => void;
    refreshTrip?: () => void;
}

export interface ICountriesData {
    country: string;
    city: string;
    image: string;
}

export interface ICountriesObject {
    [key: string]: ICountriesData
}