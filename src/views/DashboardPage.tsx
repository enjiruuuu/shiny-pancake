import '../styles/dashboard.css';
import { useEffect, useState } from 'react';
import TripApi from '../api/TripApi';
import Header from '../components/Header';
import Trip from '../components/Trip';
import Wrapper from '../components/Wrapper';
import LoginHelper from '../helpers/LoginHelper';
import NavigationHelper from '../helpers/Navigator';
import Constants from '../models/Constants';
import { ITripData } from '../models/TripModel';
import PlusIcon from '../components/icons/PlusIcon';
import Overlay from '../components/Overlay';
import NewTrip from '../components/NewTrip';

const DashboardPage = () => {
    const navigator: NavigationHelper = new NavigationHelper();
    const tripApi: TripApi = new TripApi();
    const userName: string = window.localStorage.getItem(Constants.namespace + '_userName') as string;

    const [trips, setTrips] = useState<ITripData[]>([]);
    const [isCreatingNewTrip, setIsCreatingNewTrip] = useState<boolean>(false);

    useEffect(() => {
        if (!LoginHelper.checkSession()) {
            return navigator.logout();
        }

        tripApi.getTripsByUserUuid(Constants.userUuid).then((res: ITripData[]) => {
            setTrips(res);
        });
    }, []);

    const openNewTrip = (): void => {
        setIsCreatingNewTrip(true);
    };

    const closeNewTrip = (): void => {
        setIsCreatingNewTrip(false);
    };

    const refreshTrip = ():void => {
        tripApi.getTripsByUserUuid(Constants.userUuid).then((res: ITripData[]) => {
            setTrips(res);
        });
    };

    return (
        <Wrapper>
            <Header></Header>
            <main>
                <h1>Hello, {userName}! 👋</h1>
                <div>
                    {trips.length > 0 &&
                        <div className='dashboard_header'>
                            <h2>Your trips</h2>
                            <button className="tertiary" onClick={openNewTrip}><span>Create new trip</span><PlusIcon></PlusIcon></button>
                        </div>
                    }
                    <ul className="c_trips">
                        <>
                        {trips.length > 0 &&
                            trips.map(({ city, name, endDate, startDate, tripUuid }) => (
                                <Trip key={tripUuid} name={name} city={city} startDate={startDate} endDate={endDate} tripUuid={tripUuid}></Trip>
                            ))
                        }
                        {trips.length === 0 &&
                            <div className='empty_trip_container'>
                                 <h2>You do not have any trips yet</h2>
                                <button className="primary" onClick={openNewTrip}>Create new trip</button>
                            </div>
                        }
                        </>
                    </ul>
                </div>
            </main>

            {
                isCreatingNewTrip ? 
                    <Wrapper>
                        <Overlay></Overlay>
                        <NewTrip parentCallback = { closeNewTrip } refreshTrip = { refreshTrip }></NewTrip>
                    </Wrapper>
                : null
            }
        </Wrapper>
    );
};

export default DashboardPage;