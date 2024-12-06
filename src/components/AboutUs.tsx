import React from 'react';
import '../assets/css/responsive.css';
import '../assets/css/style.css';
import '../assets/css/ionicons.min.css';
import '../assets/css/animations.min.css';
import '../assets/css/bootstrap.min.css';

const AboutUs: React.FC = () => {
    return (
        <section className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="pq-about-us-img">
                            <img src="/images/about-us/3.jpg" className="pq-about-us-img-1 wow animated fadeInLeft"
                                 alt=""/>
                            <img src="/images/about-us/4.jpg" className="pq-about-us-img-2 wow animated zoomIn" alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-6 mt-4 mt-xl-0 ps-xl-5 wow animated fadeInRight">
                        <div className="pq-section-title pq-style-1 pq-mb-30">
                        <span className="pq-section-sub-title">
                            <img decoding="async" src="/images/section-title/title-icon-primary.png" alt=""/>Acerca de nosotros
                        </span>
                            {/*<h5 className="pq-section-main-title">Construyamos algo creativo juntos</h5>*/}
                            <h5 className="pq-section-main-title">Construyamos juntos</h5>
                            <p className="pq-section-description">En InsuTex Group, somos tu aliado confiable en el
                                mundo de la manufactura textil.
                                Nos especializamos en ofrecer soluciones completas tanto para la industria textil como
                                para talleres y hogares, apoyando la creatividad y productividad
                                de nuestros clientes con productos de alta calidad.
                            </p>
                        </div>
                        <ul className="pq-list-check pq-mb-45">
                        <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Amplio Portafolio de Productos</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Compromiso con la Calidad</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Atención Integral para Todos</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Innovación y Cercanía</span>
                            </li>
                        </ul>
                        <a className="pq-button pq-button-flat" href="about-us.html">
                            <div className="pq-button-block">
                                <span className="pq-button-text">Leer mas</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="pq-svg-arrow" width="34.899"
                                     height="14.585"
                                     viewBox="0 0 34.899 14.585">
                                    <path
                                        d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                        transform="translate(34.399 14.056) rotate(180)" fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="1"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
