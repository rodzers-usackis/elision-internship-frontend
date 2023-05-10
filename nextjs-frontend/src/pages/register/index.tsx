import * as React from 'react';
import Swal from 'sweetalert2';
import {Box, Button, Card, Grid, Typography} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import UserCredentialForm from '../../components/register/UserCredentialForm';
import CompanyInformationForm from '../../components/register/CompanyInformationForm';
import CompanyAddressForm from '../../components/register/CompanyAddressForm';
import styles from '../../styles/Register.module.css'
import {useRouter} from 'next/router'
import {registerUser} from '<components>/services/API';
import {useContext, useEffect, useState} from 'react';
import FormContext from '<components>/context/register/RegistrationFormContext';
import RegistrationFormContextProvider from "<components>/context/register/RegistrationFormContextProvider";

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

interface FormErrors {
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
    password?: string;
}

// Validation
const validateFirstName = (firstName: string) => {
    const firstNameRegex = /^[a-zA-Z]+$/i;
    return firstNameRegex.test(firstName);
}

const validateLastName = (lastName: string) => {
    const lastNameRegex = /^[a-zA-Z]+$/i;
    return lastNameRegex.test(lastName);
}

const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    return emailRegex.test(email);
}

// At least 8 characters long, must contain one uppercase/lowercase and at least one number
const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
    return passwordRegex.test(password);
}

export default function Register() {
    const router = useRouter();

    const MAX_STEP = 3;
    const [currentStep, setCurrentStep] = React.useState(1);

    // States from RegistrationFormContextProvider
    const {firstName} = useContext(FormContext);
    const {lastName} = useContext(FormContext);
    const {emailAddress} = useContext(FormContext);
    const {password} = useContext(FormContext);

    // Tracking state of errors
    const [errors, setErrors] = useState<FormErrors>({});

    // User object to be sent to backend
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: emailAddress,
        password: password
    }

    useEffect(() => {
        // Validate firstName
        if (!firstName) {
            setErrors(errors => ({...errors, firstName: "Please enter your first name."}));
        } else {
            setErrors(errors => ({...errors, firstName: undefined}));
        }

        // Validate lastName
        if (!lastName) {
            setErrors(errors => ({...errors, lastName: "Please enter your last name."}));
        } else {
            setErrors(errors => ({...errors, lastName: undefined}));
        }

        // Validate emailAddress
        if (!emailAddress) {
            setErrors(errors => ({...errors, emailAddress: "Please enter your email address."}));
        } else if (!validateEmail(emailAddress)) {
            setErrors(errors => ({...errors, emailAddress: "Please enter a valid email address."}));
        } else {
            setErrors(errors => ({...errors, emailAddress: undefined}));
        }

        // Validate password
        if (!password) {
            setErrors(errors => ({...errors, password: "Please enter a password."}));
        } else if (password.length < 6) {
            setErrors(errors => ({...errors, password: "Password must be at least 6 characters long."}));
        } else {
            setErrors(errors => ({...errors, password: undefined}));
        }
    }, [firstName, lastName, emailAddress, password]);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (Object.keys(errors).length === 0) {
            // Submit the form if all fields are valid
            registerUser(user).then((response) => {
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
            })
        } else {
            // Display error messages for invalid fields
            setErrors(errors)
        }
    }

    const handleNext = () => {
        if (currentStep === MAX_STEP) {
            return;
        }

        setCurrentStep(currentStep + 1);
    }

    const handleBack = () => {
        if (currentStep === 1) {
            return;
        }

        setCurrentStep(currentStep - 1);
    }

    return (
        <RegistrationFormContextProvider>
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
        </RegistrationFormContextProvider>
    );
}