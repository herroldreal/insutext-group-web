import React from 'react';
import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/animations.min.css';
import '../assets/css/responsive.css';
import '../assets/css/ionicons.min.css';

const ServiceSection: React.FC = () => {
    return (
        <section className="service pq-bg-grey">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 wow animated fadeInLeft">
                        <div className="pq-section-title pq-style-1 pq-mb-45">
                        <span className="pq-section-sub-title">
                            <img decoding="async" src="/images/section-title/title-icon-primary.png" alt="image"/>our services
                        </span>
                            <h5 className="pq-section-main-title">Exploring the Role of Textiles</h5>
                            <p className="pq-section-description">Textiles are materials made from fibers or yarn, and
                                they are used to create widetest range of products such as clothing and industrial
                                goods.</p>
                        </div>
                        <a className="pq-button pq-button-flat" href="our-services.html">
                            <div className="pq-button-block">
                                <span className="pq-button-text">Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="pq-svg-arrow" width="34.899"
                                     height="14.585"
                                     viewBox="0 0 34.899 14.585">
                                    <path
                                        d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                        transform="translate(34.399 14.056) rotate(180)" fill="currentColor"
                                        stroke="currentColor"
                                        stroke-width="1"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-8 pq-ps-60 mt-4 mt-xl-0 wow animated fadeInRight">
                        <div className="service-slider pq-slider-1">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="pq-content-column">
                                        <div className="pq-content-column-inner">
                                            <div className="slick-slider-main">
                                                <div className="item">
                                                    <div className="pq-service-box pq-style-1">
                                                        <div className="pq-service-media">
                                                            <img decoding="async"
                                                                 src="/images/service/slick-horizontal/1.jpg"
                                                                 alt="servicebox"/>
                                                        </div>
                                                        <div className="pq-service-box-info">
                                                            <div className="pq-service-icon">
                                                                <i className="flaticon-clothes"></i>
                                                            </div>
                                                            <h4 className="pq-service-box-title">fabric dyeing</h4>
                                                            <p className="pq-service-box-description">textiles that
                                                                cannot rental tsestr be washed with wate These servi
                                                                typically used wide range of products for delicate</p>
                                                            <div className="pq-btn-container">
                                                                <a className="pq-button pq-button-link"
                                                                   href="fabric-dyeing.html" tabIndex={0}>
                                                                    <div className="pq-button-block">
                                                                        <span
                                                                            className="pq-button-text">read more</span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             className="pq-svg-arrow" width="34.899"
                                                                             height="14.585"
                                                                             viewBox="0 0 34.899 14.585">
                                                                            <path
                                                                                d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                                                                transform="translate(34.399 14.056) rotate(180)"
                                                                                fill="currentColor"
                                                                                stroke="currentColor"
                                                                                stroke-width="1"></path>
                                                                        </svg>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="pq-service-box pq-style-1">
                                                        <div className="pq-service-media">
                                                            <img decoding="async"
                                                                 src="images/service/slick-horizontal/1.jpg"
                                                                 alt="servicebox"/>
                                                        </div>
                                                        <div className="pq-service-box-info">
                                                            <div className="pq-service-icon">
                                                                <i className="flaticon-knitting"></i>
                                                            </div>
                                                            <h4 className="pq-service-box-title">digital printing</h4>
                                                            <p className="pq-service-box-description">textiles that
                                                                cannot rental tsestr be washed with wate These servi
                                                                typically used wide range of products for delicate</p>
                                                            <div className="pq-btn-container">
                                                                <a className="pq-button pq-button-link"
                                                                   href="fabric-printing.html" tabIndex={-1}>
                                                                    <div className="pq-button-block">
                                                                        <span
                                                                            className="pq-button-text">read more</span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             className="pq-svg-arrow" width="34.899"
                                                                             height="14.585"
                                                                             viewBox="0 0 34.899 14.585">
                                                                            <path
                                                                                d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                                                                transform="translate(34.399 14.056) rotate(180)"
                                                                                fill="currentColor"
                                                                                stroke="currentColor"
                                                                                stroke-width="1"></path>
                                                                        </svg>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="pq-service-box pq-style-1">
                                                        <div className="pq-service-media">
                                                            <img decoding="async"
                                                                 src="/images/service/slick-horizontal/1.jpg"
                                                                 alt="servicebox"/>
                                                        </div>
                                                        <div className="pq-service-box-info">
                                                            <div className="pq-service-icon">
                                                                <i className="flaticon-pin"></i>
                                                            </div>
                                                            <h4 className="pq-service-box-title">Satin Weaving</h4>
                                                            <p className="pq-service-box-description">textiles that
                                                                cannot rental tsestr be washed with wate These servi
                                                                typically used wide range of products for delicate</p>
                                                            <div className="pq-btn-container">
                                                                <a className="pq-button pq-button-link"
                                                                   href="we-design-fabric.html" tabIndex={-1}>
                                                                    <div className="pq-button-block">
                                                                        <span
                                                                            className="pq-button-text">read more</span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             className="pq-svg-arrow" width="34.899"
                                                                             height="14.585"
                                                                             viewBox="0 0 34.899 14.585">
                                                                            <path
                                                                                d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                                                                transform="translate(34.399 14.056) rotate(180)"
                                                                                fill="currentColor"
                                                                                stroke="currentColor"
                                                                                stroke-width="1"></path>
                                                                        </svg>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="pq-service-box pq-style-1">
                                                        <div className="pq-service-media">
                                                            <img decoding="async"
                                                                 src="/images/service/slick-horizontal/1.jpg"
                                                                 alt="servicebox"/>
                                                        </div>
                                                        <div className="pq-service-box-info">
                                                            <div className="pq-service-icon">
                                                                <i className="flaticon-scissors-1"></i>
                                                            </div>
                                                            <h4 className="pq-service-box-title">fabric treatme</h4>
                                                            <p className="pq-service-box-description">textiles that
                                                                cannot rental tsestr be washed with wate These servi
                                                                typically used wide range of products for delicate</p>
                                                            <div className="pq-btn-container">
                                                                <a className="pq-button pq-button-link"
                                                                   href="stich-fabric.html" tabIndex={-1}>
                                                                    <div className="pq-button-block">
                                                                        <span
                                                                            className="pq-button-text">read more</span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             className="pq-svg-arrow" width="34.899"
                                                                             height="14.585"
                                                                             viewBox="0 0 34.899 14.585">
                                                                            <path
                                                                                d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                                                                transform="translate(34.399 14.056) rotate(180)"
                                                                                fill="currentColor"
                                                                                stroke="currentColor"
                                                                                stroke-width="1"></path>
                                                                        </svg>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="pq-thumbs-column">
                                        <div className="pq-thumbs-column-inner">
                                            <div className="slick-slider-thumb">
                                                <div className="item">
                                                    <h4>
                                                        <span><i className="flaticon-sewing-machine"></i></span> fabric
                                                        dyeing
                                                    </h4>
                                                </div>
                                                <div className="item">
                                                    <h4>
                                                        <span><i
                                                            className="flaticon-textile-printing"></i></span> digital
                                                        printing
                                                    </h4>
                                                </div>
                                                <div className="item">
                                                    <h4>
                                                        <span><i className="flaticon-sewing-machine-1"></i></span> Satin
                                                        Weaving
                                                    </h4>
                                                </div>
                                                <div className="item">
                                                    <h4>
                                                        <span><i className="flaticon-scissors-1"></i></span> fabric
                                                        treatme
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
