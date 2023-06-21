import styles from "../../styles/ContentPages.module.css";
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ReactNode } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface PricingCardProps {
    pricingTierTitle: string;
    subtitle: string;
    priceValue: number;
    features: ReactNode[];
}

interface OnboardingCardProps {
    text: string;
    price: number;
}

export default function Pricing() {
    function PricingCard({ pricingTierTitle, subtitle, priceValue, features }: PricingCardProps) {
        return (
            <Card key={priceValue} className={styles.pricingCard}>
                <CardContent className={styles.featureContent}>
                    <Typography>
                        {pricingTierTitle}
                    </Typography>
                    <Typography gutterBottom variant="h4" className={styles.price}>
                        €{priceValue}/month
                    </Typography>
                    <Typography className={styles.featureSubtitle} color="text.secondary">
                        {subtitle}
                    </Typography>
                    <Typography component="div" color="text.secondary">
                        {features.map((feature, index) => (
                            <Typography key={index} sx={{ alignItems: 'center', display: 'flex' }}>
                                <CheckCircleOutlineIcon className={styles.featureIcon} />
                                &nbsp;
                                {feature}
                            </Typography>
                        ))}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    function OnboardingCard({ text, price }: OnboardingCardProps) {
        return (
            <Card className={styles.onboardingCard}>
                <CardContent className={styles.onboardingCardContent}>
                    <Box sx={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <EmojiEventsIcon className={styles.trophyIcon} />
                    </Box>
                    <Box sx={{ width: '80%', paddingLeft: '0.5rem' }}>
                        <Typography component="div" variant="body1" className={styles.onboardingText}>
                            <Typography variant="h6" className={styles.onboardingTextLevel1}>
                                Onboarding Services That Set You Up for Success
                            </Typography>
                            <Typography variant="body1" className={styles.onboardingTextLevel2}>
                                Let our team of in-house experts assist you with data migration, account setup, and training.
                            </Typography>
                        </Typography>
                        <Typography variant="body1" className={styles.onboardingTextLevel3}>
                            Onboarding packages start at €{price}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        );
    }

    return (
        <>
            <Head>
                <title>Pricing</title>
            </Head>
            <Typography className={styles.title} variant="h2" align="center">
                Pricing
            </Typography>
            <Box className={styles.pricingContainer} sx={{ flexDirection: 'column' }}>
                <PricingCard
                    pricingTierTitle={'Basic Plan'}
                    subtitle={'Includes up to 10 users'}
                    priceValue={25.99}
                    features={['Notifications', 'Price history', 'Basic chat and email support']}
                />
                <PricingCard
                    pricingTierTitle={'Business Plan'}
                    subtitle={'Includes up to 20 users'}
                    priceValue={50.99}
                    features={['Notifications', 'Price history', 'Price scraping on demand', 'Priority chat and email support']}
                />
                <PricingCard
                    pricingTierTitle={'Enterprise Plan'}
                    subtitle={'Includes up to 50 users'}
                    priceValue={99.99}
                    features={['Notifications', 'Price history', 'Price scraping on demand', 'Intelligent price suggestions', 'Priority chat and email support', '...and more']}
                />

                <Box display="flex" justifyContent="center" className={styles.onboardingContainer}>
                    <OnboardingCard
                        text={''}
                        price={500}
                    />
                </Box>
            </Box>

            <Box sx={{paddingBottom: '3rem'}}>
                <Typography className={styles.bottomCallToAction} variant="h4" align="center">
                Take the first step towards better pricing decisions.
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary">
                    Start a conversation with us today.
                </Typography>
            </Box>
        </>
    );
}
