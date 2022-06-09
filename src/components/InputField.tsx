import { IInputField } from '../models/InputFieldModel';
import '../styles/inputField.css';

const InputField: React.FC<IInputField> = (props) => {
    return (
        <div className="c_inputField">
            <label>{props.label}</label>
            <input id={props.id} type={props.type} placeholder={props.placeholder} required={props.required} onChange={props.onChange}></input>
            <span className="error_message">{props.error}</span>
        </div>
    );
};

export default InputField;