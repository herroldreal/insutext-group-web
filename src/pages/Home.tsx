import React from "react"
import Loader from "../components/Loader";
import Header from "../components/Header";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import ServiceSection from "../components/Service";
import Clients from "../components/Clients";
import Products from "../components/Products";
import Productions from "../components/Productions";
import Provide from "../components/Provide";
import Process from "../components/Process";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Home: React.FC = () => {
    return (
        <>
            <Loader/>
            <Header/>
            <Banner/>
            <AboutUs/>
            <ServiceSection/>
            <Clients/>
            <Products/>
            <Productions/>
            <Provide/>
            <Process/>
            <Testimonial/>
            <Blog/>
            <Footer/>
            <BackToTop/>
        </>
    )
}

export default Home;