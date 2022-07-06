export interface IPlace {
    title: string;
    placeId: string;
    description?: string;
    address?: string;
    hours?: string;
}

export interface IPlaceData {
    date: string;
    description: string;
    placeId: string;
}