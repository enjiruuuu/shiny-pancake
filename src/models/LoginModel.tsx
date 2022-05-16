export interface ILoginDetails {
    email: string,
    password: string,
};

export interface ILoginResponse {
    httpStatusCode: number,
    message: string,
    data?: ILoginSuccessData,
}

interface ILoginSuccessData {
    activated: boolean,
    name: string,
    uuid: string,
}