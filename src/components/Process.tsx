import React, {useEffect} from 'react'
import '../assets/css/responsive.css';
import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/owl.carousel.min.css';

const Process: React.FC = () => {

    useEffect(() => {
        jQuery('.pq-circle-progress-bar').each(function () {
            var number = jQuery(this).data('skill-level');
            var empty_color = jQuery(this).data('empty-color');
            var fill_color = jQuery(this).data('fill-color');
            var size = jQuery(this).data('size');

            // @ts-ignore
            jQuery(this).circleProgress({
                value: '0.' + number,
                size: size,
                emptyFill: empty_color,
                fill: {
                    color: fill_color
                },
            }).on('circle-animation-progress', function (event: any, progress: any) {
                // @ts-ignore
                jQuery(this).find('.pq-progress-count').html(Math.round(number * progress) + '%');
            });
        });
    }, []);

    return (
        <section className="process wow animated fadeInUp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pq-section-title pq-style-1 text-center">
                        <span className="pq-section-sub-title">
                            <img alt='' decoding="async" src="/images/section-title/title-icon-primary.png"/>our working process
                        </span>
                            <h5 className="pq-section-main-title">We Give Top Production From Every Angle</h5>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="pq-circle-progress pq-circle-progress-style-1">
                            <div className="pq-circle-progress-bar" data-size="180" data-thickness="5"
                                 data-skill-level="65"
                                 data-empty-color="#F5F5F5" data-fill-color="#F56800">
                                <span className="pq-progress-count">65%</span>
                            </div>
                            <div className="pq-progress-details">
                                <h5 className="pq-progress-title">febric design</h5>
                                <span className="pq-progress-desc">From Handcrafted such as using organic Textiles Production</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mt-4 mt-md-0">
                        <div className="pq-circle-progress pq-circle-progress-style-1">
                            <div className="pq-circle-progress-bar" data-size="180" data-thickness="5"
                                 data-skill-level="75"
                                 data-empty-color="#F5F5F5" data-fill-color="#F56800">
                                <span className="pq-progress-count">75%</span>
                            </div>
                            <div className="pq-progress-details">
                                <h5 className="pq-progress-title">trusted clients</h5>
                                <span className="pq-progress-desc">From Handcrafted such as using organic Textiles Production</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mt-4 mt-xl-0">
                        <div className="pq-circle-progress pq-circle-progress-style-1">
                            <div className="pq-circle-progress-bar" data-size="180" data-thickness="5"
                                 data-skill-level="85"
                                 data-empty-color="#F5F5F5" data-fill-color="#F56800">
                                <span className="pq-progress-count">85%</span>
                            </div>
                            <div className="pq-progress-details">
                                <h5 className="pq-progress-title">experience years</h5>
                                <span className="pq-progress-desc">From Handcrafted such as using organic Textiles Production</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mt-4 mt-xl-0">
                        <div className="pq-circle-progress pq-circle-progress-style-1">
                            <div className="pq-circle-progress-bar" data-size="180" data-thickness="5"
                                 data-skill-level="55"
                                 data-empty-color="#F5F5F5" data-fill-color="#F56800">
                                <span className="pq-progress-count">55%</span>
                            </div>
                            <div className="pq-progress-details">
                                <h5 className="pq-progress-title">visited confernance</h5>
                                <span className="pq-progress-desc">From Handcrafted such as using organic Textiles Production</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process;