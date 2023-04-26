import * as React from "react";
import Swal from 'sweetalert2';
import {Box, Button, Card, Grid, Typography} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import UserCredentialForm from '../../components/register/UserCredentialForm';
import CompanyInformationForm from '../../components/register/CompanyInformationForm';
import CompanyAddressForm from '../../components/register/CompanyAddressForm';
import styles from '../../styles/Register.module.css'
import { useRouter } from 'next/router'
import {registerUser} from "<components>/services/API";
import {useContext} from "react";
import FormContext from "<components>/context/register/RegistrationFormContext";

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

    const MAX_STEP = 3;
    const [currentStep, setCurrentStep] = React.useState(1);

    // States from RegistrationFormContextProvider
    const {firstName} = useContext(FormContext);
    const {lastName} = useContext(FormContext);
    const {emailAddress} = useContext(FormContext);
    const {password} = useContext(FormContext);

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

    const handleSubmit = () => {
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: emailAddress,
            password: password
        }

        registerUser(user).then((response) => {
            console.log(response);

            if (response.status === (200 || 201 || 202)) {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: 'You have successfully registered.',
                    confirmButtonText: 'OK',
                }).then(() => {
                    router.push('/');
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: response.message,
                    confirmButtonText: 'OK',
                });
            }
        })
    }


    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={styles.registerWrapper}
        >
            <Card sx={{width: 600, maxHeight: 600}}>
                <Grid container sx={{display: 'flex', flexDirection: 'column'}} paddingX={4}>
                    <Grid item className={styles.breadCrumb} paddingTop={3} paddingBottom={1}
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

                    <Grid item className={styles.cardTitle} paddingBottom={2}>
                        <Typography variant='h5' component='div'>
                            {steps[currentStep - 1]}
                        </Typography>
                    </Grid>

                    {getStepContent(currentStep)}

                    <Grid item className={styles.cardContent} paddingTop={2} paddingBottom={3}>
                        {currentStep === 3 ? (
                            <Button className={styles.cardButton} onClick={handleSubmit} size={'large'}
                                    fullWidth={true}>
                                Create Account
                            </Button>
                        ) : (
                            <Button className={styles.cardButton} onClick={handleNext} size={'large'} fullWidth={true}>
                                Next Step
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}