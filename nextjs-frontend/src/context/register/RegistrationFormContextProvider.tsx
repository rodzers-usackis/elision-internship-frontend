import React, { ReactElement, useState } from 'react'
import FormContext from './RegistrationFormContext'

interface WithChildren {
    children: ReactElement | ReactElement[]
}

export default function RegistrationFormContextProvider({ children }: WithChildren) {
    // Company Information Form
    const [companyName, setCompanyName] = useState('')
    const [vatNumber, setVatNumber] = useState('')
    const [companyWebsite, setCompanyWebsite] = useState('')
    const [productType, setProductType] = useState('')

    // Company Address Form
    const [streetAddress, setStreetAddress] = useState('')
    const [streetNumber, setStreetNumber] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [country, setCountry] = useState('')

    // User Credential Form
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    // Errors
    const [errors, setErrors] = useState({ firstName: '', lastName: '', emailAddress: '', password: ''})

    return (
        <FormContext.Provider value={{companyName, setCompanyName, vatNumber, setVatNumber, companyWebsite, setCompanyWebsite, productType, setProductType,
                                        streetAddress, setStreetAddress, streetNumber, setStreetNumber, city, setCity, state, setState,
                                            zipCode, setZipCode, country, setCountry, firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress,
                                                password, setPassword, errors, setErrors}}>
            {children}
        </FormContext.Provider>
    )
}