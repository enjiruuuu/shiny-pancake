import { ChangeEventHandler } from 'react';

type IInputFieldTypes =  'email' | 'password' | 'text';

export interface IInputField {
    label: string;
    type: IInputFieldTypes;
    placeholder?: string;
    required?: boolean;
    onChange?: ChangeEventHandler;
    error?: string | null;
    id?: string;
    defaultValue?: string;
    disabled?: boolean;
}

export interface IDatePicker {
    label: string;
    required?: boolean;
    defaultValue?: string;
    onChange?: ChangeEventHandler;
    error?: string | null;
    id?: string;
}