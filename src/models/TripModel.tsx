export interface ITripResponse {
    httpStatusCode: number,
    data: ITripData[],
}

export interface ITripData {
    city: string,
    name?: string,
    endDate: string,
    startDate: string,
    tripUuid?: string,
    ownerUuid?: string,
}