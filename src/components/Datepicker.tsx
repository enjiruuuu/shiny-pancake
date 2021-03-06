import { IDatePicker } from '../models/InputFieldModel';
import '../styles/datepicker.css';

const Datepicker: React.FC<IDatePicker> = (props) => {
    const getToday = (): string => {
        const today: Date = new Date();
        return today.toLocaleDateString('en-SG');
    };

    return (
        <div className="c_datePicker">
            <label>{props.label}</label>
            <input id={props.id} type='date' min={getToday()} required={props.required} onChange={props.onChange} defaultValue={props.defaultValue}></input>
            <span className="error_message">{props.error}</span>
        </div>
    );
};

export default Datepicker;