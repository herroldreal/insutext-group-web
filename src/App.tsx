import React from 'react';
import Header from './components/Header';
import Loader from './components/Loader'
import Banner from "./components/Banner";
import ServiceSection from "./components/Service";
import AboutUs from "./components/AboutUs";
import Work from "./components/Work";
import PricingPlan from "./components/PricingPlan";
import Counter from "./components/Counter";
import VideoPopUp from "./components/VideoPopUp";
import FAQ from "./components/Faq";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const App: React.FC = () => {
    return (
        <div>
            <Loader/>
            <Header/>
            <Banner/>
            <ServiceSection/>
            <AboutUs/>
            <Work/>
            <AboutUs/>
            <AboutUs/>
            <PricingPlan/>
            <Counter/>
            <VideoPopUp/>
            <FAQ/>
            <Testimonial/>
            <Footer/>
            <BackToTop/>
        </div>
    );
};

export default App;