import React from 'react';
import Loader from "../components/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const ContactUs: React.FC = () => {
    return (
        <>
            <Loader/>
            <Header/>

            <Footer/>
            <BackToTop/>
        </>
    )
}

export default ContactUs;