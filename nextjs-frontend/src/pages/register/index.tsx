import * as React from 'react';
import Swal from 'sweetalert2';
import {Box, Button, Card, Grid, Typography} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import UserCredentialForm from '../../components/register/UserCredentialForm';
import CompanyInformationForm from '../../components/register/CompanyInformationForm';
import CompanyAddressForm from '../../components/register/CompanyAddressForm';
import styles from '../../styles/Register.module.css'
import {useRouter} from 'next/router'
import {registerUser} from '../../services/api/authentication';
import {useContext, useEffect, useState} from 'react';
import FormContext from '../../context/register/RegistrationFormContext';
import {RegisteringUser} from '../../model/RegisteringUser';

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

    // Steps for registration form
    const MAX_STEP = 3;
    const [currentStep, setCurrentStep] = useState(1);

    // States from RegistrationFormContextProvider
    const {firstName, setFirstName} = useContext(FormContext);
    const {lastName, setLastName} = useContext(FormContext);
    const {emailAddress, setEmailAddress} = useContext(FormContext);
    const {password, setPassword} = useContext(FormContext);
    const {setErrors} = useContext(FormContext);


    // LoggedInUser object to be sent to backend
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: emailAddress,
        password: password
    }

const handleSubmit = (event: any) => {
        event.preventDefault();

        let newErrors = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: ''
        }

        // Validate all fields
        if (!validateFirstName(firstName)) {
            newErrors.firstName = 'First name must contain at least 2 letters';
        } else {
            newErrors.firstName = '';
        }

        if (!validateLastName(lastName)) {
            newErrors.lastName = 'First name must contain at least 2 letters';
        } else {
            newErrors.lastName = '';
        }

        if (!validateEmail(emailAddress)) {
            newErrors.emailAddress = 'Invalid email address';
        } else {
            newErrors.emailAddress = '';
        }

        if (!validatePassword(password)) {
            newErrors.password = 'Password must be at least 8 characters long, must contain one uppercase/lowercase and at least one number';
        } else {
            newErrors.password = '';
        }

        // If there are errors, set the errors state and return
        if (!Object.values(newErrors).every((x) => x === '')) {
            setErrors(newErrors);
            return;
        }

        // If there are no errors, send the user object to backend and register the user
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