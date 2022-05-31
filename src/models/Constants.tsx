export default class Constants {
    public static namespace: string = '_SP';
    public static baseUrl: string = 'http://127.0.0.1:5000';

    public static userUuid: string = window.sessionStorage.getItem(this.namespace + '_userUuid') as string;
}