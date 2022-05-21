import '../styles/dashboard.css';
import { useEffect, useState } from "react";
import TripApi from "../api/TripApi";
import Header from "../components/Header";
import Trip from "../components/Trip";
import Wrapper from "../components/Wrapper";
import LoginHelper from "../helpers/LoginHelper";
import NavigationHelper from "../helpers/Navigator";
import Constants from "../models/Constants";
import { ITripData } from "../models/TripModel";
import PlusIcon from '../components/icons/PlusIcon';

const DashboardPage = () => {
    const navigator: NavigationHelper = new NavigationHelper();
    const userName: string = window.sessionStorage.getItem(Constants.namespace + '_userName') as string;

    const [trips, setTrips] = useState<ITripData[]>([]);

    useEffect(() => {
        if (!LoginHelper.checkSession()) {
            return navigator.logout();
        }

        const tripApi: TripApi = new TripApi();
        tripApi.getTripsByUserUuid(Constants.userUuid).then((res: ITripData[]) => {
            setTrips(res);
        });
    }, []);

    return (
        <Wrapper>
            <Header></Header>
            <main>
                <h1>Hello, {userName}! 👋</h1>
                <div>
                    <div className='dashboard_header'>
                        <h2>Your trips</h2>
                        <button className="tertiary"><span>Create new trip</span><PlusIcon></PlusIcon></button>
                    </div>
                    <ul className="c_trips">
                        <>
                        {
                            trips.map(({ city, name, endDate, startDate, tripUuid }) => (
                                <Trip key={tripUuid} name={name} city={city} startDate={startDate} endDate={endDate}></Trip>
                            ))
                        }
                        </>
                    </ul>
                </div>
            </main>
        </Wrapper>
    );
}

export default DashboardPage;