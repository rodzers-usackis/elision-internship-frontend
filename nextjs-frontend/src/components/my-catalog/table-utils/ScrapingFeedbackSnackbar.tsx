import Snackbar from '@mui/material/Snackbar';
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from '@mui/icons-material/Close';
import Alert from "@mui/material/Alert";

interface ScrapingFeedbackSnackbarProps {
    open: boolean;
    onClose: () => void;
    isError: boolean;
    isLoading: boolean;
}

export function ScrapingFeedbackSnackbar({open, onClose, isLoading, isError} : ScrapingFeedbackSnackbarProps){


    return (
        <Snackbar
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            sx={{
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                borderRadius: '4px'
            }}
        >

            <Alert severity={isError ? "error" : isLoading ? "info" : "success"} sx={{width: '100%'}}>
                {isLoading ? "Scraping..." : isError ? "Scraping failed" : "Scraped successfully. Prices will be updated in a few minutes."}
            </Alert>


        </Snackbar>
    )




}