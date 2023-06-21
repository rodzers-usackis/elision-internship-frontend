import React, {createContext} from 'react';

export interface RegistrationFormContext {
    // Company Information Form
    companyName: string;
    setCompanyName: (value: string) => void;

    vatNumber: string;
    setVatNumber: (value: string) => void;

    companyWebsite: string;
    setCompanyWebsite: (value: string) => void;

    productCategory: string[];
    setProductCategory: (value: string[]) => void;


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

    acceptTermsAndConditions: boolean;
    setAcceptTermsAndConditions: (value: boolean) => void;


    // Company Information Form Field Errors
    companyInformationFormFieldErrors: {
        companyName: string;
        vatNumber: string;
        companyWebsite: string;
        productCategory: string;
    };

    setCompanyInformationFormFieldErrors: (value: {
        companyName: string;
        vatNumber: string;
        companyWebsite: string;
        productCategory: string;
    }) => void;

    // Company Address Form Field Errors
    companyAddressFormFieldErrors: {
        streetAddress: string;
        streetNumber: string;
        city: string;
        zipCode: string;
        country: string;
    }

    setCompanyAddressFormFieldErrors: (value: {
        streetAddress: string;
        streetNumber: string;
        city: string;
        zipCode: string;
        country: string;
    }) => void;

    // User Credential Form Field Errors
    userCredentialFormFieldErrors: {
        firstName: string;
        lastName: string;
        emailAddress: string;
        password: string;
        acceptTermsAndConditions: string;
    }

    setUserCredentialFormFieldErrors: (value: {
        firstName: string;
        lastName: string;
        emailAddress: string;
        password: string;
        acceptTermsAndConditions: string;
    }) => void;
}

export default createContext<RegistrationFormContext>({
        // Company Information Form
        companyName: '',
        setCompanyName: (value: string) => {
        },

        vatNumber: '',
        setVatNumber: (value: string) => {
        },

        companyWebsite: '',
        setCompanyWebsite: (value: string) => {
        },

        productCategory: [''],
        setProductCategory: (value: string[]) => {
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

        acceptTermsAndConditions: false,
        setAcceptTermsAndConditions: (value: boolean) => {
        },

        companyInformationFormFieldErrors: {
            companyName: '',
            vatNumber: '',
            companyWebsite: '',
            productCategory: '',
        },

        setCompanyInformationFormFieldErrors: (value: {
            companyName: string;
            vatNumber: string;
            companyWebsite: string;
            productCategory: string;
        }) => {
        },

        companyAddressFormFieldErrors: {
            streetAddress: '',
            streetNumber: '',
            city: '',
            zipCode: '',
            country: '',
        },

        setCompanyAddressFormFieldErrors: (value: {
            streetAddress: string;
            streetNumber: string;
            city: string;
            zipCode: string;
            country: string;
        }) => {
        },

        userCredentialFormFieldErrors: {
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: '',
            acceptTermsAndConditions: '',
        },

        setUserCredentialFormFieldErrors: (value: {
            firstName: string;
            lastName: string;
            emailAddress: string;
            password: string;
            acceptTermsAndConditions: string;
        }) => {
        },
    }
)