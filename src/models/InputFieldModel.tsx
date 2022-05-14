type IInputFieldTypes =  'email' | 'password' | 'text';

export interface IInputField {
    label: string,
    type: IInputFieldTypes,
    placeholder: string,
    required?: boolean,
    error?: string | null,
}