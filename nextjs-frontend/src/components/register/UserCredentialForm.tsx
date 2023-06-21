// import {
//     Checkbox,
//     FormControlLabel,
//     FormGroup,
//     Grid,
//     TextField,
//     Typography,
// } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import FormContext from "../../context/register/RegistrationFormContext";
import {useContext} from "react";
import Link from "next/link";
import styles from "../../styles/Register.module.css";
import FormControl from "@mui/material/FormControl";
import {FormHelperText} from "@mui/material";

export default function UserCredentialForm() {
    // States from RegistrationFormContextProvider
    const {firstName, setFirstName} = useContext(FormContext);
    const {lastName, setLastName} = useContext(FormContext);
    const {emailAddress, setEmailAddress} = useContext(FormContext);
    const {password, setPassword} = useContext(FormContext);
    const {acceptTermsAndConditions, setAcceptTermsAndConditions} = useContext(FormContext);
    const {userCredentialFormFieldErrors} = useContext(FormContext);


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
                            error={!!userCredentialFormFieldErrors.firstName}
                            helperText={userCredentialFormFieldErrors.firstName}
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
                            error={!!userCredentialFormFieldErrors.lastName}
                            helperText={userCredentialFormFieldErrors.lastName}
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
                            error={!!userCredentialFormFieldErrors.emailAddress}
                            helperText={userCredentialFormFieldErrors.emailAddress}
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
                            placeholder="Must have at least 8 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!userCredentialFormFieldErrors.password}
                            helperText={userCredentialFormFieldErrors.password}
                            fullWidth={true}
                        />
                    </Grid>

                    <Grid item paddingTop={2}>
                        <FormControl
                            required
                            error={!!userCredentialFormFieldErrors.acceptTermsAndConditions}
                            component="fieldset"
                            variant="standard"
                        >
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={acceptTermsAndConditions}
                                            onChange={(e) => setAcceptTermsAndConditions(e.target.checked)}
                                        />
                                    }
                                    label={
                                        <Typography variant="body2">
                                            I accept the{" "}
                                            <Link href="#" style={{color: "blue"}}>
                                                terms and conditions
                                            </Link>
                                        </Typography>
                                    }
                                />
                            </FormGroup>
                            {!!userCredentialFormFieldErrors.acceptTermsAndConditions && (
                                <FormHelperText>
                                    {userCredentialFormFieldErrors.acceptTermsAndConditions}
                                </FormHelperText>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}