import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/bootstrap.min.css'

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

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
        <Router future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true, // Enables relative paths in nested routes
        }}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
            </Routes>
        </Router>
    );
};

export default App;