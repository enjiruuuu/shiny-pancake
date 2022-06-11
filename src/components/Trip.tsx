import { useEffect, useState } from 'react';
import TripApi from '../api/TripApi';
import { Countries } from '../countries';
import GenericHelper from '../helpers/GenericHelper';
import NavigationHelper from '../helpers/Navigator';
import Constants from '../models/Constants';
import { ITripData } from '../models/TripModel';
import '../styles/trip.css';
import { GenericErrorMessages } from '../texts';
import ConfirmationModal from './ConfirmationModal';
import BinIcon from './icons/BinIcon';
import KebabIcon from './icons/KebabIcon';
import PencilIcon from './icons/PencilIcon';
import Overlay from './Overlay';
import Popover from './Popover';
import Wrapper from './Wrapper';

const Trip: React.FC<ITripData> = (props: any) => {
    const tripApi = new TripApi();
    const navigator: NavigationHelper = new NavigationHelper();
    
    const [backgroundImage, setBackgroundImage] = useState<string>('');
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState<boolean>(false);
    const [genericError, setGenericError] = useState<string | null>();
    
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

    function toggleDeleteConfirmation(): void {
        const newValue: boolean = !isDeleteConfirmationOpen;
        setIsDeleteConfirmationOpen(newValue);

        if (newValue) {
            return setIsPopoverOpen(false);
        }

        GenericHelper.toggleScroll();
        
    }

    function tripDetails(): JSX.Element {
        return (
            <Wrapper>
                <h4>{props.name ? props.name : props.city}</h4>
                <div className="sub_info">
                    {props.name ? <span className='city'>{props.city}</span> : null}
                    <span>{GenericHelper.formatDate(new Date(props.startDate))} - {GenericHelper.formatDate(new Date(props.endDate))}</span>
                </div>
            </Wrapper>
        );
    }

    function deleteTrip(): void {
        tripApi.deleteTrip(props.tripUuid, Constants.userUuid)
            .then((res: boolean) => {
                toggleDeleteConfirmation();
                setGenericError(null);
                props.refreshTrip();
            })
            .catch(() => {
                setGenericError(GenericErrorMessages.SomethingWentWrong);
            });
    }

    function resetStates(): void {
        setIsPopoverOpen(false);
        setIsDeleteConfirmationOpen(false);
    }
    
    return(
        <li>
            <>
                {
                    isDeleteConfirmationOpen &&
                    <Wrapper>
                        <Overlay></Overlay>
                        <ConfirmationModal title='Delete this trip?' details={tripDetails()} confirmationText='Delete' parentCallback={toggleDeleteConfirmation} onConfirm={deleteTrip} genericError={genericError as string}></ConfirmationModal>
                    </Wrapper>
                }
            </>
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
                                <button className="tertiary" onClick={toggleDeleteConfirmation}><BinIcon></BinIcon><span>Delete</span></button> 
                            </Popover>
                        }
                    </>
                </div>
                <div className='info'>
                    <h4>{props.name ? props.name : props.city}</h4>
                    <div className="sub_info">
                        {props.name ? <span className='city'>{props.city}</span> : null}
                        <span>{GenericHelper.formatDate(new Date(props.startDate))} - {GenericHelper.formatDate(new Date(props.endDate))}</span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Trip;