import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListApi from '../api/ListApi';
import TripApi from '../api/TripApi';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Wrapper from '../components/Wrapper';
import Constants from '../models/Constants';
import { IListData } from '../models/ListModel';
import { ITripData } from '../models/TripModel';
import '../styles/tripDetails.css';

const TripDetails = () => {
    const tripApi: TripApi = new TripApi();
    const listApi: ListApi = new ListApi();
    let { id } = useParams();
    
    const [tripDetails, setTripDetails] = useState<ITripData>();
    const [lists, setLists] = useState<IListData[]>();

    useEffect(() => {
        tripApi.getSpecificTrip(Constants.userUuid, id as string).then((res: ITripData | null) => {
            if (res !== null) {
                setTripDetails(res);
            }
        });

        listApi.getListsByTripUuid(id as string).then((res: IListData[] | null) => {
            if (res !== null) {
                setLists(res);
                console.log(res);
            }
        });
    }, []);

    function getTrip(): void {
        tripApi.getSpecificTrip(Constants.userUuid, id as string).then((res: ITripData | null) => {
            if (res !== null) {
                setTripDetails(res);
            }
        });
    }

    return(
        <Wrapper>
            <Header></Header>
            <main className='v_tripDetails'>
                <SideBar title={tripDetails?.title} city={tripDetails?.city as string} startDate={tripDetails?.startDate as string} endDate={tripDetails?.endDate as string} tripUuid={tripDetails?.tripUuid as string} refreshTrip={getTrip}></SideBar>
            </main>
        </Wrapper>
    );
};

export default TripDetails;