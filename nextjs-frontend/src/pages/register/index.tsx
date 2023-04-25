import {Box, Button, Card, Grid, TextField} from "@mui/material";
import styles from '../../styles/Register.module.css'

export default function Index() {

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={styles.registerWrapper}
        >
            <Card sx={{width: 500, height: 600}}>
                <Grid container sx={{display: 'flex', flexDirection: 'column'}}>
                    <Grid item className={'styles.cardHeader'}>


                    </Grid>

                    <Grid item className={'styles.cardMainContent'}>

                    </Grid>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        placeholder='example@domain.com'
                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        placeholder="Must have at least 8 characters"
                    />

                    <Button variant={'contained'}>
                        Register
                    </Button>
                </Grid>
            </Card>
        </Box>
    );
}