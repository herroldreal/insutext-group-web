import React from "react";
import '../assets/css/responsive.css';
import '../assets/css/style.css';
import '../assets/css/ionicons.min.css';
import '../assets/css/animations.min.css';
import '../assets/css/bootstrap.min.css';

const Clients: React.FC = () => {
    return (
        <section className="client pq-bg-dark pq-bg-img-4 pq-pb-500 wow animated fadeInUp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 pq-border-right">
                        <div className="pq-counter pq-counter-default">
                            <div className="pq-counter-num-prefix">
                                <h5 className="timer" data-to="6050" data-speed="5000">6050</h5>
                            </div>
                            <span className="pq-counter-title">Satisfied clients</span>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 mt-4 mt-md-0 pq-ps-90">
                        <div className="pq-client-box pq-client-style-1">
                            <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false"
                                 data-desk_num="5" data-lap_num="3" data-tab_num="2" data-mob_num="2" data-mob_sm="2"
                                 data-autoplay="false" data-loop="true" data-margin="30">
                                <div className="item">
                                    <div className="pq-client-box pq-style-1">
                                        <div>
                                            <img decoding="async" src="/images/client/slider/1.png" alt="pq-client-img"
                                                 className="pq-client-img"/>
                                            <img decoding="async" src="/images/client/slider/h1.png" alt="pq-client-img"
                                                 className="pq-client-hover-img"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pq-client-box pq-style-1">
                                        <div>
                                            <img decoding="async" src="/images/client/slider/2.png" alt="pq-client-img"
                                                 className="pq-client-img"/>
                                            <img decoding="async" src="/images/client/slider/h2.png" alt="pq-client-img"
                                                 className="pq-client-hover-img"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pq-client-box pq-style-1">
                                        <div>
                                            <img decoding="async" src="/images/client/slider/3.png" alt="pq-client-img"
                                                 className="pq-client-img"/>
                                            <img decoding="async" src="/images/client/slider/h3.png" alt="pq-client-img"
                                                 className="pq-client-hover-img"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pq-client-box pq-style-1">
                                        <div>
                                            <img decoding="async" src="/images/client/slider/4.png" alt="pq-client-img"
                                                 className="pq-client-img"/>
                                            <img decoding="async" src="/images/client/slider/h4.png" alt="pq-client-img"
                                                 className="pq-client-hover-img"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pq-client-box pq-style-1">
                                        <div>
                                            <img decoding="async" src="/images/client/slider/5.png" alt="pq-client-img"
                                                 className="pq-client-img"/>
                                            <img decoding="async" src="/images/client/slider/h5.png" alt="pq-client-img"
                                                 className="pq-client-hover-img"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pq-client-box pq-style-1">
                                        <div>
                                            <img decoding="async" src="/images/client/slider/6.png" alt="pq-client-img"
                                                 className="pq-client-img"/>
                                            <img decoding="async" src="/images/client/slider/h6.png" alt="pq-client-img"
                                                 className="pq-client-hover-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 p-0">
                        <div className="divider pq-pt-60"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;