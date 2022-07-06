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
import ModifyTrip from './ModifyTrip';
import Overlay from './Overlay';
import Popover from './Popover';
import Wrapper from './Wrapper';

const Trip: React.FC<ITripData> = (props: ITripData) => {
    const tripApi = new TripApi();
    const navigator: NavigationHelper = new NavigationHelper();
    
    const [backgroundImage, setBackgroundImage] = useState<string>('');
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState<boolean>(false);
    const [isEditTripModalOpen, setIsEditTripModalOpen] = useState<boolean>(false);
    const [genericError, setGenericError] = useState<string | null>();
    
    useEffect(() => {
        if (backgroundImage === '') {
            const cityObject = GenericHelper.binarySearchCountries(Countries, props.city);
            if (!!cityObject) {
                setBackgroundImage(cityObject.image);
            }
        }
    },[backgroundImage, props.city]);

    function startDate(): string {
        return GenericHelper.formatDate(new Date(props.startDate));
    }

    function endDate(): string {
        return GenericHelper.formatDate(new Date(props.endDate));
    }

    function navigateToTripDetails(): void {
        navigator.tripDetails(props.tripUuid as string);
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
                <h4>{props.title ? props.title : props.city}</h4>
                <div className="sub_info">
                    {props.title ? <span className='city'>{props.city}</span> : null}
                    <span>{startDate()} - {endDate()}</span>
                </div>
            </Wrapper>
        );
    }

    function deleteTrip(): void {
        tripApi.deleteTrip(props.tripUuid as string, Constants.userUuid)
            .then((res: boolean) => {
                toggleDeleteConfirmation();
                setGenericError(null);
                props.refreshTrip?.();
            })
            .catch(() => {
                setGenericError(GenericErrorMessages.SomethingWentWrong);
            });
    }

    function toggleEditModal(): void {
        const newValue: boolean = !isEditTripModalOpen;
        setIsEditTripModalOpen(newValue);

        if (newValue) {
            return setIsPopoverOpen(false);
        }

        GenericHelper.toggleScroll();
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
                    isEditTripModalOpen &&
                    <Wrapper>
                        <Overlay></Overlay>
                        <ModifyTrip city={GenericHelper.binarySearchCountries(Countries, props.city)} title={props.title} startDate={props.startDate} endDate={props.endDate} header="Edit trip ✏️" parentCallback={toggleEditModal} isEdit={true} tripUuid={props.tripUuid} refreshTrip={props.refreshTrip}></ModifyTrip>
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
                                <button className="tertiary" onClick={toggleEditModal}><PencilIcon fill='#333F51'></PencilIcon><span>Edit</span></button> 
                                <button className="tertiary" onClick={toggleDeleteConfirmation}><BinIcon></BinIcon><span>Delete</span></button> 
                            </Popover>
                        }
                    </>
                </div>
                <div className='info'>
                    <h4>{props.title ? props.title : props.city}</h4>
                    <div className="sub_info">
                        {props.title ? <span className='city'>{props.city}</span> : null}
                        <span>{startDate()} - {endDate()}</span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Trip;