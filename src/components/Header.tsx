import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/bootstrap.min.css';
import '../assets/css/responsive.css';
import '../assets/css/style.css';
import '../assets/css/ionicons.min.css';
import '../assets/css/animations.min.css';

const Header: React.FC = () => {
    return (
        <header id="pq-header" className="pq-header-style-2 pq-has-sticky">
            <div className="pq-top-header top-style-1">
                <div className="container-fluid">
                    <div className="row flex-row-reverse">
                        <div className="col-md-6 text-right">
                            <div className="pq-header-social text-right">
                                <ul>
                                    <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-youtube"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pq-header-contact">
                                <ul>
                                    <li>
                                        <Link to="tel:+50585187392">
                                            <i className="fas fa-phone"></i>
                                            <span>+505 8518 7392</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="mailto:info@insutexgroup.com">
                                            <i className="fas fa-envelope"></i>
                                            <span>info@insutexgroup.com</span>
                                        </Link>
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
                                <Link className="navbar-brand" to="/">
                                    <img className="img-fluid logo" src="/images/logos/header-logo.png"
                                         alt="insutex"/>
                                </Link>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div id="pq-menu-contain" className="pq-menu-contain">
                                        <ul id="pq-main-menu" className="navbar-nav ml-auto">
                                            <li className="menu-item current-menu-item menu-item-has-children">
                                                <Link to="/">Inicio</Link>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <Link to="/aboutus">Nosotros</Link>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <Link to="/">Servicios</Link>
                                                <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                <ul className="sub-menu">
                                                    <li className="menu-item">
                                                        <Link to="/">Maquinas Industrial &
                                                            Casera</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link to="/">Repuestos & Talleres</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link to="/">Manufactura</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link to="/">Insumos Textiles</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link to="/">Bordados</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <Link to="/tienda">Tienda</Link>
                                                <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                <ul className="sub-menu">
                                                    <li className="menu-item">
                                                        <Link to="/industriales">Industrial</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link to="/caseras">Caseras</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link to="/gobierno">Ventas al Gobierno</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link to="/taller">Talleres</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link to="/promociones">Promociones</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <Link to="/blog">Blog</Link>
                                                <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                <ul className="sub-menu">
                                                    <li className="menu-item menu-item-has-children">
                                                        <Link to="/news">Noticias</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link to="/videos">Videos de apoyo</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/contactus">Contactanos</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pq-menu-search-block">
                                    <Link to="/" className="pq-tools-serach-button"
                                          data-bs-toggle="offcanvas"
                                          data-bs-target="#offcanvassearch">
                                        <i className="ti-search"></i>
                                    </Link>
                                    <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvassearch">
                                        <form className="search-form">
                                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                                    aria-label="Close"></button>
                                            <label>
                                                <span className="screen-reader-text">Search for:</span>
                                                <input type="search" className="search-field" placeholder="Search …"/>
                                            </label>
                                            <button type="submit" className="search-submit">
                                                <span className="screen-reader-text">Search</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="pq-shop-btn">
                                    <div className="pq-cart-button">
                                        <Link to="/" className="pq-tools-button"
                                              data-bs-toggle="offcanvas"
                                              data-bs-target="#offcanvascart">
                                            <i className="ti-shopping-cart"></i>
                                            <span className="basket-item-count">0</span>
                                        </Link>
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
    );
};

export default Header;
