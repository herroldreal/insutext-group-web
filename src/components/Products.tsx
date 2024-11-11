import React from 'react'
import '../assets/css/responsive.css';
import '../assets/css/style.css';
import '../assets/css/ionicons.min.css';
import '../assets/css/animations.min.css';
import '../assets/css/bootstrap.min.css';

const Products: React.FC = () => {
    return (
        <section className="product pq-bg-transparent pq-mt-n-500 pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pq-section-title pq-style-1 text-center">
                        <span className="pq-section-sub-title">
                            <img decoding="async" src="/images/section-title/title-icon-primary.png" alt="image"/>our product
                        </span>
                            <h5 className="pq-section-main-title">the textiles product appear</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 pq-px-30">
                        <div className="gallery">
                            <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false"
                                 data-desk_num="3" data-lap_num="2" data-tab_num="2" data-mob_num="1" data-mob_sm="1"
                                 data-autoplay="true" data-loop="true" data-margin="30">
                                <div className="item">
                                    <a href="/images/gallery/1.jpg">
                                        <img src="/images/gallery/1.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="/images/gallery/2.jpg">
                                        <img src="/images/gallery/2.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="/images/gallery/3.jpg">
                                        <img src="/images/gallery/3.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="/images/gallery/4.jpg">
                                        <img src="/images/gallery/4.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="/images/gallery/5.jpg">
                                        <img src="/images/gallery/5.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="/images/gallery/6.jpg">
                                        <img src="/images/gallery/6.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;