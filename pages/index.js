import Layout from "../components/layout";
import Head from 'next/head'
import Image from "next/image";


export default function Home() {
    return(
        <Layout>
            <Head>
                <title>test</title>
                <meta name="description" content="testtest"></meta>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>


        </Layout>



    )





}