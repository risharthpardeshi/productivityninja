import {AuthUserProvider} from "@/firebase/auth"
import "@/styles/globals.css";
import Head from "next/head";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>🎯Productivity Ninja</title>
           </Head>
           <AuthUserProvider>
           <Component {...pageProps} />
          
           </AuthUserProvider>
           <Footer/>
        </>
    );
}