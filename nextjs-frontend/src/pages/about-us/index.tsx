import Typography from "@mui/material/Typography";
import Head from "next/head";
import styles from "../../styles/ContentPages.module.css";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function AboutUs() {

    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <Typography className={styles.title} align={"center"} variant={"h2"}>About Us</Typography>
            <Card className={styles.aboutUsCard}>

                <CardContent><Typography component={"div"}>
                    <p>Welcome to Price Spy! We are a revolutionary platform that empowers businesses
                        and
                        individuals to optimize their pricing strategies and unlock greater profitability. Our mission
                        is to
                        provide comprehensive pricing solutions that drive growth, enhance competitiveness, and maximize
                        savings
                        potential.</p>

                    <p>At Price Spy, we understand the critical role pricing plays in the success of any
                        business.
                        That's why we offer a wide range of cutting-edge features and tools designed to revolutionize
                        your
                        pricing approach. With our platform, you can access advanced pricing analytics, dynamic price
                        suggestions, and customizable alert rules, all in one place.</p>

                    <p>Our intuitive interface makes it easy to monitor market trends, analyze competitor pricing, and
                        make
                        data-driven decisions. Whether you're a small business owner or an e-commerce giant, our
                        platform
                        scales
                        to meet your needs. We offer real-time price tracking, historical data visualization, and
                        comprehensive
                        reports, allowing you to gain valuable insights into market dynamics and consumer behavior.</p>

                    <p>Join Price Spy today and unlock the power of optimized pricing. Stay one step ahead of
                        the
                        competition, maximize profitability, and achieve your business goals. With our comprehensive
                        suite
                        of
                        features and personalized support, we're here to revolutionize your pricing strategy and drive
                        your
                        success.</p>

                    <p>Together, let's harness the potential of Price Spy and transform the way you approach
                        pricing.</p></Typography>
                </CardContent>

            </Card>
        </>
    )

}