import {Box, Button, Card, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography} from "@mui/material";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import styles from '../../styles/Login.module.css'

export default function Login() {

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={styles.loginWrapper}
        >
            <Card sx={{width: 500, maxHeight: 600}}>
                <Grid container sx={{display: 'flex', flexDirection: 'column'}}>
                    <Grid item className={styles.cardLogo} paddingY={2}
                          sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                          }}
                    >
                        <Image
                            src="/price_spy_logo.svg"
                            alt="Price Spy Logo"
                            width={200}
                            height={90}
                            priority
                        />
                    </Grid>

                    <Grid item className={styles.cardMainContent}
                        sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} px={5}
                    >
                        <Grid item className={styles.cardHeader} paddingBottom={3} paddingTop={0} width={'100%'}
                              sx={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                              }}
                        >
                            <Button className={styles.googleLoginButton} size={'large'} fullWidth={true}>
                                <Image
                                    src="/Google__G__Logo.svg"
                                    alt="Google Logo"
                                    width={24}
                                    height={24}
                                    priority
                                />
                                <Typography paddingLeft={1}>
                                    Continue with Google
                                </Typography>
                            </Button>
                        </Grid>

                        <Grid item className={styles.cardMainContentEmailInput} paddingBottom={2} width={'100%'}>
                            <TextField
                                id="filled-email-input"
                                label="Email"
                                type="email"
                                autoComplete="current-email"
                                variant="filled"
                                placeholder="example@domain.com"
                                fullWidth={true}
                            />
                        </Grid>

                        <Grid item className={styles.cardMainContentPasswordInput} paddingBottom={2} width={'100%'}>
                            <TextField
                                id="filled-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="filled"
                                placeholder="Must have at least 8 characters"
                                fullWidth={true}
                            />
                        </Grid>

                        <Grid container paddingBottom={2}
                            sx={{display: 'flex', justifyContent: 'space-between'}}
                        >
                            <Grid item
                                sx={{display: 'flex', alignItems: 'center'}}
                            >
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                                </FormGroup>
                            </Grid>

                            <Grid item
                                sx={{display: 'flex', alignItems: 'center'}}
                            >
                                <Typography>
                                    <Link href={'#'} style={{color: '#007bff'}}>
                                        Forgot your password?
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item
                            sx={{display: 'flex', alignItems: 'center', width: '100%'}}
                        >
                            <Button className={styles.signInButton} fullWidth={true}>
                                Sign in
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid item className={styles.cardAdditionalActions} paddingY={3}
                        sx={{display: 'flex', justifyContent: 'center'}}
                    >
                        <Typography>
                            Don't have an account yet? <Link href={'/register'} style={{color: '#007bff'}}>Register now</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}