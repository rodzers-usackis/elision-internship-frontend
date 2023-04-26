import {Grid, TextField} from "@mui/material";
import * as React from "react";
import FormContext from "<components>/context/register/RegistrationFormContext";
import {useContext} from "react";

export default function UserCredentialForm() {
    // States from RegistrationFormContextProvider
    const {firstName, setFirstName} = useContext(FormContext);
    const {lastName, setLastName} = useContext(FormContext);
    const {emailAddress, setEmailAddress} = useContext(FormContext);
    const {password, setPassword} = useContext(FormContext);


    return (
        <>
            <Grid container sx={{display: 'flex', flexDirection: 'column', width: '100%'}} gap={2}>
                <Grid container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Grid item xs={12} sm={6} paddingRight={1}>
                        <TextField
                            required
                            id="filled-first-name-input"
                            label="First Name"
                            type="text"
                            variant="filled"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            fullWidth={true}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} paddingLeft={1}>
                        <TextField
                            required
                            id="filled-last-name-input"
                            label="Last Name"
                            type="text"
                            variant="filled"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            fullWidth={true}
                        />
                    </Grid>
                </Grid>

                <Grid container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Grid item xs={12} sm={6} paddingRight={1}>
                        <TextField
                            required
                            id="filled-email-input"
                            label="Email"
                            type="text"
                            variant="filled"
                            placeholder="example@domain.com"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            fullWidth={true}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} paddingLeft={1}>
                        <TextField
                            required
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            variant="filled"
                            placeholder="Must have at least 6 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth={true}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}