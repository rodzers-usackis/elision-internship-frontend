/*
    This file contains all the validation functions used in the company address section of the form.
 */

export const validateStreetAddress = (streetAddress: string) => {
    // Street address should not be empty and should be at least 2 characters long
    return streetAddress.trim().length >= 2;
};

export const validateStreetNumber = (streetNumber: string) => {
    // Street number should be a valid alphanumeric value and at least 2 characters long
    const streetNumberRegex = /^[a-zA-Z0-9]+$/i;
    return streetNumberRegex.test(streetNumber.trim());
};

export const validateCity = (city: string) => {
    // City should not be empty and should be at least 2 characters long
    return city.trim().length >= 2;
};

export const validateState = (state: string) => {
    // State should not be empty and should be at least 2 characters long
    return state.trim().length >= 2;
};

export const validateZipCode = (zipCode: string) => {
    // Zip code should be a valid alphanumeric value
    const zipCodeRegex = /^[a-zA-Z0-9]+$/i;
    return zipCodeRegex.test(zipCode.trim());
};

export const validateCountry = (country: string) => {
    // Country should not be empty and should be at least 2 characters long
    return country.trim().length >= 2;
};