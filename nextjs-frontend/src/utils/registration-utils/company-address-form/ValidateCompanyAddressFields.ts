import {
    validateStreetAddress,
    validateStreetNumber,
    validateCity,
    validateZipCode,
    validateCountry
} from "./CompanyAddressValidation";

import {CompanyAddressFormFields} from "../../../model/registration-models/CompanyAddressFormFields";

export function validateCompanyAddressFields(companyAddressFormFields : CompanyAddressFormFields) {
    let newErrors = {
        streetAddress: '',
        streetNumber: '',
        city: '',
        zipCode: '',
        country: '',
    }

    if (!validateStreetAddress(companyAddressFormFields.streetAddress)) {
        newErrors.streetAddress = 'Please enter a valid street address';
    } else {
        newErrors.streetAddress = '';
    }

    if (!validateStreetNumber(companyAddressFormFields.streetNumber)) {
        newErrors.streetNumber = 'Please enter a valid street number';
    } else {
        newErrors.streetNumber = '';
    }

    if (!validateCity(companyAddressFormFields.city)) {
        newErrors.city = 'Please enter a valid city';
    } else {
        newErrors.city = '';
    }

    if (!validateZipCode(companyAddressFormFields.zipCode)) {
        newErrors.zipCode = 'Please enter a valid zip code';
    } else {
        newErrors.zipCode = '';
    }

    if (!validateCountry(companyAddressFormFields.country)) {
        newErrors.country = 'Please enter a valid country';
    } else {
        newErrors.country = '';
    }

    return (newErrors);
}