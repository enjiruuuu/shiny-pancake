import { InputErrorMessages } from "../texts";

export default class InputFieldHelper {
    public static checkIfEmpty = (elm: HTMLInputElement): boolean => {
        if (elm.required && elm.value.trim() === '') {
            return true;
        }
 
        return false;
    }

    public static validateEmail = (elm: HTMLInputElement): boolean => {
        const value = elm.value.trim();
        return /^\S+@\S+\.\S+$/.test(value);
    }

    public static isInputValidFormat = (elm: HTMLInputElement): string | null => {
        const type: string = elm.type;
        const value: string = elm.value;

        switch(type) {
            case 'email':
                if (!/^\S+@\S+\.\S+$/.test(value)) {
                    return InputErrorMessages.WrongFormatEmail;
                }
                return null;

            default:
                return null;
        }
    }
}