import styles from "../../styles/Register.module.css";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import * as React from "react";
import FormContext from "../../context/register/RegistrationFormContext";
import {useContext} from "react";


export default function CompanyAddressForm() {
    // States from RegistrationFormContextProvider
    const {streetAddress, setStreetAddress} = useContext(FormContext);
    const {streetNumber, setStreetNumber} = useContext(FormContext);
    const {city, setCity} = useContext(FormContext);
    const {state, setState} = useContext(FormContext);
    const {zipCode, setZipCode} = useContext(FormContext);
    const {country, setCountry} = useContext(FormContext);
    const {companyAddressFormFieldErrors} = useContext(FormContext);


    return (
        <>
            <Grid container sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <Grid container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Grid item xs={12} sm={9} className={styles.leftInputField}>
                        <TextField
                            required
                            id="filled-address-street-input"
                            label="Street Address"
                            type="text"
                            variant="filled"
                            placeholder="Street Address"
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                            error={!!companyAddressFormFieldErrors.streetAddress}
                            helperText={companyAddressFormFieldErrors.streetAddress}
                            fullWidth={true}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3} className={styles.rightInputField}>
                        <TextField
                            required
                            id="filled-address-number-input"
                            label="Street Nr."
                            type="text"
                            variant="filled"
                            placeholder="Street Nr."
                            value={streetNumber}
                            onChange={(e) => setStreetNumber(e.target.value)}
                            error={!!companyAddressFormFieldErrors.streetNumber}
                            helperText={companyAddressFormFieldErrors.streetNumber}
                            fullWidth={true}
                        />
                    </Grid>
                </Grid>

                <Grid container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Grid item xs={12} sm={6} className={styles.leftInputField}>
                        <TextField
                            required
                            id="filled-address-city-input"
                            label="City"
                            type="text"
                            variant="filled"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            error={!!companyAddressFormFieldErrors.city}
                            helperText={companyAddressFormFieldErrors.city}
                            fullWidth={true}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} className={styles.rightInputField}>
                        <TextField
                            id="filled-state-province-region-input"
                            label="State/Province/Region"
                            type="text"
                            variant="filled"
                            placeholder="State/Province/Region"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            fullWidth={true}
                        />
                    </Grid>
                </Grid>

                <Grid container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Grid item xs={12} sm={6} className={styles.leftInputField}>
                        <TextField
                            required
                            id="filled-address-city-input"
                            label="Zip / Postal Code"
                            type="number"
                            variant="filled"
                            placeholder="Zip / Postal Code"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            error={!!companyAddressFormFieldErrors.zipCode}
                            helperText={companyAddressFormFieldErrors.zipCode}
                            fullWidth={true}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} className={styles.rightInputField}>
                        <TextField
                            required
                            id="filled-country-input"
                            label="Country"
                            type="text"
                            variant="filled"
                            placeholder="Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            error={!!companyAddressFormFieldErrors.country}
                            helperText={companyAddressFormFieldErrors.country}
                            fullWidth={true}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}