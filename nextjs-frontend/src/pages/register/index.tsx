import * as React from "react";
import {Box, Button, Card, Grid, Typography} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import UserCredentialForm from '../../components/register/UserCredentialForm';
import CompanyInformationForm from '../../components/register/CompanyInformationForm';
import CompanyAddressForm from '../../components/register/CompanyAddressForm';
import styles from '../../styles/Register.module.css'
import RegistrationFormContextProvider from '../../context/register/RegistrationFormContextProvider'

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
    const MAX_STEP = 3;
    const [currentStep, setCurrentStep] = React.useState(1);

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
                                })}
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
                                <Button className={styles.cardButton} onClick={handleNext} size={'large'} fullWidth={true}>
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
        </RegistrationFormContextProvider>
    );
}