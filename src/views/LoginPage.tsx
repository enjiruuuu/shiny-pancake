import React, { useState } from "react";
import LoginApi from "../api/LoginApi";
import InputField from "../components/InputField";
import InputFieldHelper from "../helpers/InputFieldHelper";
import Navigator from "../helpers/Navigator";
import { ILoginDetails } from "../models/LoginModel";
import { InputErrorMessages, LoginErrorMessages } from "../texts";

const LoginPage = () => {
    const [emailError, setEmailError] = useState<string | null>();
    const [passwordError, setPasswordError] = useState<string | null>();
    const [genericError, setGenericError] = useState<string | null>();

    const loginApi = new LoginApi();
    const navigator: Navigator = new Navigator();

    function handleFormSubmit(e: React.FormEvent): void {
        e.preventDefault();
        resetStates();

        if (!validateFields()) {
            return;
        }

        const emailElm: HTMLInputElement = document.querySelector('input[type="email"]') as HTMLInputElement;
        const passwordElm: HTMLInputElement = document.querySelector('input[type="password"]') as HTMLInputElement;

        const data: ILoginDetails = {
            email: emailElm.value,
            password: passwordElm.value,
        }

        loginApi.login(data).then((res: boolean) => {
            return res ? navigator.dashboard() : setGenericError(LoginErrorMessages.WrongLogin);
        });
    }

    function resetStates(): void {
        setEmailError(null);
        setPasswordError(null);
        setGenericError(null);
    }

    function validateFields(): boolean {
        const validatedEmail: boolean = validateEmail();
        const validatedPassword: boolean = validatePassword();

        if (!validatedEmail || !validatedPassword) {
            return false;
        }

        return true;
    }

    function validateEmail(): boolean {
        const elm: HTMLInputElement = document.querySelector('input[type="email"]') as HTMLInputElement;
        if (InputFieldHelper.checkIfEmpty(elm)) {
            setEmailError(InputErrorMessages.FieldEmpty);
            return false;
        }

        if (!InputFieldHelper.validateEmail(elm)) {
            setEmailError(InputErrorMessages.WrongFormatEmail);
            return false;
        }

        setEmailError(null);
        return true;
    }

    function validatePassword(): boolean {
        const elm: HTMLInputElement = document.querySelector('input[type="password"]') as HTMLInputElement;
        if (InputFieldHelper.checkIfEmpty(elm)) {
            setPasswordError(InputErrorMessages.FieldEmpty);
            return false;
        }

        setPasswordError(null);
        return true;
    }

    return(
        <form onSubmit={handleFormSubmit} noValidate>
            <InputField label="Email" type="email" placeholder="Enter your email" required={true} error={emailError}></InputField>
            <InputField label="Password" type="password" placeholder="Enter your password" required={true} error={passwordError}></InputField>
            { genericError ? <span className="error_message">{ genericError }</span> : null }
            <button type="submit">Submit</button>
        </form>
    );
}

export default LoginPage;