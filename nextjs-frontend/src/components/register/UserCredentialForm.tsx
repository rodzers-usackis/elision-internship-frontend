import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import * as React from "react";
import FormContext from "<components>/context/register/RegistrationFormContext";
import {useContext} from "react";
import Link from "next/link";
import styles from "<components>/styles/Register.module.css";

export default function UserCredentialForm() {
    // States from RegistrationFormContextProvider
    const {firstName, setFirstName} = useContext(FormContext);
    const {lastName, setLastName} = useContext(FormContext);
    const {emailAddress, setEmailAddress} = useContext(FormContext);
    const {password, setPassword} = useContext(FormContext);

    return (
        <>
            <Grid container sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <Grid container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Grid item xs={12} sm={6} className={styles.leftInputField}>
                        <TextField
                            required
                            id="filled-first-name-input"
                            label="First Name"
                            type="text"
                            variant="filled"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                            fullWidth={true}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} className={styles.rightInputField}>
                        <TextField
                            required
                            id="filled-last-name-input"
                            label="Last Name"
                            type="text"
                            variant="filled"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                            fullWidth={true}
                        />
                    </Grid>
                </Grid>

                <Grid container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Grid item xs={12} sm={6} className={styles.leftInputField}>
                        <TextField
                            required
                            id="filled-email-input"
                            label="Email"
                            type="text"
                            variant="filled"
                            placeholder="example@domain.com"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            error={!!errors.emailAddress}
                            helperText={errors.emailAddress}
                            fullWidth={true}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} className={styles.rightInputField}>
                        <TextField
                            required
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            variant="filled"
                            placeholder="Must have at least 6 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!errors.password}
                            helperText={errors.password}
                            fullWidth={true}
                        />
                    </Grid>

                    <Grid item paddingTop={2}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label={
                                <Typography variant="body2">
                                    I accept the{' '}
                                    <Link href="#" style={{ color: 'blue' }}>
                                        terms and conditions
                                    </Link>
                                </Typography>
                            }/>
                        </FormGroup>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}