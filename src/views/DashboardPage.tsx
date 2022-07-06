import { useEffect, useState } from 'react';
import TripApi from '../api/TripApi';
import Header from '../components/Header';
import PlusIcon from '../components/icons/PlusIcon';
import ModifyTrip from '../components/ModifyTrip';
import Overlay from '../components/Overlay';
import Trip from '../components/Trip';
import Wrapper from '../components/Wrapper';
import GenericHelper from '../helpers/GenericHelper';
import LoginHelper from '../helpers/LoginHelper';
import NavigationHelper from '../helpers/Navigator';
import Constants from '../models/Constants';
import { ITripData } from '../models/TripModel';
import '../styles/dashboard.css';

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
        GenericHelper.toggleScroll();
    };

    const closeNewTrip = (): void => {
        setIsCreatingNewTrip(false);
        GenericHelper.toggleScroll();
    };

    const refreshTrip = ():void => {
        tripApi.getTripsByUserUuid(Constants.userUuid).then((res: ITripData[]) => {
            setTrips(res);
        });
    };

    return (
        <Wrapper>
            <Header></Header>
            <main className='v_dashboard'>
                <h1>Hello, {userName}! 👋</h1>
                <div>
                    {trips.length > 0 &&
                        <div className='dashboard_header'>
                            <h2>Your trips</h2>
                            <button className="tertiary" onClick={openNewTrip}><span>Create new trip</span><PlusIcon fill="#22C55E"></PlusIcon></button>
                        </div>
                    }
                    <ul className="c_trips">
                        <>
                        {trips.length > 0 &&
                            trips.map(({ city, title, endDate, startDate, tripUuid }) => (
                                <Trip key={tripUuid} title={title} city={city} startDate={startDate} endDate={endDate} tripUuid={tripUuid} refreshTrip={refreshTrip}></Trip>
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
                        <ModifyTrip parentCallback = { closeNewTrip } refreshTrip = { refreshTrip } header="Create new trip  🎉"></ModifyTrip>
                    </Wrapper>
                : null
            }
        </Wrapper>
    );
};

export default DashboardPage;