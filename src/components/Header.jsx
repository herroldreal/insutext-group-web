import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/style.css';

const Header: React.FC = () => {
    return (
        <>
            <header id="pq-header" className="pq-header-style-1 pq-has-sticky">
                <div className="pq-top-header top-style-2">
                    <div className="container-fluid">
                        <div className="row flex-row-reverse">
                            <div className="col-md-6 text-right">
                                <div className="pq-header-social text-right">
                                    <ul>
                                        <li>
                                            <i className="ti-timer"></i>
                                            <span>Lun-Vie : 9AM - 5PM</span>
                                            <br/>
                                            <i className="ti-timer"></i>
                                            <span>Sabado : 9AM - 1PM</span>
                                        </li>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="pq-header-contact">
                                    <ul>
                                        <li>
                                        <a href="tel:+50589517503">
                                                <i className="fas fa-phone"></i>
                                                <span>+505 8951-7503</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:info@insutexgroup.com">
                                                <i className="fas fa-envelope"></i>
                                                <span>info@insutexgroup.com</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pq-bottom-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <div id="pq-menu-contain" className="pq-menu-contain">
                                            <ul id="pq-main-menu" className="navbar-nav ml-auto">
                                                <li className="menu-item current-menu-item menu-item-has-children">
                                                    <Link to="/home">Home</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Link to="/" className="navbar-brand">
                                        <img className="img-fluid logo" src="/images/logos/header-logo.png"
                                             alt="textica"/>
                                    </Link>
                                    <div className="pq-menu-search-block">
                                        <a href="#" className="pq-tools-search-button" data-bs-toggle="offcanvas"
                                           data-bs-target="#offcanvassearch">
                                            <i className="ti-search"></i>
                                        </a>
                                        <div className="offcanvas offcanvas-top" id="offcanvassearch">
                                            <form role="search" method="get" className="search-form">
                                                <button type="button" className="btn-close"
                                                        data-bs-dismiss="offcanvas"></button>
                                                <label>
                                                    <input type="search" className="search-field" placeholder="Search …"
                                                           name="s"/>
                                                </label>
                                                <button type="submit" className="search-submit">
                                                    <span>Search</span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="pq-shop-btn">
                                        <div className="pq-cart-button">
                                            <a href="#" className="pq-tools-button" data-bs-toggle="offcanvas"
                                               data-bs-target="#offcanvascart">
                                                <i className="ti-shopping-cart"></i>
                                                <span className="basket-item-count">0</span>
                                            </a>
                                            <div className="offcanvas offcanvas-end" id="offcanvascart">
                                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas">
                                                    <i className="ion-android-close"></i>
                                                </button>
                                                <div className="pq-cart-header">
                                                    <h3>Your Cart <span className="cart-panel-counter">0</span></h3>
                                                </div>
                                                <div className="widget_shopping_cart_content">
                                                    <p>No products in the cart.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent">
                                        <i className="fas fa-bars"></i>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
