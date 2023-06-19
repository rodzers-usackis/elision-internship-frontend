import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "../../styles/ContentPages.module.css";
import styles from "../../styles/ContentPages.module.css";
import {ReactNode} from "react";
import Head from "next/head";


interface FeatureCardProps {
    featureName: string;
    children: ReactNode;
    imageUrl: string;
}


export default function Features() {

    function FeatureCard({featureName, children, imageUrl}: FeatureCardProps) {
        return (
            <Card key={featureName} className={styles.featureCard}>
                <CardMedia
                    sx={{height: 340, objectFit: "contain"}}
                    image={imageUrl}
                    alt={featureName + " visualisation"}
                    component="img"
                    title={featureName}
                />
                <CardContent className={styles.featureContent}>
                    <Typography gutterBottom variant="h5" component="div" className={styles.featureName}>
                        {featureName}
                    </Typography>
                    <Typography component={"div"} variant="body2" color="text.secondary"
                                className={styles.featureDescription}>
                        {children}
                    </Typography>
                </CardContent>
            </Card>
        );

    }

    return (
        <>
            <Head>
                <title>Features</title>
            </Head>
            <Box className={styles.featuresColumn}>
            <Typography className={styles.title} variant={"h2"} align={"center"}>Discover our features</Typography>
            <FeatureCard featureName={"Price alerts"} imageUrl={"/price-alert.svg"}>
                <p>With
                    price alerts, you can <strong>stay informed</strong> about any changes in prices directly on our
                    website and
                    through email notifications.
                </p>

                <p>This feature ensures that you <strong>never miss out</strong> on important price fluctuations.
                    Whether you&apos;re
                    a savvy shopper looking for the best deal or a business owner monitoring market trends, our
                    price alerts keep you in the loop.
                </p>

                <p>By setting up personalized alerts for specific products or services, you can effortlessly
                    track price changes and make informed decisions. <strong>Stay ahead of the game</strong> and
                    take advantage
                    of the best prices with our price alert feature, designed to enhance your shopping or
                    business experience.
                </p>
            </FeatureCard>
            <FeatureCard featureName={"Set your own alert rules"}
                         imageUrl={"/alert-rules.svg"}>

                <p>We go beyond basic price alerts and offer a powerful feature
                    that allows you to set your own alert rules. With this functionality, you have <strong>precise
                        control</strong>
                    over the conditions that trigger notifications, ensuring you receive alerts <strong>tailored to
                        your
                        specific needs</strong>.
                </p>

                <p>By defining your own alert rules, you can specify criteria such as price thresholds, percentage
                    changes, or specific product attributes. This level of customization empowers you to focus on
                    what matters most to you, whether it&apos;s a specific price drop, a certain percentage discount, or
                    the availability of limited-time offers.
                </p>

                <p>With the ability to set your own alert rules, you can effortlessly track and monitor the products
                    or services that interest you, enabling you to make informed decisions at the right time. Stay
                    on
                    top of the market and never miss out on important updates with our customizable alert rules
                    feature, designed to <strong>enhance your pricing intelligence</strong> and maximize your
                    savings potential.
                </p>
            </FeatureCard>

            <FeatureCard featureName={"Price suggestions"} imageUrl={"/price-suggestions.svg"}>
                <p>With this functionality, we provide you with <strong>personalized
                    and
                    intelligent price recommendations</strong> tailored to your unique preferences and goals.
                </p>

                <p>Our <strong>advanced algorithm</strong> analyzes market trends, competitor prices, and historical data to generate
                    smart price suggestions for your products or services. But what sets our feature apart is the
                    ability to customize and fine-tune these suggestions according to your specific
                    requirements.
                </p>

                <p>You can set pricing rules, adjust profit margins, and factor in variables like demand,
                    seasonality, or promotional periods. This empowers you to optimize your pricing strategy,
                    <strong> maximize profitability</strong>, and stay competitive in your market niche.
                </p>

                <p>With customizable smart price suggestions, you no longer need to rely on guesswork or manual
                    calculations. Let our technology work for you, providing actionable insights and helping you
                    <strong> make data-driven pricing decisions</strong> that drive growth and success for your
                    business.
                </p>
            </FeatureCard>

            <FeatureCard featureName={"Price history"} imageUrl={"/price-history.svg"}>
                <p>The price history feature provides intuitive graphs and visualizations, presenting a clear overview
                    of
                    how prices have fluctuated over time. You can easily analyze historical price patterns, identify
                    seasonal trends, and spot pricing anomalies. These graphs empower you to <strong>understand the market
                        dynamics</strong>,
                    determine the optimal pricing strategies, and adjust your prices accordingly.
                </p>

                <p>Furthermore, our web app enables you to compare the pricing histories of multiple competitors side by
                    side. By visualizing the <strong>pricing trends of various competitors</strong>, you can benchmark your prices,
                    assess
                    your competitiveness, and identify opportunities to gain a competitive edge. The ability to compare
                    price histories at a glance helps you understand the market landscape and make informed decisions to
                    optimize your pricing strategy.
                </p>

                <p>With price history and graphical representations at your fingertips, you can effectively monitor and
                    analyze pricing trends, identify competitive opportunities, and <strong>make strategic pricing
                        decisions</strong>
                    that
                    maximize your revenue and profitability.
                </p>
            </FeatureCard>


        </Box>
            <footer className={styles.attribution}><a href="https://storyset.com/">Illustrations by Storyset</a>
            </footer>
        </>
    );


}