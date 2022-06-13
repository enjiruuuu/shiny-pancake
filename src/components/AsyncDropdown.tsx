import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import '../styles/asyncDropdown.css';

const AsyncDropdown: React.FC<any> = (props: any) => {
    const [inputValue, setInputValue] = useState('');

    function filterData(inputValue: string) {
        return props.data.filter((i: any) =>
          i.label?.toLowerCase().includes(inputValue.toLowerCase())
        );
      };

    function loadOptions (inputValue: string, callback: (options: any) => void) {
        callback(filterData(inputValue));
    };

    function handleInputChange (newValue: string) {
        setInputValue(newValue);
        return inputValue;
    };

    return (
        <div className='c_asyncDropdown'>
            <label>{props.label}</label>
            <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                onInputChange={handleInputChange}
                className='react-select-container'
                classNamePrefix='react-select'
                placeholder={props.placeholder}
                onChange={props.onChange}
                defaultValue={props.defaultValue}
                id={props.id}
                isDisabled={props.isEdit}
                defaultOptions={props.defaultOptions}
            />
            <span className="error_message">{props.error}</span>
        </div>
    );
};

export default AsyncDropdown;
