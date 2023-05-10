import React, { createContext } from 'react';

export interface RegistrationFormContext {
    // Company Information Form
    companyName: string;
    setCompanyName: (value: string) => void;

    companyWebsite: string;
    setCompanyWebsite: (value: string) => void;

    productType: string;
    setProductType: (value: string) => void;


    // Company Address Form
    streetAddress: string;
    setStreetAddress: (value: string) => void;

    streetNumber: string;
    setStreetNumber: (value: string) => void;

    city: string;
    setCity: (value: string) => void;

    state: string;
    setState: (value: string) => void;

    zipCode: string;
    setZipCode: (value: string) => void;

    country: string;
    setCountry: (value: string) => void;


    // User Credential Form
    firstName: string;
    setFirstName: (value: string) => void;

    lastName: string;
    setLastName: (value: string) => void;

    emailAddress: string;
    setEmailAddress: (value: string) => void;

    password: string;
    setPassword: (value: string) => void;


    // Errors
    errors: {
        firstName: string;
        lastName: string;
        emailAddress: string;
        password: string;
    };

    setErrors: (value: {
        firstName: string;
        lastName: string;
        emailAddress: string;
        password: string;
    }) => void;
}

export default createContext<RegistrationFormContext>({
        // Company Information Form
        companyName: '',
        setCompanyName: (value: string) => {
        },

        companyWebsite: '',
        setCompanyWebsite: (value: string) => {
        },

        productType: '',
        setProductType: (value: string) => {
        },

        // Company Address Form
        streetAddress: '',
        setStreetAddress: (value: string) => {
        },

        streetNumber: '',
        setStreetNumber: (value: string) => {
        },

        city: '',
        setCity: (value: string) => {
        },

        state: '',
        setState: (value: string) => {
        },

        zipCode: '',
        setZipCode: (value: string) => {
        },

        country: '',
        setCountry: (value: string) => {
        },

        // User Credential Form
        firstName: '',
        setFirstName: (value: string) => {
        },

        lastName: '',
        setLastName: (value: string) => {
        },

        emailAddress: '',
        setEmailAddress: (value: string) => {
        },

        password: '',
        setPassword: (value: string) => {
        },

        errors: {
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: '',
        },
        setErrors: (value: {
            firstName: string;
            lastName: string;
            emailAddress: string;
            password: string;
        }) => {
        },
    }
)