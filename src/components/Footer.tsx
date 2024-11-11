import React from 'react';
import '../assets/css/ionicons.min.css'
import '../assets/css/slick.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css'
import '../assets/css/simplebar.min.css';
import '../assets/css/animations.min.css';
import '../assets/css/magnific-popup.min.css';
import '../assets/css/progressbar.css'
import '../assets/css/owl.carousel.min.css';

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
                                        <img src="/images/logos/footer-logo.png" className="pq-footer-logo"
                                             alt="textica-footer-logo"/>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="row no-gutters">
                                        <div className="col-lg-4 p-0">
                                            <div className="pq-footer-items">
                                                <i className="ti-location-pin"></i>
                                                <div className="pq-footer-items-info">
                                                    <h4>address</h4>
                                                    <span>Calle 27 de mayo, Plaza Jimenez</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 p-0">
                                            <div className="pq-footer-items">
                                                <i className="ti-mobile"></i>
                                                <div className="pq-footer-items-info">
                                                    <h4>call Us On</h4>
                                                    <a href="tel:+50589517503">
                                                        <span>+505 8951 7503</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 p-0">
                                            <div className="pq-footer-items">
                                                <i className="ti-email"></i>
                                                <div className="pq-footer-items-info">
                                                    <h4>Email Us</h4>
                                                    <a href="mailto:info@insutexgroup.com">
                                                        <span>info@insutexgroup.com</span>
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
                                    <h4 className="footer-title">Sobre InsuTex Group</h4>
                                    <p> Brindando soluciones integrales para tus necesidades de costura,
                                        bordado, serigrafía y sublimación textil desde 2001.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3  col-md-6">
                                <div className="widget">
                                    <h4 className="footer-title">Servicios</h4>
                                    <div className="menu-textile-service-container">
                                        <ul id="menu-textile-service" className="menu">
                                            <li className="menu-item">
                                                <a href="fabric-printing.html">Maquinas Industrial & Casera</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="we-design-fabric.html">Repuestos y Talleres</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="stich-fabric.html">Manufactura</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="engineering.html">Insumos Textiles</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/#">Bordados</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3  col-md-6">
                                <div className="widget">
                                    <h4 className="footer-title">InsuTex</h4>
                                    <div className="menu-useful-links-container">
                                        <ul id="menu-useful-links" className="menu">
                                            <li className="menu-item">
                                                <a href="about-us.html">Sobre nosotros</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="our-team.html">Tienda en linea</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3  col-md-6">
                                <div className="widget">
                                    <div className="pq-subscribe">
                                        <div className="pq-subscribe-details">
                                            <h4 className="footer-title">our newsletter</h4>
                                            <p>Sign up for the latest deals products news and more from us.</p>
                                        </div>
                                    </div>
                                    <div className="pq-subscribe-from">
                                        <form className="pq-sign-up-form">
                                            <input type="email" name="EMAIL" placeholder="Your email address"
                                                   className="form-control"/>
                                            <input className="submit" type="submit" value="Sign up"/>
                                            <i className="ion-ios-paperplane"></i>
                                        </form>
                                    </div>
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
                                        <li><a href="/#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="/#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="/#"><i className="fab fa-youtube"></i></a></li>
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
