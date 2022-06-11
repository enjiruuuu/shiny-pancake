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
    name?: string;
    endDate: string;
    startDate: string;
    tripUuid?: string;
    ownerUuid?: string;
    refreshTrip?: () => void;
}

export interface ITripDetails {
    ownerUuid: string;
    city: string;
    name?:string;
    endDate: string;
    startDate: string;
}

export interface ICountriesData {
    country: string;
    city: string;
    image: string;
}

export interface ICountriesObject {
    [key: string]: ICountriesData
}