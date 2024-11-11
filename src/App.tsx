import React, {useEffect} from 'react';
import Header from './components/Header';
import Loader from './components/Loader'
import Banner from "./components/Banner";
import ServiceSection from "./components/Service";
import AboutUs from "./components/AboutUs";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Clients from "./components/Clients";
import Products from "./components/Products";
import Productions from "./components/Productions";
import Provide from "./components/Provide";
import Process from "./components/Process";
import Blog from "./components/Blog";

const App: React.FC = () => {
    useEffect(() => {
        /*==================================================
        [ Back To Top ]
        ==================================================*/
        jQuery('#back-to-top').fadeOut();
        jQuery(window).on("scroll", function () {
            // @ts-ignore
            if (jQuery(this).scrollTop() > 250) {
                jQuery('#back-to-top').fadeIn(1400);
            } else {
                jQuery('#back-to-top').fadeOut(400);
            }
        });
        jQuery('#top').on('click', function () {
            // @ts-ignore
            jQuery('top').tooltip('hide');
            jQuery('body,html').animate({
                scrollTop: 0
            }, 100);
            return false;
        });

    }, []);

    return (
        <div>
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
        </div>
    );
};

export default App;