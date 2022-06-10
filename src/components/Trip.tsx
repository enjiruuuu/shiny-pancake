import '../styles/trip.css';
import GenericHelper from '../helpers/GenericHelper';
import { ITripData } from '../models/TripModel';
import { Countries } from '../countries';
import { useEffect, useState } from 'react';
import NavigationHelper from '../helpers/Navigator';
import KebabIcon from './icons/KebabIcon';
import Popover from './Popover';
import PencilIcon from './icons/PencilIcon';
import BinIcon from './icons/BinIcon';

const Trip: React.FC<ITripData> = (props: any) => {
    const [backgroundImage, setBackgroundImage] = useState<string>('');
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
    const navigator: NavigationHelper = new NavigationHelper();
    
    useEffect(() => {
        if (backgroundImage === '') {
            setBackgroundImage(Countries[props.city].image);
        }
    },[backgroundImage, props.city]);

    function navigateToTripDetails(): void {
        navigator.tripDetails(props.tripUuid);
    }

    function togglePopover(): void {
        setIsPopoverOpen(!isPopoverOpen);
        GenericHelper.toggleScroll();
    }

    return(
        <li>
            <>
                {
                    isPopoverOpen &&
                    <div className='cover' onClick={togglePopover}></div>
                }
            </>
            <div className="c_trip" style={{backgroundImage: 'url('+ backgroundImage +')'}}>
                <div className='background'></div>
                <div className='clickable' onClick={navigateToTripDetails}></div>
                <div>
                    <KebabIcon test={togglePopover} className={'kebabIcon'}></KebabIcon>
                    <>
                        {isPopoverOpen && 
                            <Popover>
                                <button className="tertiary"><PencilIcon></PencilIcon><span>Edit</span></button> 
                                <button className="tertiary"><BinIcon></BinIcon><span>Delete</span></button> 
                            </Popover>
                        }
                    </>
                </div>
                <div className='info'>
                    <h4>{props.name ? props.name : props.city}</h4>
                    <div className="sub_info">
                        {props.name? <span className='city'>{props.city}</span> : null}
                        <span>{GenericHelper.formatDate(new Date(props.startDate))} - {GenericHelper.formatDate(new Date(props.endDate))}</span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Trip;