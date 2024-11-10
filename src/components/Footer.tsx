import React from 'react';
import '../assets/css/bootstrap.min.css'
import '../assets/css/responsive.css'
import '../assets/css/style.css';
import '../assets/css/ionicons.min.css'
import '../assets/css/animations.min.css'

const Footer: React.FC = () => {
    return (
        <footer id="pq-footer">
            <div className="pq-footer-style-1">
                <div className="pq-footer-top">
                    <div className="pq-footer-bottom-list">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="pq-footer-img">
                                        <img src="/images/logos/footer-logo.png" className="pq-footer-logo" alt="textica-footer-logo" />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="row no-gutters">
                                        <div className="col-lg-4 p-0">
                                            <div className="pq-footer-items">
                                                <i className="ti-location-pin"></i>
                                                <div className="pq-footer-items-info">
                                                    <h4>address</h4>
                                                    <span>Themeforest, Envato HQ</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 p-0">
                                            <div className="pq-footer-items">
                                                <i className="ti-mobile"></i>
                                                <div className="pq-footer-items-info">
                                                    <h4>call Us On</h4>
                                                    <a href="tel:+180045647824">
                                                        <span>+1800-001-6555</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 p-0">
                                            <div className="pq-footer-items">
                                                <i className="ti-email"></i>
                                                <div className="pq-footer-items-info">
                                                    <h4>Email Us</h4>
                                                    <a href="mailto:info@peacefulqode.com">
                                                        <span>info@peacefulqode.com</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="widget">
                                    <h4 className="footer-title">About Textica</h4>
                                    <p>It helps designers plan out where the content will sit, the content to be written and approved.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="widget">
                                    <h4 className="footer-title">Textica Services</h4>
                                    <ul className="menu">
                                        <li><a href="fabric-printing.html">Fabric Printing</a></li>
                                        <li><a href="we-design-fabric.html">We Design Fabric</a></li>
                                        <li><a href="stich-fabric.html">Stich Fabric</a></li>
                                        <li><a href="engineering.html">Engineering</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="widget">
                                    <h4 className="footer-title">Useful Links</h4>
                                    <ul className="menu">
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="our-services.html">Our Services</a></li>
                                        <li><a href="our-team.html">Our Team</a></li>
                                        <li><a href="our-pricing.html">Our Pricing</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="widget">
                                    <div className="pq-subscribe">
                                        <h4 className="footer-title">Our Newsletter</h4>
                                        <p>Sign up for the latest deals products news and more from us.</p>
                                    </div>
                                    <form className="pq-sign-up-form">
                                        <input type="email" name="EMAIL" placeholder="Your email address" className="form-control" />
                                        <button type="submit" className="submit">Sign up</button>
                                        <i className="ion-ios-paperplane"></i>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pq-copyright-footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 text-center text-md-start">
                                <div className="pq-footer-social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <span className="pq-copyright"> Proudly Powered By InsuTex Group</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
