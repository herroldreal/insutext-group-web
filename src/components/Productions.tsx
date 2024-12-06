import React from 'react'
import '../assets/css/responsive.css';
import '../assets/css/style.css';
import '../assets/css/ionicons.min.css';
import '../assets/css/animations.min.css';
import '../assets/css/bootstrap.min.css';

const Productions: React.FC = () => {
    return (
        <section className="production">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pq-section-title pq-style-1 text-center">
                        <span className="pq-section-sub-title">
                            <img alt='' decoding="async" src="/images/section-title/title-icon-primary.png"/>nuestro proceso
                        </span>
                            <h5 className="pq-section-main-title">Textiles e Insumos para la Moda: Optimizando tu
                                Producción</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="pq-border-line"></div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pq-timelines">
                            <div className="timeline">
                                <div className="timeline-states">
                                    <div className="timeline-state">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-6 pe-0">
                                                <div className="timeline-image pq-pe-90">
                                                    <img decoding="async" src="/images/timeline/1.jpg"
                                                         className="wow animated fadeInLeft" alt="images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mt-4 mt-md-0 ps-0">
                                                <div className="timeline-details position-relative">
                                                    <div className="timeline-content pq-ps-90">
                                                        <h3 className="mb-2 wow animated fadeInRight">01. Explora todo
                                                            lo que ofrecemos</h3>
                                                        <p className="wow animated fadeInRight">Accede a nuestra amplia
                                                            gama de productos
                                                            que incluye maquinaria industrial, herramientas
                                                            especializadas y pequeños insumos
                                                            como botones, hilos, telas, zippers y más. Cada artículo ha
                                                            sido seleccionado para
                                                            garantizar calidad y durabilidad, satisfaciendo las
                                                            necesidades de la industria textil
                                                            y los proyectos más específicos.</p>
                                                        {/*<a className="pq-button pq-button-link wow animated fadeInRight"
                                                           href="manufacture.html">
                                                            <div className="pq-button-block">
                                                                <span className="pq-button-text">View more</span>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     className="pq-svg-arrow" width="34.899"
                                                                     height="14.585"
                                                                     viewBox="0 0 34.899 14.585">
                                                                    <path
                                                                        d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                                                        transform="translate(34.399 14.056) rotate(180)"
                                                                        fill="currentColor" stroke="currentColor"
                                                                        stroke-width="1"></path>
                                                                </svg>
                                                            </div>
                                                        </a>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pq-dot-circle wow animated zoomIn"></div>
                                    </div>
                                    <div className="timeline-state pq-py-60">
                                        <div className="row align-items-center flex-column-reverse flex-md-row">
                                            <div className="col-lg-6 col-md-6 mt-4 mt-md-0 pe-0">
                                                <div className="timeline-content pq-pe-90">
                                                    <h3 className="mb-2 wow animated fadeInLeft">02. Asesoría para
                                                        Seleccionar lo Mejor</h3>
                                                    <p className="wow animated fadeInLeft">Nuestro equipo de expertos
                                                        está aquí para ayudarte a identificar
                                                        los productos ideales para tus requerimientos, ya sea maquinaria
                                                        para un taller industrial
                                                        o insumos pequeños para detalles de diseño. Te ofrecemos una
                                                        experiencia personalizada para que
                                                        encuentres exactamente lo que necesitas.
                                                    </p>
                                                    {/*<a className="pq-button pq-button-link wow animated fadeInLeft"
                                                       href="we-design-fabric.html">
                                                        <div className="pq-button-block">
                                                            <span className="pq-button-text">View more</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                 className="pq-svg-arrow" width="34.899" height="14.585"
                                                                 viewBox="0 0 34.899 14.585">
                                                                <path
                                                                    d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                                                    transform="translate(34.399 14.056) rotate(180)"
                                                                    fill="currentColor" stroke="currentColor"
                                                                    stroke-width="1"></path>
                                                            </svg>
                                                        </div>
                                                    </a>*/}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 ps-0">
                                                <div className="timeline-image pq-ps-90">
                                                    <img decoding="async" src="/images/timeline/2.jpg"
                                                         className="wow animated fadeInRight" alt="images"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pq-dot-circle wow animated zoomIn"></div>
                                    </div>
                                    <div className="timeline-state">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-6 pe-0">
                                                <div className="timeline-image pq-pe-90">
                                                    <img decoding="async" src="/images/timeline/3.jpg"
                                                         className="wow animated fadeInLeft" alt="images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mt-4 mt-md-0 ps-0">
                                                <div className="timeline-content pq-ps-90">
                                                    <h3 className="mb-2 wow animated fadeInRight">03. Gestión de Pedido
                                                        Eficiente y Segura</h3>
                                                    <p className="wow animated fadeInRight">Desde que realizas tu
                                                        pedido, nos aseguramos de procesarlo con precisión,
                                                        verificando la disponibilidad de los productos y asegurando que
                                                        cumplan con los estándares de calidad.
                                                        Ofrecemos métodos de pago seguros y opciones flexibles para tu
                                                        conveniencia.
                                                    </p>
                                                    {/*<a className="pq-button pq-button-link wow animated fadeInRight"
                                                       href="fabric-dyeing.html">
                                                        <div className="pq-button-block">
                                                            <span className="pq-button-text">View more</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                 className="pq-svg-arrow" width="34.899" height="14.585"
                                                                 viewBox="0 0 34.899 14.585">
                                                                <path
                                                                    d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                                                    transform="translate(34.399 14.056) rotate(180)"
                                                                    fill="currentColor" stroke="currentColor"
                                                                    stroke-width="1"></path>
                                                            </svg>
                                                        </div>
                                                    </a>*/}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pq-dot-circle wow animated zoomIn"></div>
                                    </div>
                                    <div className="timeline-state pq-py-60">
                                        <div className="row align-items-center flex-column-reverse flex-md-row">
                                            <div className="col-lg-6 col-md-6 mt-4 mt-md-0 pe-0">
                                                <div className="timeline-content pq-pe-90">
                                                    <h3 className="mb-2 wow animated fadeInLeft">04. Entrega Rápida con
                                                        Soporte Continuo</h3>
                                                    <p className="wow animated fadeInLeft">Garantizamos que tus
                                                        productos lleguen a tiempo y en perfectas condiciones.
                                                        Además, brindamos soporte continuo para responder tus preguntas,
                                                        resolver problemas y asegurarnos de que tengas
                                                        una experiencia excelente con nuestros servicios.
                                                    </p>
                                                    {/*<a className="pq-button pq-button-link wow animated fadeInLeft"
                                                       href="we-design-fabric.html">
                                                        <div className="pq-button-block">
                                                            <span className="pq-button-text">View more</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                 className="pq-svg-arrow" width="34.899" height="14.585"
                                                                 viewBox="0 0 34.899 14.585">
                                                                <path
                                                                    d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                                                    transform="translate(34.399 14.056) rotate(180)"
                                                                    fill="currentColor" stroke="currentColor"
                                                                    stroke-width="1"></path>
                                                            </svg>
                                                        </div>
                                                    </a>*/}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 ps-0">
                                                <div className="timeline-image pq-ps-90">
                                                    <img decoding="async" src="/images/gallery/2.jpg"
                                                         className="wow animated fadeInRight" alt="images"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pq-dot-circle wow animated zoomIn"></div>
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

export default Productions;
