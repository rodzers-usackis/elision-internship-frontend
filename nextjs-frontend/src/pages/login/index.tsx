// import {Box, Button, Card, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import styles from '../../styles/Login.module.css'
import {useContext, useState} from "react";
import AuthenticationContext from "../../context/authentication/AuthenticationContext";
import {useRouter} from "next/router";
import AuthenticationRequest from "../../model/AuthenticationRequest";
import Alert from "@mui/material/Alert";
import {AlertTitle} from "@mui/material";
import Head from "next/head";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });
    const [loginError, setLoginError] = useState(false);
    const {isAuthenticated, login} = useContext(AuthenticationContext);
    const {push: goTo} = useRouter();

    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const isValidEmail = validateEmail(email);

        if (!isValidEmail) {
            setErrors({ ...errors, email: "Please enter a valid email address" });
        } else {
            setErrors({ ...errors, email: "" })
            // submit form
            handleLogin();
        }
    };


    if (isAuthenticated()) {
        return (
            <div style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                marginTop: "5rem",
                gap: "1rem",
            }}><Typography variant={"h5"}>You are logged in</Typography>
                <Button sx={{maxWidth: "10rem"}} variant={"contained"}><Link href={"/dashboard/my-catalog"}>Go to dashboard</Link></Button>
            </div>
        )
    }


    function handleLogin() {
        login({
                email: email,
                password: password
            } as AuthenticationRequest,
            onLoggingInSuccess,
            onLoggingInError);
    }

    function onLoggingInSuccess() {
        setLoginError(false)
        // goTo('/');
    }

    function onLoggingInError() {
        setLoginError(true); // Set the loginError state to true
        setPassword(""); // Clear the password field
    }


    return (
        <>
            <Head>
                <title>Sign in</title>
            </Head>
            <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={styles.loginWrapper}
            paddingX={2}
        >
            <Card sx={{width: 500, maxHeight: 600, paddingX: '1%'}}>
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
                          sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center'
                          }} px={5}
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
                                    src="/google_g_logo.svg"
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

                        {loginError && (
                            <Alert severity="error" sx={{width: '100%'}}>
                                Invalid login credentials. Please try again.
                            </Alert>
                        )}
                        <Grid item className={styles.cardMainContentEmailInput} paddingY={2} width={'100%'}>
                            <TextField
                                id="filled-email-input"
                                label="Email"
                                type="email"
                                autoComplete="current-email"
                                variant="filled"
                                placeholder="example@domain.com"
                                fullWidth={true}

                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!errors.email}
                                helperText={errors.email}

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

                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={!!errors.password}
                                helperText={errors.password}

                            />
                        </Grid>

                        <Grid container paddingBottom={2}
                              sx={{display: 'flex', justifyContent: 'space-between'}}
                        >
                            <Grid item
                                  sx={{display: 'flex', alignItems: 'center'}}
                            >
                                <FormGroup>

                                    <FormControlLabel control={<Checkbox/>} label="Remember me"/>

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

                            <Button className={styles.signInButton} fullWidth={true} onClick={handleSubmit}>

                                Sign in
                            </Button>
                        </Grid>


                        <Grid container className={styles.cardAdditionalActions} paddingY={3}
                              sx={{display: 'flex', justifyContent: 'center'}}
                        >
                            <Grid item>
                                <Typography>
                                    Don&apos;t have an account yet?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    <Link href={'/register'} style={{color: '#007bff'}}>&nbsp;Register now</Link>
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Card>
        </Box></>
    );
}