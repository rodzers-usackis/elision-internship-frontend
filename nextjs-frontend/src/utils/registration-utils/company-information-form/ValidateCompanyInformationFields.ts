import {useContext} from "react";

import {
    validateCompanyName,
    validateVatNumber,
    validateCompanyWebsite,
    validateProductType
} from './CompanyInformationValidation';

import {CompanyInformationFormFields} from "../../../model/registration-models/CompanyInformationFormFields";
import FormContext from "../../../context/register/RegistrationFormContext";

export function validateCompanyInformationFields(companyInformationFormFields : CompanyInformationFormFields) {
    let newErrors = {
        companyName: '',
        vatNumber: '',
        companyWebsite: '',
        productCategory: '',
    }

    if (!validateCompanyName(companyInformationFormFields.companyName)) {
        newErrors.companyName = 'Please enter a valid company name';
    } else {
        newErrors.companyName = '';
    }

    if (!validateVatNumber(companyInformationFormFields.vatNumber)) {
        newErrors.vatNumber = 'Please enter a valid VAT number';
    } else {
        newErrors.vatNumber = '';
    }

    if (!validateCompanyWebsite(companyInformationFormFields.companyWebsite)) {
        newErrors.companyWebsite = 'Please enter a valid website';
    } else {
        newErrors.companyWebsite = '';
    }

    if (!validateProductType(companyInformationFormFields.productCategory)) {
        newErrors.productCategory = 'Please select a product category';
    } else {
        newErrors.productCategory = '';
    }

    return (newErrors);
}