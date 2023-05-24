/*
    This file contains the validation schema for the company information form.
 */

export const validateCompanyName = (companyName: string) => {
    // Company name should be at least 2 characters long
    return companyName.trim().length >= 2;
};

export const validateVatNumber = (vatNumber: string) => {
    // VAT number should be a valid alphanumeric value
    const vatNumberRegex = /^[a-zA-Z0-9]+$/i;
    return vatNumberRegex.test(vatNumber.trim());
};

export const validateCompanyWebsite = (companyWebsite: string) => {
    // Company website should be a valid URL
    const websiteRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;
    return websiteRegex.test(companyWebsite.trim());
};

export const validateProductType = (productType: string[]) => {
    // Product type should not be empty
    return productType.length > 0 && productType.every((type) => type.trim().length >= 2);
};