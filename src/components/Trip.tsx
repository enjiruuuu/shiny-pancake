import '../styles/trip.css';
import GenericHelper from "../helpers/GenericHelper";
import { ITripData } from "../models/TripModel";
import { Countries } from '../countries';
import { useEffect, useState } from 'react';
import NavigationHelper from '../helpers/Navigator';

const Trip: React.FC<ITripData> = (props: any) => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const navigator: NavigationHelper = new NavigationHelper();
    
    useEffect(() => {
        if (backgroundImage === '') {
            setBackgroundImage(Countries[props.city].image);
        }
    },[backgroundImage, props.city]);

    function navigateToTripDetails(): void {
        navigator.tripDetails(props.tripUuid);
    }

    return(
        <li className="c_trip" style={{backgroundImage: 'url('+ backgroundImage +')'}} onClick={navigateToTripDetails}>
            <div className='background'></div>
            <div>
                <h4>{props.name ? props.name : props.city}</h4>
                <div className="sub_info">
                    {props.name? <span className='city'>{props.city}</span> : null}
                    <span>{GenericHelper.formatDate(new Date(props.startDate))} - {GenericHelper.formatDate(new Date(props.endDate))}</span>
                </div>
            </div>
        </li>
    );
}

export default Trip;