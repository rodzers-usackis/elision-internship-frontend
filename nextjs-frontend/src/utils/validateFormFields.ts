// import {
//     validateCompanyName,
//     validateVatNumber,
//     validateCompanyWebsite,
//     validateProductType,
// } from './registration-utils/company-information-form/CompanyInformationValidation';
//
// import {
//     validateStreetAddress,
//     validateStreetNumber,
//     validateCity,
//     validateZipCode,
//     validateCountry,
// } from './registration-utils/company-address-form/CompanyAddressValidation';
//
// import {
//     validateFirstName,
//     validateLastName,
//     validateEmailAddress,
//     validatePassword,
// } from './registration-utils/user-credential-form/UserCredentialValidation';
//
// import {RegistrationForm} from "../model/RegistrationForm";
//
// /*
//     This file validates the form fields.
//  */
// export const validateFormFields = (registrationFormFields: RegistrationForm) => {
//
//     let newErrors = {
//         companyName: '',
//         vatNumber: '',
//         companyWebsite: '',
//         productCategory: '',
//         streetAddress: '',
//         streetNumber: '',
//         city: '',
//         zipCode: '',
//         country: '',
//         firstName: '',
//         lastName: '',
//         emailAddress: '',
//         password: ''
//     }
//
//     if (!validateCompanyName(registrationFormFields.companyName)) {
//         newErrors.companyName = 'Company name must contain at least 2 letters';
//     } else {
//         newErrors.companyName = '';
//     }
//
//     if (!validateVatNumber(registrationFormFields.vatNumber)) {
//         newErrors.vatNumber = 'VAT number must contain at least 2 letters';
//     } else {
//         newErrors.vatNumber = '';
//     }
//
//     if (!validateCompanyWebsite(registrationFormFields.companyWebsite)) {
//         newErrors.companyWebsite = 'Company website must contain at least 2 letters';
//     } else {
//         newErrors.companyWebsite = '';
//     }
//
//     if (!validateProductType(registrationFormFields.productCategory)) {
//         newErrors.productCategory = 'Product category must be selected';
//     } else {
//         newErrors.productCategory = '';
//     }
//
//     if (!validateStreetAddress(registrationFormFields.streetAddress)) {
//         newErrors.streetAddress = 'Street address must contain at least 2 letters';
//     } else {
//         newErrors.streetAddress = '';
//     }
//
//     if (!validateStreetNumber(registrationFormFields.streetNumber)) {
//         newErrors.streetNumber = 'Street number must contain at least 2 letters';
//     } else {
//         newErrors.streetNumber = '';
//     }
//
//     if (!validateCity(registrationFormFields.city)) {
//         newErrors.city = 'City must contain at least 2 letters';
//     } else {
//         newErrors.city = '';
//     }
//
//     if (!validateZipCode(registrationFormFields.zipCode)) {
//         newErrors.zipCode = 'Zip code must contain at least 2 letters';
//     } else {
//         newErrors.zipCode = '';
//     }
//
//     if (!validateCountry(registrationFormFields.country)) {
//         newErrors.country = 'Country must contain at least 2 letters';
//     } else {
//         newErrors.country = '';
//     }
//
//     if (!validateFirstName(registrationFormFields.firstName)) {
//         newErrors.firstName = 'First name must contain at least 2 letters';
//     } else {
//         newErrors.firstName = '';
//     }
//
//     if (!validateLastName(registrationFormFields.lastName)) {
//         newErrors.lastName = 'First name must contain at least 2 letters';
//     } else {
//         newErrors.lastName = '';
//     }
//
//     if (!validateEmailAddress(registrationFormFields.emailAddress)) {
//         newErrors.emailAddress = 'Invalid email address';
//     } else {
//         newErrors.emailAddress = '';
//     }
//
//     if (!validatePassword(registrationFormFields.password)) {
//         newErrors.password = 'Password must be at least 8 characters long, must contain one uppercase/lowercase and at least one number';
//     } else {
//         newErrors.password = '';
//     }
//
//     return newErrors;
// }