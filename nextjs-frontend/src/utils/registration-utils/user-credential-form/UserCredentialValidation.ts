/*
    This file contains all the validation functions used in the user section of the form.
 */

export const validateFirstName = (firstName: string) => {
    const firstNameRegex = /^[a-zA-Z]{2,}$/i;
    return firstNameRegex.test(firstName.trim());
};

export const validateLastName = (lastName: string) => {
    const lastNameRegex = /^[a-zA-Z]{2,}$/i;
    return lastNameRegex.test(lastName.trim());
};

export const validateEmailAddress = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    return emailRegex.test(email.trim());
};

// Password should be at least 8 characters long, alphanumerical
export const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/;
    return passwordRegex.test(password);
};

export const validateAcceptTermsAndConditions = (acceptTermsAndConditions: boolean) => {
    return acceptTermsAndConditions;
}

