import React from 'react';

const ServiceSection: React.FC = () => {
    return (
        <>
            <section className="service pq-bg-img-1">
                <div className="container">
                    <div className="row justify-content-center">
                        {[
                            {
                                imgSrc: '/images/service/fancy-box-style-1/1.jpg',
                                iconClass: 'flaticon-textile',
                                title: 'Fabric Design',
                                description: 'Laundering services can be provided bytes commercial test Alteration provide',
                                link: 'fabric-printing.html',
                            },
                            {
                                imgSrc: '/images/service/fancy-box-style-1/2.jpg',
                                iconClass: 'flaticon-textile-1',
                                title: 'Sustain Design',
                                description: 'Laundering services can be provided bytes commercial test Alteration provide',
                                link: 'fabric-dyeing.html',
                            },
                            {
                                imgSrc: '/images/service/fancy-box-style-1/3.jpg',
                                iconClass: 'flaticon-knitting',
                                title: 'Culture Design',
                                description: 'Laundering services can be provided bytes commercial test Alteration provide',
                                link: 'stich-fabric.html',
                            },
                        ].map((service, index) => (
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6 mt-4 wow animated fadeInUp">
                                <div className="pq-fancy-box pq-style-1">
                                    <div className="pq-fancy-media">
                                        <img decoding="async" src={service.imgSrc} alt="box" />
                                    </div>
                                    <div className="pq-fancy-box-info">
                                        <div className="pq-fancy-box-icon">
                                            <i className={service.iconClass}></i>
                                        </div>
                                        <h4 className="pq-fancy-box-title">{service.title}</h4>
                                        <p className="pq-fancybox-description">{service.description}</p>
                                        <div className="pq-btn-container">
                                            <a className="pq-button pq-button-link" href={service.link}>
                                                <div className="pq-button-block">
                                                    <span className="pq-button-text">read more</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="pq-svg-arrow" width="34.899" height="14.585" viewBox="0 0 34.899 14.585">
                                                        <path
                                                            d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                                            transform="translate(34.399 14.056) rotate(180)"
                                                            fill="currentColor"
                                                            stroke="currentColor"
                                                            strokeWidth="1"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-lg-12 wow animated fadeInUp">
                            <div className="pq-service-title-box">
                                <h4 className="pq-service-box-sub-title">Since 1990</h4>
                                <h2 className="pq-service-box-title">Create your design only for the fabric production and natural fabrics from various types and comfortable.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Segunda Sección de Servicios */}
            <section className="service pq-bg-primary pq-bg-img-2 py-lg-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="pq-service-div">
                                <div className="pq-section-title pq-style-1 pq-mb-45">
                  <span className="pq-section-sub-title">
                    <img decoding="async" src="/images/section-title/title-icon-white.png" alt="image" />
                    our service
                  </span>
                                    <h5 className="pq-section-main-title">Take a Look Into Our Best Services</h5>
                                    <p className="pq-section-description">Textiles are materials made from fibers or yarn, and they are used to create a wide range of products such as clothing and industrial goods.</p>
                                </div>
                                <a className="pq-button pq-button-flat" href="our-services.html">
                                    <div className="pq-button-block">
                                        <span className="pq-button-text">Read more</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="pq-svg-arrow" width="34.899" height="14.585" viewBox="0 0 34.899 14.585">
                                            <path
                                                d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                                transform="translate(34.399 14.056) rotate(180)"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                            ></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="service-verticle-slider">
                                {[
                                    { imgSrc: 'images/service/vertical-slider/1.jpg', title: 'Manufacture' },
                                    { imgSrc: 'images/service/vertical-slider/2.jpg', title: 'Fabric Printing' },
                                    { imgSrc: 'images/service/vertical-slider/3.jpg', title: 'Fabric Dyeing' },
                                    { imgSrc: 'images/service/vertical-slider/4.jpg', title: 'Engineering' },
                                    { imgSrc: 'images/service/vertical-slider/5.jpg', title: 'Stich Fabric' },
                                    { imgSrc: 'images/service/vertical-slider/6.jpg', title: 'Design Fabric' },
                                ].map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="pq-service-img">
                                            <img decoding="async" src={item.imgSrc} alt="servicebox" />
                                        </div>
                                        <h5 className="pq-service-title">{item.title}</h5>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceSection;
