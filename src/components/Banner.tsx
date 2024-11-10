import React, {useRef} from 'react';
import '../assets/css/ionicons.min.css'
import '../assets/css/bootstrap.min.css'

const Banner: React.FC = () => {
    const bannerRef = useRef(null);

  /*  useEffect(() => {
        // Espera que jQuery y Revolution Slider estén disponibles
        const interval = setInterval(() => {
            if (window.jQuery && window.jQuery.fn && window.jQuery.fn.revolution) {
                clearInterval(interval);
                window.jQuery(bannerRef).show().revolution({
                    sliderType: 'standard',
                    sliderLayout: 'auto',
                    delay: 5000,
                    navigation: {
                        arrows: {enable: true},
                    },
                    gridwidth: 1230,
                    gridheight: 800,
                });
            }
        }, 100); // Revisa cada 100ms hasta que jQuery y Revolution estén listos
    }, []);
*/
    return (
        <div className="banner py-0">
            <p className="rs-p-wp-fix"></p>
            <rs-module-wrap
                id="rev_slider_3_1"
                data-alias="slider-2-1"
                data-source="gallery"
                style={{
                    visibility: 'hidden',
                    background: 'transparent',
                    padding: 0,
                    margin: '0px auto',
                }}
                ref={bannerRef}
            >
                <rs-module id="rev_slider_3_1" data-version="6.6.12">
                    <rs-slides style={{overflow: 'hidden', position: 'absolute'}}>
                        <rs-slide style={{position: 'absolute'}} data-key="rs-5" data-title="Slide">
                            <img
                                src="/rev/assets/index/dummy.png"
                                alt="slide"
                                title="1"
                                width="1920"
                                height="1000"
                                className="rev-slidebg tp-rs-img rs-lazyload"
                                data-lazyload="rev/assets/index/1-12.jpg"
                                data-no-retina
                            />
                            <rs-layer
                                id="slider-3-slide-5-layer-0"
                                data-type="text"
                                data-color="#f56800"
                                data-rsp_ch="on"
                                data-xy="x:c;y:m;yo:-75px,-63px,-48px,-55px;"
                                data-text="w:normal;s:18,16,16,14;l:26,24,24,22;ls:1px,0px,0px,0px;fw:700;"
                                style={{
                                    zIndex: 8,
                                    backgroundColor: 'rgba(254,127,50,0)',
                                    fontFamily: "'Red Hat Display'",
                                    textTransform: 'uppercase',
                                }}
                            >
                                Welcome to Textica
                            </rs-layer>
                        </rs-slide>
                    </rs-slides>
                </rs-module>
            </rs-module-wrap>
        </div>
    );
};

export default Banner;
