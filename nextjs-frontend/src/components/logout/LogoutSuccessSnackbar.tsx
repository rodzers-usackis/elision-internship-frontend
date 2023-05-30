import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface LogoutSuccessSnackbarProps {
    open: boolean,
    onClose: () => void,
}

export function LogoutSuccessSnackbar(
    {open, onClose}: LogoutSuccessSnackbarProps) {

    return (<Snackbar open={open} onClose={onClose} autoHideDuration={5000}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
    >
        <Alert severity="success" sx={{
            width: '100%',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.8)'
        }}>
            You have logged out.
        </Alert>
    </Snackbar>)

}