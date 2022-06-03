import { IDatePicker } from "../models/InputFieldModel";
import '../styles/datepicker.css';

const Datepicker: React.FC<IDatePicker> = (props) => {
    const getToday = (): string => {
        const today: Date = new Date();
        return today.toLocaleDateString('en-SG');
    }

    return (
        <div className="c_datePicker">
            <label>{props.label}</label>
            <input type='date' min={getToday()} required={props.required} onChange={props.onChange}></input>
            <span className="error_message">{props.error}</span>
        </div>
    );
};

export default Datepicker;