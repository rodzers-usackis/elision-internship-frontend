import {
    validateFirstName,
    validateLastName,
    validateEmailAddress,
    validatePassword,
} from "../../registration-utils/user-credential-form/UserCredentialValidation";

import {UserCredentialFormFields} from "../../../model/registration-models/UserCredentialFormFields";

import FormContext from "../../../context/register/RegistrationFormContext";

export function validateUserCredentialFields(userCredentialFormFields : UserCredentialFormFields) {
    let newErrors = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
    }

    if (!validateFirstName(userCredentialFormFields.firstName)) {
        newErrors.firstName = 'Please enter a valid first name';
    } else {
        newErrors.firstName = '';
    }

    if (!validateLastName(userCredentialFormFields.lastName)) {
        newErrors.lastName = 'Please enter a valid last name';
    } else {
        newErrors.lastName = '';
    }

    if (!validateEmailAddress(userCredentialFormFields.emailAddress)) {
        newErrors.emailAddress = 'Please enter a valid email address';
    } else {
        newErrors.emailAddress = '';
    }

    if (!validatePassword(userCredentialFormFields.password)) {
        newErrors.password = 'Password must be 8 characters or more and include at least one letter and one number';
    } else {
        newErrors.password = '';
    }

    return (newErrors);
}