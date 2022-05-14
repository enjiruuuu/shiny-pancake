import React, { useState } from "react";
import InputField from "../components/InputField";
import InputFieldHelper from "../helpers/InputFieldHelper";
import { ErrorMessages } from "../texts";

const LoginPage = () => {
    const [emailError, setEmailError] = useState<string | null>();
    const [passwordError, setPasswordError] = useState<string | null>();
    let hasError = false;
    

    function handleFormSubmit(e: React.FormEvent): void {
        e.preventDefault();

        validateEmail();
        validatePassword();

        if (hasError) {
            return;
        }

        //add method after form submit
    }

    function validateEmail(): boolean {
        const elm: HTMLInputElement = document.querySelector('input[type="email"]') as HTMLInputElement;
        if (InputFieldHelper.checkIfEmpty(elm)) {
            setEmailError(ErrorMessages.FieldEmpty);
            hasError = true;
            return false;
        }

        if (!InputFieldHelper.validateEmail(elm)) {
            setEmailError(ErrorMessages.WrongFormatEmail);
            hasError = true;
            return false;  
        }

        setEmailError(null);
        return true;
    }

    function validatePassword(): boolean {
        const elm: HTMLInputElement = document.querySelector('input[type="password"]') as HTMLInputElement;
        if (InputFieldHelper.checkIfEmpty(elm)) {
            setPasswordError(ErrorMessages.FieldEmpty);
            hasError = true;
            return false;
        }

        setPasswordError(null);
        return true;
    }

    return(
        <form onSubmit={handleFormSubmit} noValidate>
            <InputField label="Email" type="email" placeholder="Enter your email" required={true} error={emailError}></InputField>
            <InputField label="Password" type="password" placeholder="Enter your password" required={true} error={passwordError}></InputField>
            <button type="submit">Submit</button>
        </form>
    );
}

export default LoginPage;