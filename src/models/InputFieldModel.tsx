import { ChangeEventHandler } from "react";

type IInputFieldTypes =  'email' | 'password' | 'text';

export interface IInputField {
    label: string,
    type: IInputFieldTypes,
    placeholder?: string,
    required?: boolean,
    onChange?: ChangeEventHandler,
    error?: string | null,
}

export interface IDatePicker {
    label: string,
    required?: boolean,
    onChange?: ChangeEventHandler,
    error?: string | null
}