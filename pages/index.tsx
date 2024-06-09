import Head from "next/head";

import Layout from "@/components/Layout";

import { NextPage } from "next";
import Home from "@/components/Home";

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Smart Learn</title>
                <meta name="description" content="Your AI-Powered Learning Copilot" />
                <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no, user-scalable=0;" />
                <meta property="og:image" content="https://www.chatedu.tech/api/og" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
                <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon-192x192.png" />
            </Head>
            <Layout>
                <Home />
            </Layout>
        </>
    )
}

export default HomePage