import {FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import * as React from "react";
import {ReactNode, useContext} from "react";
import FormContext from "../../context/register/RegistrationFormContext";

const productCategories = [
    "Apparel and accessories",
    "Beauty and personal care",
    "Books and stationery",
    "Consumer electronics",
    "Food and beverage",
    "Furniture and home goods",
    "Healthcare and wellness",
    "Jewelry and watches",
    "Sporting goods",
    "Toys and games",
    "Travel and leisure",
    "Vehicles and automotive",
];

export default function CompanyInformationForm() {
    // States from RegistrationFormContextProvider
    const {companyName, setCompanyName} = useContext(FormContext);
    const {companyWebsite, setCompanyWebsite} = useContext(FormContext);
    const {productType, setProductType} = useContext(FormContext);
    const {vatNumber, setVatNumber} = useContext(FormContext);

    // Used for setting state of productType select
    const handleProductTypeChange = (
        event: SelectChangeEvent<string>,
        child: ReactNode
    ) => {
        setProductType(event.target.value);
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
                      onChange={(e) => setCompanyName(e.target.value)}
                      fullWidth={true}
                  />
              </Grid>

              <Grid item>
                  <TextField
                      id="filled-company-website-input"
                      label="Company Website"
                      type="url"
                      variant="filled"
                      placeholder="https://www.example.com"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                      fullWidth={true}
                  />
              </Grid>

              <Grid item>
                  <FormControl fullWidth>
                      <InputLabel id="company-category-select-label">Products</InputLabel>
                      <Select
                          labelId="company-category-select-label"
                          id="company-category-select"
                          value={productType}
                          label="Products"
                          onChange={handleProductTypeChange}
                      >
                          {productCategories.map((category) => (
                              <MenuItem key={category} value={category}>{category}</MenuItem>
                          ))}
                      </Select>
                  </FormControl>
              </Grid>
          </Grid>
      </>
    );
}