import { useState } from 'react';
import TripApi from '../api/TripApi';
import InputFieldHelper from '../helpers/InputFieldHelper';
import Constants from '../models/Constants';
import { ITripDetails } from '../models/TripModel';
import '../styles/newTrip.css';
import { GenericErrorMessages, InputErrorMessages } from '../texts';
import Card from './Card';
import Datepicker from './Datepicker';
import CloseIcon from './icons/CloseIcon';
import InputField from './InputField';

const NewTrip: React.FC<any> = (props) => {
    const tripApi = new TripApi();

    const [destinationError, setDestinationError] = useState<string | null>();
    const [startDateError, setStartDateError] = useState<string | null>();
    const [endDateError, setEndDateError] = useState<string | null>();
    const [genericError, setGenericError] = useState<string | null>();

    const closeCard = (): void => {
        props.parentCallback();
    };

    const createNewTrip = (e: React.FormEvent): void => {
        e.preventDefault();
        resetStates();
        
        if(!validateFields()) {
            return;
        }

        const destinationElm: HTMLInputElement = document.querySelector('#f_destination') as HTMLInputElement;
        const titleElm: HTMLInputElement = document.querySelector('#f_tripTitle') as HTMLInputElement;
        const startDateElm: HTMLInputElement = document.querySelector('#f_startDate') as HTMLInputElement;
        const endDateElm: HTMLInputElement = document.querySelector('#f_endDate') as HTMLInputElement;

        const data: ITripDetails = {
            ownerUuid: Constants.userUuid as string,
            city: destinationElm.value,
            name: titleElm.value,
            endDate: endDateElm.value,
            startDate: startDateElm.value,
        };
        
        tripApi.addTrip(data)
            .then((res: boolean) => {
                resetStates();
                closeCard();
                props.refreshTrip();
            })
            .catch(() => {
                setGenericError(GenericErrorMessages.SomethingWentWrong);
            });
    };

    const validateFields = (): boolean => {
        const validatedDestination: boolean = validateDestination();
        const validatedStartDate: boolean = validateStartDate();
        const validatedEndDate: boolean = validateEndDate();

        if (!validatedDestination  || !validatedStartDate || !validatedEndDate) {
            return false;
        }

        return true;
    };

    function resetStates(): void {
        setDestinationError(null);
        setStartDateError(null);
        setEndDateError(null);
        setGenericError(null);
    }

    function validateDestination(): boolean {
        const elm: HTMLInputElement = document.querySelector('#f_destination') as HTMLInputElement;
        if (InputFieldHelper.checkIfEmpty(elm)) {
            setDestinationError(InputErrorMessages.FieldEmpty);
            return false;
        }

        setDestinationError(null);
        return true;
    }

    function validateStartDate(): boolean {
        const elm: HTMLInputElement = document.querySelector('#f_startDate') as HTMLInputElement;
        if (InputFieldHelper.checkIfEmpty(elm)) {
            setStartDateError(InputErrorMessages.FieldEmpty);
            return false;
        }

        setStartDateError(null);
        return true;
    }

    function validateEndDate(): boolean {
        const elm: HTMLInputElement = document.querySelector('#f_endDate') as HTMLInputElement;
        if (InputFieldHelper.checkIfEmpty(elm)) {
            setEndDateError(InputErrorMessages.FieldEmpty);
            return false;
        }

        setEndDateError(null);
        return true;
    }

    return (
        <div className="v_newTrip">
            <Card>
            <div className="card_header">
                <h2>Create new trip  🎉</h2>
                <button className="icon" onClick={closeCard}><CloseIcon></CloseIcon></button>
            </div>

            <form onSubmit={createNewTrip} noValidate>
                <InputField id="f_destination" label="Destination" type="text" placeholder="Start typing here..." required={true} error={destinationError}></InputField>
                <InputField id="f_tripTitle" label="Custom trip title (optional)" type="text" placeholder="Type here"></InputField>
                <Datepicker id="f_startDate" label="Start date" required={true} error={startDateError}></Datepicker>
                <Datepicker id="f_endDate" label="End date" required={true} error={endDateError}></Datepicker>
                { genericError ? <span className="error_message">{ genericError }</span> : null }
                <button type="submit" className="primary">Submit</button>
            </form>
        </Card>
        </div>
    );
};

export default NewTrip;