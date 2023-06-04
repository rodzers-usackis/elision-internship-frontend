import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

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

    return (
        <Modal
            sx={{
                overflow: "auto",
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            open={open}
            onClose={onClose}
        >
            <Card
                sx={{
                    width: "fit-content",
                    padding: "1rem",
                    position: "relative",
                    maxHeight: "90vh",
                    overflowY: "auto"
                }}
            >
                <CardContent sx={{ position: "relative", zIndex: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                </CardContent>

                <IconButton
                    aria-label="Close"
                    sx={{
                        position: "absolute",
                        top: "-0.5rem",
                        right: "-0.5rem",
                        zIndex: 2,
                        padding: '1.5rem'
                    }}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>

                <CardMedia component="img" height="140" image={product.imageUrl} alt={product.name} />

                <CardContent sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Typography variant="body2" color="text.secondary">
                        {product.ean} | {product.manufacturerCode}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.category}
                    </Typography>
                </CardContent>
            </Card>
        </Modal>
);




}