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

            var value = '1';
            if (number < 100) value = '0.' + number
            else if (number == 100) value = '1'

            // @ts-ignore
            jQuery(this).circleProgress({
                value,
                size: size,
                emptyFill: empty_color,
                fill: {
                    color: fill_color
                },
            }).on('circle-animation-progress', function (event: any, progress: any) {
                // @ts-ignore
                //jQuery(this).find('.pq-progress-count').html(Math.round(number * progress) + '%');
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
                            <img alt='' decoding="async" src="/images/section-title/title-icon-primary.png"/>mas sobre de nosotros
                        </span>
                            <h5 className="pq-section-main-title">Ofrecemos un servicio y productos de calidad desde
                                todos los ángulos.</h5>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="pq-circle-progress pq-circle-progress-style-1">
                            <div className="pq-circle-progress-bar" data-size="180" data-thickness="5"
                                 data-skill-level="100"
                                 data-empty-color="#F5F5F5" data-fill-color="#F56800">
                                <span className="pq-progress-count">15+
                                    <br/> marcas</span>
                            </div>
                            <div className="pq-progress-details">
                                <span className="pq-progress-desc">Ofrecemos amplio stock de maquinaria casera e industrial para el sector textil</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mt-4 mt-md-0">
                        <div className="pq-circle-progress pq-circle-progress-style-1">
                            <div className="pq-circle-progress-bar" data-size="180" data-thickness="5"
                                 data-skill-level="100"
                                 data-empty-color="#F5F5F5" data-fill-color="#F56800">
                                <span className="pq-progress-count">800+
                                <br/> clientes</span>
                            </div>
                            <div className="pq-progress-details">
                                {/*<h5 className="pq-progress-title">clientes de confianza</h5>*/}
                                <span className="pq-progress-desc">Clientes que confían en nuestros productos y servicios para alcanzar sus objetivos con calidad y excelencia.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mt-4 mt-xl-0">
                        <div className="pq-circle-progress pq-circle-progress-style-1">
                            <div className="pq-circle-progress-bar" data-size="180" data-thickness="5"
                                 data-skill-level="100"
                                 data-empty-color="#F5F5F5" data-fill-color="#F56800">
                                <span className="pq-progress-count">25+
                                <br/> años</span>
                            </div>
                            <div className="pq-progress-details">
                                {/*<h5 className="pq-progress-title">años de experiencia</h5>*/}
                                <span className="pq-progress-desc">experiencia y trayectoria que respalda nuestro compromiso y conocimiento en el sector textil.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mt-4 mt-xl-0">
                        <div className="pq-circle-progress pq-circle-progress-style-1">
                            <div className="pq-circle-progress-bar" data-size="180" data-thickness="5"
                                 data-skill-level="100"
                                 data-empty-color="#F5F5F5" data-fill-color="#F56800">
                                <span className="pq-progress-count">14K+ <br/> items</span>
                            </div>
                            <div className="pq-progress-details">
                                {/*<h5 className="pq-progress-title">repuestos en inventario</h5>*/}
                                <span className="pq-progress-desc">en inventario, amplio stock de repuestos para maquinaria industrial y textil, ofreciendo la mejor calidad-precio</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process;