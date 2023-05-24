// import {FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import {SelectChangeEvent} from "@mui/material/Select";
import * as React from "react";
import {useContext} from "react";
import FormContext from "../../context/register/RegistrationFormContext";
import { FormHelperText } from '@mui/material';

const productCategories = [
    { stringValue: "Apparel and accessories", enumValue: "APPAREL_AND_ACCESSORIES" },
    { stringValue: "Beauty and personal care", enumValue: "BEAUTY_AND_PERSONAL_CARE" },
    { stringValue: "Books and stationery", enumValue: "BOOKS_AND_STATIONERY" },
    { stringValue: "Consumer electronics", enumValue: "CONSUMER_ELECTRONICS" },
    { stringValue: "Food and beverage", enumValue: "FOOD_AND_BEVERAGE" },
    { stringValue: "Furniture and home goods", enumValue: "FURNITURE_AND_HOME_GOODS" },
    { stringValue: "Healthcare and wellness", enumValue: "HEALTHCARE_AND_WELLNESS" },
    { stringValue: "Jewelry and watches", enumValue: "JEWELRY_AND_WATCHES" },
    { stringValue: "Sporting goods", enumValue: "SPORTING_GOODS" },
    { stringValue: "Toys and games", enumValue: "TOYS_AND_GAMES" },
    { stringValue: "Travel and leisure", enumValue: "TRAVEL_AND_LEISURE" },
    { stringValue: "Vehicles and automotive", enumValue: "VEHICLES_AND_AUTOMOTIVE" }
];


export default function CompanyInformationForm() {
    // States from RegistrationFormContextProvider
    const {companyName, setCompanyName} = useContext(FormContext);
    const {companyWebsite, setCompanyWebsite} = useContext(FormContext);
    const {productCategory, setProductCategory} = useContext(FormContext);
    const {vatNumber, setVatNumber} = useContext(FormContext);
    const {companyInformationFormFieldErrors} = useContext(FormContext);


    // Used for setting state of productType select
    const handleProductCategoryChange = (
        event: SelectChangeEvent,
    ) => {
        setProductCategory([event.target.value]);
    };

    return (
      <>
          <Grid container sx={{display: 'flex', flexDirection: 'column', width: '100%', paddingTop: '16px'}} gap={2}>
              <Grid item>
                  <TextField
                      required
                      id="filled-company-name-input"
                      label="Company Name"
                      type="text"
                      variant="filled"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      error={!!companyInformationFormFieldErrors.companyName}
                      helperText={companyInformationFormFieldErrors.companyName}
                      fullWidth={true}
                  />
              </Grid>

              <Grid item>
                  <TextField
                      required
                      id="filled-company-vat-number-input"
                      label="VAT Number"
                      type="text"
                      variant="filled"
                      placeholder="BE0999999999"
                      value={vatNumber}
                      onChange={(e) => setVatNumber(e.target.value)}
                      error={!!companyInformationFormFieldErrors.vatNumber}
                      helperText={companyInformationFormFieldErrors.vatNumber}
                      fullWidth={true}
                  />
              </Grid>

              <Grid item>
                  <TextField
                      required
                      id="filled-company-website-input"
                      label="Company Website"
                      type="url"
                      variant="filled"
                      placeholder="https://www.example.com"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                      error={!!companyInformationFormFieldErrors.companyWebsite}
                      helperText={companyInformationFormFieldErrors.companyWebsite}
                      fullWidth={true}
                  />
              </Grid>

              <Grid item>
                  <FormControl fullWidth error={!!companyInformationFormFieldErrors.productCategory}>
                      <InputLabel id="company-category-select-label">Products</InputLabel>
                      <Select
                          labelId="company-category-select-label"
                          id="company-category-select"
                          value={productCategory[0]}
                          label="Products"
                          onChange={handleProductCategoryChange}
                      >
                          {productCategories.map((category) => (
                              <MenuItem key={category.enumValue} value={category.enumValue}>{category.stringValue}</MenuItem>
                          ))}
                      </Select>
                      <FormHelperText>{companyInformationFormFieldErrors.productCategory}</FormHelperText>
                  </FormControl>
              </Grid>
          </Grid>
      </>
    );
}