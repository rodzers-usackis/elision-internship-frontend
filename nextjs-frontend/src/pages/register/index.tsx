import * as React from 'react';
import Swal from 'sweetalert2';
// import {Box, Button, Card, Grid, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import UserCredentialForm from '../../components/register/UserCredentialForm';
import CompanyInformationForm from '../../components/register/CompanyInformationForm';
import CompanyAddressForm from '../../components/register/CompanyAddressForm';
import styles from '../../styles/Register.module.css'
import {useRouter} from 'next/router'
import {register} from '../../services/api/authentication';
import {useContext, useEffect, useState} from 'react';
import FormContext from '../../context/register/RegistrationFormContext';
import {validateCompanyInformationFields} from "../../utils/registration-utils/company-information-form/ValidateCompanyInformationFields";
import {validateCompanyAddressFields} from "../../utils/registration-utils/company-address-form/ValidateCompanyAddressFields";
import {validateUserCredentialFields} from "../../utils/registration-utils/user-credential-form/ValidateUserCredentialFields";
import {RegistrationForm} from "../../model/RegistrationForm";
import {CompanyInformationFormFields} from "<components>/model/registration-models/CompanyInformationFormFields";
import {CompanyAddressFormFields} from "<components>/model/registration-models/CompanyAddressFormFields";
import {UserCredentialFormFields} from "<components>/model/registration-models/UserCredentialFormFields";

const steps = ['Company Information', 'Company Address', 'Account Information'];

function getStepContent(step: number) {
    switch (step) {
        case 1:
            return <CompanyInformationForm/>;
        case 2:
            return <CompanyAddressForm/>;
        case 3:
            return <UserCredentialForm/>;
        default:
            throw new Error('Unknown step');
    }
}

export default function Register() {
    const router = useRouter();

    // Steps for registration form
    const MAX_STEP = 3;
    const [currentStep, setCurrentStep] = useState(1);

    // States from RegistrationFormContextProvider
    const {
        companyName,
        vatNumber,
        companyWebsite,
        productCategory,
        setCompanyInformationFormFieldErrors
    } = useContext(FormContext);

    const companyInformationFormFields: CompanyInformationFormFields = {
        companyName: companyName.trim(),
        vatNumber: vatNumber.trim(),
        companyWebsite: companyWebsite.trim(),
        productCategory: productCategory
    };

    const {
        streetAddress,
        streetNumber,
        city,
        zipCode,
        country,
        setCompanyAddressFormFieldErrors
    } = useContext(FormContext);

    let companyAddressFormFields : CompanyAddressFormFields = {
        streetAddress: streetAddress.trim(),
        streetNumber: streetNumber.trim(),
        city: city.trim(),
        zipCode: zipCode.trim(),
        country: country.trim()
    }

    const {
        firstName,
        lastName,
        emailAddress,
        password,
        setUserCredentialFormFieldErrors
    } = useContext(FormContext);

    const userCredentialFormFields : UserCredentialFormFields = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        emailAddress: emailAddress.trim(),
        password: password.trim()
    }

    const registrationFormFields: RegistrationForm = {
        ...companyInformationFormFields,
        ...companyAddressFormFields,
        ...userCredentialFormFields
    }

    // Handle button click for previous step
    const handleBack = () => {
        if (currentStep === 1) {
            return;
        }

        setCurrentStep(currentStep - 1);
    }

    // Handle button click for next step / submit
// Handle button click for next step / submit
    const handleNext = () => {
        if (currentStep > MAX_STEP) {
            return;
        }

        let newErrors = {};

        switch (currentStep) {
            case 1:
                // Validate company information fields
                const companyInformationErrors = validateCompanyInformationFields(companyInformationFormFields);
                setCompanyInformationFormFieldErrors(companyInformationErrors);
                newErrors = companyInformationErrors;
                break;

            case 2:
                // Validate company address fields
                const companyAddressErrors = validateCompanyAddressFields(companyAddressFormFields);
                setCompanyAddressFormFieldErrors(companyAddressErrors);
                newErrors = companyAddressErrors; // Update newErrors state
                break;

            case 3:
                // Validate user credential fields
                const userCredentialErrors = validateUserCredentialFields(userCredentialFormFields);
                setUserCredentialFormFieldErrors(userCredentialErrors);
                newErrors = userCredentialErrors; // Update newErrors state
                break;

            default:
                break;
        }

        if (!Object.values(newErrors).some((x) => x !== '') && currentStep < MAX_STEP) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const userCredentialErrors = validateUserCredentialFields(userCredentialFormFields);
        setUserCredentialFormFieldErrors(userCredentialErrors);

        if (!Object.values(userCredentialErrors).some((x) => x !== '')) {
            event.preventDefault();

            register(registrationFormFields).then((response) => {
                console.log(response);

                switch (response.status) {
                    case 200:
                    case 201:
                        Swal.fire({
                            icon: 'success',
                            title: 'Registration Successful',
                            text: 'Your account has been registered successfully',
                            confirmButtonText: 'OK',
                        }).then(() => {
                            router.push('/login');
                        });
                        break;
                    case 409:
                        Swal.fire({
                            icon: 'error',
                            title: 'Registration Failed',
                            text: response.message,
                            confirmButtonText: 'OK',
                        });
                        break;
                    default:
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            confirmButtonText: 'Return to home page',
                            footer: "<a href='#'>Contact customer support?</a>",
                        });
                        break;
                }
            });
        }
    }


    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            className={styles.registerWrapper}
            paddingX={2}
        >
            <Card sx={{width: 600}}>
                <Grid container sx={{display: 'flex', flexDirection: 'column'}} paddingX={4}>
                    <Grid item paddingTop={3} paddingBottom={1}
                          sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 0.5}}
                    >
                        <KeyboardArrowLeftIcon onClick={handleBack} sx={{
                            ...(currentStep !== 1 && {
                                cursor: 'pointer',
                            })
                        }
                        }/>
                        <Typography sx={{fontSize: '14px'}}>
                            Step {currentStep} of {MAX_STEP}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant='h5' component='div'>
                            {steps[currentStep - 1]}
                        </Typography>
                    </Grid>

                    {getStepContent(currentStep)}

                    <Grid item paddingTop={2} paddingBottom={3}>
                        {currentStep === 3 ? (
                            <Button className={styles.cardButton} onClick={handleSubmit} size={'large'}
                                    fullWidth={true}>
                                Create Account
                            </Button>
                        ) : (
                            <Button className={styles.cardButton} onClick={handleNext} size={'large'}
                                    fullWidth={true}>
                                Next Step
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}