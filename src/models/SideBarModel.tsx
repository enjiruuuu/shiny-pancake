export interface ISideBar {
    title?: string;
    city: string;
    startDate: string;
    endDate: string;
    tripUuid: string;
    refreshTrip?: () => void;
}