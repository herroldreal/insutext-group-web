import React from 'react';
import '../assets/css/bootstrap.min.css'
import '../assets/css/responsive.css'
import '../assets/css/style.css';
import '../assets/css/ionicons.min.css'
import '../assets/css/animations.min.css'

const Header: React.FC = () => {
    return (
        <>
            <header id="pq-header" className="pq-header-style-2 pq-has-sticky">
                <div className="pq-top-header top-style-1">
                    <div className="container-fluid">
                        <div className="row flex-row-reverse">
                            <div className="col-md-6 text-right">
                                <div className="pq-header-social text-right">
                                    <ul>
                                        <li><a href="/#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="/#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="/#"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="pq-header-contact">
                                    <ul>
                                        <li>
                                            <a href="tel:+50589517503">
                                                <i className="fas fa-phone"></i>
                                                <span>+505 8518-7392</span>
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
                                    <a className="navbar-brand" href="index.html">
                                        <img className="img-fluid logo" src="/images/logos/header-logo.png"
                                             alt="insutex"/>
                                    </a>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <div id="pq-menu-contain" className="pq-menu-contain">
                                            <ul id="pq-main-menu" className="navbar-nav ml-auto">
                                                <li className="menu-item current-menu-item menu-item-has-children">
                                                    <a href="/#">Inicio</a>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <a href="/#">Nosotros</a>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <a href="/#">Servicios</a>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item">
                                                            <a href="fabric-printing.html">Maquinas Industrial &
                                                                Casera</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="fabric-dyeing.html">Repuestos & Talleres</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="manufacture.html">Manufactura</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="engineering.html">Insumos Textiles</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="we-design-fabric.html">Bordados</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <a href="/#">Tienda</a>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item">
                                                            <a href="/#">Industrial</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="/#">Caseras</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="/#">Ventas al Gobierno</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="/#">Talleres</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="textiles-and-fashion.html">Promociones</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <a href="/#">Blog</a>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item menu-item-has-children">
                                                            <a href="/#">Noticias</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="strategies-for-reducing-environmental.html">Videos de apoyo</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="contact.html">Cotizar</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="pq-menu-search-block">
                                        <a href="/#" className="pq-tools-serach-button"
                                           data-bs-toggle="offcanvas"
                                           data-bs-target="#offcanvassearch">
                                            <i className="ti-search"></i>
                                        </a>
                                        <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvassearch">
                                            <form className="search-form">
                                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                                        aria-label="Close"></button>
                                                <label>
                                                    <span className="screen-reader-text">Search for:</span>
                                                    <input type="search" className="search-field" placeholder="Search …"
                                                           value=""
                                                           name="s"/>
                                                </label>
                                                <button type="submit" className="search-submit">
                                                    <span className="screen-reader-text">Search</span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="pq-shop-btn">
                                        <div className="pq-cart-button">
                                            <a href="/#" className="pq-tools-button"
                                               data-bs-toggle="offcanvas"
                                               data-bs-target="#offcanvascart">
                                                <i className="ti-shopping-cart"></i>
                                                <span className="basket-item-count">0</span>
                                            </a>
                                            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvascart">
                                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas">
                                                    <i className="ion-android-close"></i>
                                                </button>
                                                <div className="pq-cart-header">
                                                    <h3 className="modal-title">Your Cart
                                                        <span className="cart-panel-counter">0</span>
                                                    </h3>
                                                </div>
                                                <div className="widget_shopping_cart_content">
                                                    <p>No products in the cart.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
