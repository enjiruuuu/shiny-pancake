import { useState } from "react";
import Card from "./Card";
import Datepicker from "./Datepicker";
import CloseIcon from "./icons/CloseIcon";
import InputField from "./InputField";

// TODO: refactor to follow LoginPage structure and method

const NewTrip: React.FC<any> = (props) => {
    const [destinationInput, setDestinationInput] = useState<string | undefined>(undefined);
    const [tripTitleInput, setTripTitleInput] = useState<string | undefined>(undefined);
    const [startDateInput, setStartDateInput] = useState<string | undefined>(undefined);
    const [endDateInput, setEndDateInput] = useState<string | undefined>(undefined);

    const closeCard = (): void => {
        props.parentCallback();
    }

    const createNewTrip = (e: React.FormEvent): void => {
        e.preventDefault();
    }

    const validateFields = (): boolean => {
        if (!destinationInput || !startDateInput || !endDateInput) {
            return false;
        }

        return true;
    }

    const setDestinationValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDestinationInput(e.target.value);
    }

    const setTripTitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTripTitleInput(e.target.value);
    }

    const setStartDateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDateInput(e.target.value);
    }

    const setEndDateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndDateInput(e.target.value);
    }

    return (
        <Card>
            <div className="card_header">
                <h2>Create new trip  🎉</h2>
                <button className="icon" onClick={closeCard}><CloseIcon></CloseIcon></button>
            </div>

            <form onSubmit={createNewTrip} noValidate>
                <InputField label="Destination" type="text" placeholder="Start typing here..." required={true} onChange={setDestinationValue}></InputField>
                <InputField label="Custom trip title (optional)" type="text" placeholder="Type here" onChange={setTripTitleValue}></InputField>
                <Datepicker label="Start date" required={true} onChange={setStartDateValue}></Datepicker>
                <Datepicker label="End date" required={true} onChange={setEndDateValue}></Datepicker>
                <button type="submit" className="primary">Submit</button>
            </form>
        </Card>
    );
};

export default NewTrip;