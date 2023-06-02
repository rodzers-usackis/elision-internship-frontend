import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface ProductDetailsModalProps {
    open: boolean;
    onClose: () => void;
    product?: Product;
}

export default function ProductDetailsModal({product, open, onClose}: ProductDetailsModalProps) {

    if (!product) {
        onClose();
        return (<></>)
    }

    return (<Modal
            sx={{
                overflow: "scroll",
                padding: "1rem",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            open={open} onClose={onClose}>
            <Card sx={{width: 'fit-content'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
            </Card>
        </Modal>
    )

}