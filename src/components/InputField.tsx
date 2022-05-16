import { IInputField } from "../models/InputFieldModel";

const InputField: React.FC<IInputField> = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} required={props.required}></input>
            <span className="error_message">{props.error}</span>
        </div>
    );
};

export default InputField;