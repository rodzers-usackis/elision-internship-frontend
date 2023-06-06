import Box from "@mui/material/Box";
import styles from "../../styles/ContentPages.module.css";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import {ReactNode} from "react";


interface PricingCardProps {
    priceValue: number;
    features: ReactNode[];
}


export default function Pricing() {

    function PricingCard({priceValue, features}: PricingCardProps) {
        return (
            <Card key={priceValue} className={styles.pricingCard}>

                <CardContent className={styles.featureContent}>
                    <Typography gutterBottom variant="h4" component="div" className={styles.price}>
                        {priceValue} € / month
                    </Typography>
                    <Typography component={"div"} variant="body2" color="text.secondary">
                        <ul>
                            {features.map((feature) => (
                                <li>{feature}</li>
                            ))}

                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        );
    }


        return (

            <>
                <Head>
                    <title>Pricing</title>
                </Head>
                <Typography className={styles.title} variant={"h2"} align={"center"}>Pricing</Typography>
                <Box className={styles.pricingContainer}>

                    <PricingCard priceValue={25.99} features={["Notifications", "Price history"]}/>
                    <PricingCard priceValue={50.99} features={["Notifications", "Price history", "Price scraping on demand"]}/>
                    <PricingCard priceValue={99.99} features={["Notifications", "Price history", "Price scraping on demand", "Intelligent price suggestions", "...and more"]}/>

                </Box>
            </>
        )

    }