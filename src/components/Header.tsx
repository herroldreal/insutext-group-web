import React from 'react';
import '../assets/css/bootstrap.min.css'
import '../assets/css/responsive.css'
import '../assets/css/style.css';
import '../assets/css/ionicons.min.css'
import '../assets/css/animations.min.css'

const Header: React.FC = () => {
    return (
        <>
            <div className="pq-background-overlay"></div>
            <div className="pq-sidebar">
                <div className="pq-close-btn">
                    <a className="pq-close" href="/#">
                        <i className="ion-android-close"></i>
                    </a>
                </div>
                <div className="pq-sidebar-block mCustomScrollbar" data-simplebar>
                    <div className="pq-sidebar-header">
                        <img src="/images/logos/sidebar-logo.png" className="pq-sidebar-logo img-fluid"
                             alt="textica-sidebar-logo"/>
                    </div>
                    <div className="pq-sidebar-content">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the
                            industry's standard.</p>
                    </div>
                    <div className="pq-sidebars">
                        <div className="pq-widget-menu widget">
                            <h4 className="footer-title">Recent Posts</h4>
                            <div className="pq-footer-recent-post">
                                <div className="pq-footer-recent-post-media">
                                    <a href="strategies-for-reducing-environmental.html">
                                        <img src="/images/recent-posts/1.jpg" alt="" className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="pq-footer-recent-post-info">
                                    <h6>
                                        <a href="strategies-for-reducing-environmental.html">Strategies for Reducing
                                            Environmental</a>
                                    </h6>
                                    <a href="strategies-for-reducing-environmental.html" className="pq-post-date">
                                        <i className="far fa-calendar-alt"></i>April <span>4</span>, 2023
                                    </a>
                                </div>
                            </div>
                            <div className="pq-footer-recent-post">
                                <div className="pq-footer-recent-post-media">
                                    <a href="strategies-for-reducing-environmental.html">
                                        <img src="/images/recent-posts/2.jpg" alt="" className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="pq-footer-recent-post-info">
                                    <h6>
                                        <a href="strategies-for-reducing-environmental.html">These services involve
                                            repairing&nbsp;</a>
                                    </h6>
                                    <a href="strategies-for-reducing-environmental.html" className="pq-post-date">
                                        <i className="far fa-calendar-alt"></i>April <span>4</span>, 2023
                                    </a>
                                </div>
                            </div>
                            <div className="pq-footer-recent-post">
                                <div className="pq-footer-recent-post-media">
                                    <a href="strategies-for-reducing-environmental.html">
                                        <img src="/images/recent-posts/3.jpg" alt="" className="img-fluid"></img>
                                    </a>
                                </div>
                                <div className="pq-footer-recent-post-info">
                                    <h6>
                                        <a href="strategies-for-reducing-environmental.html">textile services provide
                                            businesses</a>
                                    </h6>
                                    <a href="strategies-for-reducing-environmental.html" className="pq-post-date">
                                        <i className="far fa-calendar-alt"></i>April <span>4</span>, 2023
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pq-sidebar-contact">
                        <ul className="pq-contact">
                            <li>
                                <i className="fa fa-map-marker"></i>
                                <span>Themeforest, Envato HQ </span>
                            </li>
                            <li>
                                <a href="tel:+18000016555">
                                    <i className="fas fa-phone"></i>
                                    <span>+1800-001-6555</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@peacefulqode.com">
                                    <i className="fas fa-envelope"></i>
                                    <span>info@peacefulqode.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="pq-sidebar-social">
                        <ul>
                            <li><a href="/#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="/#"><i className="fab fa-google-plus-g"></i></a></li>
                            <li><a href="/#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="/#"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <header id="pq-header" className="pq-header-style-2 pq-has-sticky">
                <div className="pq-top-header top-style-1">
                    <div className="container-fluid">
                        <div className="row flex-row-reverse">
                            <div className="col-md-6 text-right">
                                <div className="pq-header-social text-right">
                                    <ul>
                                        <li><a href="/#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="/#"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="/#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="/#"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="pq-header-contact">
                                    <ul>
                                        <li>
                                            <a href="tel:+18000016555">
                                                <i className="fas fa-phone"></i>
                                                <span>+1800-001-6555</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:info@peacefulqode.com">
                                                <i className="fas fa-envelope"></i>
                                                <span>info@peacefulqode.com</span>
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
                                        <img className="img-fluid logo" src="images/logos/header-logo.png"
                                             alt="textica"/>
                                    </a>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <div id="pq-menu-contain" className="pq-menu-contain">
                                            <ul id="pq-main-menu" className="navbar-nav ml-auto">
                                                <li className="menu-item current-menu-item menu-item-has-children">
                                                    <a href="/#">Home</a>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item">v
                                                            <a href="index.html">Home 1</a>
                                                        </li>
                                                        <li className="menu-item  current-menu-item">
                                                            <a href="index-2.html">Home 2</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="index-3.html">Home 3</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <a href="/#">Pages</a>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item">
                                                            <a href="about-us.html">About Us</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="our-services.html">Our Services</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="our-pricing.html">Our Pricing</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="our-team.html">Our Team</a>
                                                        </li>
                                                        <li className="menu-item menu-item-has-children">
                                                            <a href="/#">Shop</a>
                                                            <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item menu-item-has-children">
                                                                    <a href="/#">shop layout</a>
                                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                                    <ul className="sub-menu">
                                                                        <li className="menu-item">
                                                                            <a href="2-column-shop.html">2 Column
                                                                                Shop</a>
                                                                        </li>
                                                                        <li className="menu-item">
                                                                            <a href="3-column-shop.html">3 Column
                                                                                Shop</a>
                                                                        </li>
                                                                        <li className="menu-item">
                                                                            <a href="4-column-shop.html">4 Column
                                                                                Shop</a>
                                                                        </li>
                                                                        <li className="menu-item">
                                                                            <a href="5-column-shop.html">5 Column
                                                                                Shop</a>
                                                                        </li>
                                                                        <li className="menu-item">
                                                                            <a href="6-column-shop.html">6 Column
                                                                                Shop</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="menu-item menu-item-has-children">
                                                                    <a href="/#">product filter</a>
                                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                                    <ul className="sub-menu">
                                                                        <li className="menu-item">
                                                                            <a href="on-sale-product.html">On Sale
                                                                                Product</a>
                                                                        </li>
                                                                        <li className="menu-item">
                                                                            <a href="best-selling-products.html">Best
                                                                                Selling
                                                                                Products</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="faqs.html">FAQs</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="404.html">404</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <a href="/#">Services</a>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item">
                                                            <a href="fabric-printing.html">Maquinaria Industrial & Casera</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="fabric-dyeing.html">Repuestos Industriales</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="manufacture.html">Manufactura</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="engineering.html">Insumos Textiles</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="stich-fabric.html">Taller</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="we-design-fabric.html">Bordados</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <a href="/#">Portfolio</a>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item menu-item-has-children">
                                                            <a href="/#">Projects Grid</a>
                                                            <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item">
                                                                    <a href="2-column.html">2 Column</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="3-column.html">3 Column</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="3-column-wide.html">3 Column Wide</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="4-column.html">4 Column</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="4-column-wide.html">4 Column Wide</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-has-children">
                                                            <a href="/#">Portfolio Masonry</a>
                                                            <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item">
                                                                    <a href="standard.html">Standard</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="standard-wide.html">Standard Wide</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="masonry.html">Masonry</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="masonry-wide.html">Masonry Wide</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-has-children">
                                                            <a href="/#">Portfolio Slider</a>
                                                            <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item">
                                                                    <a href="2-column-slider.html">2 Column Slider</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="3-column-slider.html">3 Column Slider</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="3-column-slider-wide.html">3 Column Slider
                                                                        Wide</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="4-column-slider.html">4 Column Slider</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="4-column-slider-wide.html">4 Column Slider
                                                                        Wide</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="textiles-and-fashion.html">Portfolio Single</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <a href="/#">Blog</a>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item menu-item-has-children">
                                                            <a href="/#">Grid Style</a>
                                                            <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item">
                                                                    <a href="1-column-blog.html">1 Column Blog</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="2-column-blog.html">2 Column Blog</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="3-column-blog.html">3 Column Blog</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-has-children">
                                                            <a href="/#">Blog Sidebar</a>
                                                            <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item">
                                                                    <a href="left-sidebar.html">Left Sidebar</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="right-sidebar.html">Right Sidebar</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="strategies-for-reducing-environmental.html">Blog
                                                                Single</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="contact.html">Contact</a>
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
                                    <div className="pq-toggle-btn">
                                        <a href="/#" className="menu-toggle">Menu</a>
                                    </div>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent"
                                            aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
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
