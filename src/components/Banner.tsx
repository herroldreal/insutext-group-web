import React from 'react';
import '../assets/css/responsive.css';
import '../assets/css/style.css';
import '../assets/css/ionicons.min.css';
import '../assets/css/animations.min.css';
import '../assets/css/bootstrap.min.css';

const Banner: React.FC = () => {
    return (
        <div className="banner py-0">
            <p className="rs-p-wp-fix"></p>
            <rs-module-wrap id="rev_slider_4_1_wrapper" data-alias="slider-1-1" data-source="gallery"
                            style={{
                                visibility: "hidden",
                                background: "transparent",
                                padding: 0,
                                margin: "0px auto",
                                marginTop: 0,
                                marginBottom: 0,
                            }}>
                <rs-module id="rev_slider_4_1" data-version="6.6.12">
                    <rs-slides style={{overflow: 'hidden', position: 'absolute'}}>
                        <rs-slide
                            style={{position: 'absolute'}}
                            data-key="rs-10"
                            data-title="Slide"
                            data-thumb="rev/assets/index-2/1-13-50x100.jpg"
                            data-anim="adpr:false;ms:300;"
                            data-in="o:0;"
                            data-out="a:false;"
                        >
                            <img src="/rev/assets/index-2/dummy.png" alt="" title="1" width="1920" height="1000"
                                 className="rev-slidebg tp-rs-img rs-lazyload"
                                 data-lazyload="rev/assets/index-2/1-13.jpg" data-no-retina/>
                            <rs-layer id="slider-4-slide-10-layer-0" data-type="text" data-color="#f56800"
                                      data-rsp_ch="on"
                                      data-xy="x:l,l,l,c;xo:40px,30px,40px,0;y:m;yo:-119px,-108px,-54px,-55px;"
                                      data-text="w:normal;s:18,16,16,14;l:26,24,24,22;ls:1px,0px,0px,0px;fw:700;"
                                      data-padding="t:5;r:20;b:5;l:20;" data-frame_0="y:50,39,29,17;"
                                      data-frame_1="st:300;sp:1000;sR:300;"
                                      data-frame_999="y:50,39,29,17;o:0;st:w;sp:0;sR:7700;"
                                      style={{
                                          zIndex: 9,
                                          backgroundColor: 'rgba(254,127,50,0)',
                                          fontFamily: "'Red Hat Display'",
                                          textTransform: 'uppercase'
                                      }}>welcome to InsuTex
                            </rs-layer>
                            <rs-layer id="slider-4-slide-10-layer-1" data-type="text" data-rsp_ch="on"
                                      data-xy="x:l,l,l,c;xo:30px,30px,30px,0;y:m;yo:-20px,-20px,22px,3px;"
                                      data-text="w:normal;s:72,62,52,32;l:80,70,60,40;ls:0,0,0,1px;fw:700;a:left,left,left,center;"
                                      data-dim="w:772px,628px,511px,403px;" data-frame_0="y:50,39,29,17;"
                                      data-frame_1="st:500;sp:1000;sR:500;"
                                      data-frame_999="y:50,39,29,17;o:0;st:w;sp:0;sR:7500;"
                                      style={{
                                          zIndex: 8,
                                          fontFamily: "'Red Hat Display'",
                                          textTransform: 'capitalize'
                                      }}>we have also a ton of fun the process<br/>
                            </rs-layer>
                            <rs-layer id="slider-4-slide-10-layer-2" data-type="image" data-rsp_ch="on"
                                      data-xy="x:l,l,l,c;xo:30px,30px,30px,-90px;y:m;yo:-124px,-109px,-55px,-57px;"
                                      data-text="w:normal;s:20,15,11,6;l:0,19,14,8;"
                                      data-dim="w:32px,25px,32px,28px;h:28px,22px,28px,25px;"
                                      data-frame_0="y:50,39,29,17;"
                                      data-frame_1="st:300;sp:1000;sR:300;" data-frame_999="o:0;st:w;sp:0;sR:7700;"
                                      style={{zIndex: 10}}>
                                <img src="/rev/assets/index-2/dummy.png" alt=""
                                     className="tp-rs-img rs-lazyload" width="32"
                                     height="28"
                                     data-lazyload="rev/assets/index-2/Group-889.png"
                                     data-no-retina/>
                            </rs-layer>
                            <a id="slider-4-slide-10-layer-3"
                               className="rs-layer pq-button pq-button-flat rev-btn"
                               href="about-us.html" target="_self"
                               data-type="button"
                               data-rsp_ch="on"
                               data-xy="x:l,l,l,c;xo:30px,30px,30px,0;y:m;yo:197px,178px,138px,95px;"
                               data-text="w:normal;s:16,16,16,14;l:32,32,32,24;ls:0px,0px,0px,1px;fw:600;"
                               data-dim="minh:0px,none,none,none;"
                               data-padding="t:12,12,12,8;r:24,24,24,18;b:12,12,12,8;l:24,24,24,18;"
                               data-border="bos:solid;boc:rgba(255, 255, 255, 0);bow:2px,2px,2px,2px;"
                               data-frame_0="y:50,39,29,17;"
                               data-frame_1="st:1300;sp:1000;sR:1300;"
                               data-frame_999="y:50,39,29,17;o:0;st:w;sp:0;sR:6700;"
                               data-frame_hover="c:#fff;bgc:#272b36;boc:rgba(11,11,11,0);bor:0px,0px,0px,0px;bos:solid;bow:2px,2px,2px,2px;bri:120%;"
                               style={{
                                   zIndex: 6,
                                   backgroundColor: '#f56800',
                                   fontFamily: "'Red Hat Display'",
                                   textTransform: 'uppercase'
                               }}>
                                <div className="pq-button-block"><span className="pq-button-text">read more</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" className="pq-svg-arrow" width="34.899"
                                        height="14.585"
                                        viewBox="0 0 34.899 14.585">
                                        <path
                                            d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                            transform="translate(34.399 14.056) rotate(180)" fill="currentColor"
                                            stroke="currentColor" stroke-width="1"></path>
                                    </svg>
                                </div>
                            </a>
                            <rs-layer id="slider-4-slide-10-layer-4" data-type="text" data-rsp_ch="on"
                                      data-xy="xo:30px,30px,22px,13px;y:m;yo:100px,84px,117px,92px;"
                                      data-text="w:normal;s:16,16,12,7;l:24,24,18,11;"
                                      data-dim="w:716px,608px,461px,284px;"
                                      data-vbility="t,t,f,f" data-frame_0="y:50,39,29,17;"
                                      data-frame_1="st:900;sp:1000;sR:900;"
                                      data-frame_999="o:0;st:w;sp:0;sR:7100;"
                                      style={{zIndex: 7, fontFamily: 'Open Sans'}}>Textiles are
                                materials made from fibers or yarn, and they are used to create a wide range of
                                products such as
                                clothing, household items, and industrial goods.
                            </rs-layer>
                        </rs-slide>
                        <rs-slide style={{position: "absolute"}} data-key="rs-13" data-title="Slide"
                                  data-thumb="rev/assets/index-2/2-9-50x100.jpg" data-anim="adpr:false;ms:300;"
                                  data-in="o:0;"
                                  data-out="a:false;">
                            <img src="/rev/assets/index-2/dummy.png" alt="" title="2" width="1920" height="1000"
                                 className="rev-slidebg tp-rs-img rs-lazyload"
                                 data-lazyload="rev/assets/index-2/2-9.jpg" data-no-retina/>
                            <rs-layer id="slider-4-slide-13-layer-0" data-type="text" data-color="#f56800"
                                      data-rsp_ch="on"
                                      data-xy="x:l,l,l,c;xo:40px,30px,40px,0;y:m;yo:-119px,-108px,-55px,-55px;"
                                      data-text="w:normal;s:18,16,16,14;l:26,24,24,22;ls:1px,0px,0px,0px;fw:700;"
                                      data-padding="t:5;r:20;b:5;l:20;" data-frame_0="y:50,39,29,17;"
                                      data-frame_1="st:300;sp:1000;sR:300;"
                                      data-frame_999="y:50,39,29,17;o:0;st:w;sp:0;sR:7700;"
                                      style={{
                                          zIndex: 9,
                                          backgroundColor: 'rgba(254, 127, 50, 0)',
                                          fontFamily: 'Red Hat Display',
                                          textTransform: "uppercase"
                                      }}>welcome
                                to InsuTex
                            </rs-layer>
                            <rs-layer id="slider-4-slide-13-layer-1" data-type="text" data-rsp_ch="on"
                                      data-xy="x:l,l,l,c;xo:30px,30px,30px,0;y:m;yo:-20px,-20px,21px,3px;"
                                      data-text="w:normal;s:72,62,52,32;l:80,70,60,40;ls:0,0,0,1px;fw:700;a:left,left,left,center;"
                                      data-dim="w:772px,656px,552px,403px;" data-frame_0="y:50,39,29,17;"
                                      data-frame_1="st:500;sp:1000;sR:500;"
                                      data-frame_999="y:50,39,29,17;o:0;st:w;sp:0;sR:7500;"
                                      style={{
                                          zIndex: 8,
                                          fontFamily: 'Red Hat Display',
                                          textTransform: 'capitalize'
                                      }}>Dry
                                cleaning services
                                use textiles clean
                            </rs-layer>
                            <rs-layer id="slider-4-slide-13-layer-2" data-type="image" data-rsp_ch="on"
                                      data-xy="x:l,l,l,c;xo:30px,30px,30px,-90px;y:m;yo:-124px,-109px,-56px,-57px;"
                                      data-text="w:normal;s:20,15,11,6;l:0,19,14,8;"
                                      data-dim="w:32px,25px,32px,28px;h:28px,22px,28px,25px;"
                                      data-frame_0="y:50,39,29,17;"
                                      data-frame_1="st:300;sp:1000;sR:300;" data-frame_999="o:0;st:w;sp:0;sR:7700;"
                                      style={{zIndex: 10}}>
                                <img src="/rev/assets/index-2/dummy.png" alt=""
                                     className="tp-rs-img rs-lazyload" width="32"
                                     height="28"
                                     data-lazyload="rev/assets/index-2/Group-889.png"
                                     data-no-retina/>
                            </rs-layer>
                            <a id="slider-4-slide-13-layer-3"
                               className="rs-layer pq-button pq-button-flat rev-btn"
                               href="about-us.html" target="_self"
                               data-type="button"
                               data-rsp_ch="on"
                               data-xy="x:l,l,l,c;xo:30px,30px,30px,0;y:m;yo:197px,178px,137px,95px;"
                               data-text="w:normal;s:16,16,16,14;l:32,32,32,24;ls:0px,0px,0px,1px;fw:600;"
                               data-dim="minh:0px,none,none,none;"
                               data-padding="t:12,12,12,8;r:24,24,24,18;b:12,12,12,8;l:24,24,24,18;"
                               data-border="bos:solid;boc:rgba(255, 255, 255, 0);bow:2px,2px,2px,2px;"
                               data-frame_0="y:50,39,29,17;"
                               data-frame_1="st:1300;sp:1000;sR:1300;"
                               data-frame_999="y:50,39,29,17;o:0;st:w;sp:0;sR:6700;"
                               data-frame_hover="c:#fff;bgc:#272b36;boc:rgba(11,11,11,0);bor:0px,0px,0px,0px;bos:solid;bow:2px,2px,2px,2px;bri:120%;"
                               style={{
                                   zIndex: 6,
                                   backgroundColor: '#f56800',
                                   fontFamily: 'Red Hat Display',
                                   textTransform: 'uppercase'
                               }}>
                                <div className="pq-button-block"><span className="pq-button-text">read more</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" className="pq-svg-arrow" width="34.899"
                                        height="14.585"
                                        viewBox="0 0 34.899 14.585">
                                        <path
                                            d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                            transform="translate(34.399 14.056) rotate(180)" fill="currentColor"
                                            stroke="currentColor" stroke-width="1"></path>
                                    </svg>
                                </div>
                            </a>
                            <rs-layer id="slider-4-slide-13-layer-4" data-type="text" data-rsp_ch="on"
                                      data-xy="xo:30px,30px,22px,13px;y:m;yo:100px,84px,116px,91px;"
                                      data-text="w:normal;s:16,16,12,7;l:24,24,18,11;"
                                      data-dim="w:716px,608px,461px,284px;"
                                      data-vbility="t,t,f,f" data-frame_0="y:50,39,29,17;"
                                      data-frame_1="st:900;sp:1000;sR:900;"
                                      data-frame_999="o:0;st:w;sp:0;sR:7100;"
                                      style={{
                                          zIndex: 7,
                                          fontFamily: 'Open Sans'
                                      }}>Textiles are
                                materials made from fibers or yarn, and they are used to create a wide range of
                                products such as
                                clothing, household items, and industrial goods.
                            </rs-layer>
                        </rs-slide>
                        <rs-slide style={{position: 'absolute'}} data-key="rs-16" data-title="Slide"
                                  data-thumb="rev/assets/index-2/3-9-50x100.jpg" data-anim="adpr:false;ms:300;"
                                  data-in="o:0;"
                                  data-out="a:false;">
                            <img src="/rev/assets/index-2/dummy.png" alt="" title="3" width="1920" height="1000"
                                 className="rev-slidebg tp-rs-img rs-lazyload"
                                 data-lazyload="rev/assets/index-2/3-9.jpg" data-no-retina/>
                            <rs-layer id="slider-4-slide-16-layer-0" data-type="text" data-color="#f56800"
                                      data-rsp_ch="on"
                                      data-xy="x:l,l,l,c;xo:40px,30px,40px,0;y:m;yo:-119px,-108px,-55px,-55px;"
                                      data-text="w:normal;s:18,16,16,14;l:26,24,24,22;ls:1px,0px,0px,0px;fw:700;"
                                      data-padding="t:5;r:20;b:5;l:20;" data-frame_0="y:50,39,29,17;"
                                      data-frame_1="st:300;sp:1000;sR:300;"
                                      data-frame_999="y:50,39,29,17;o:0;st:w;sp:0;sR:7700;"
                                      style={{
                                          zIndex: 9,
                                          backgroundColor: 'rgba(254,127,50,0)',
                                          fontFamily: 'Red Hat Display',
                                          textTransform: 'uppercase'
                                      }}>welcome to InsuTex
                            </rs-layer>
                            <rs-layer id="slider-4-slide-16-layer-1" data-type="text" data-rsp_ch="on"
                                      data-xy="x:l,l,l,c;xo:30px,30px,30px,0;y:m;yo:-20px,-20px,21px,3px;"
                                      data-text="w:normal;s:72,62,52,32;l:80,70,60,40;ls:0,0,0,1px;fw:700;a:left,left,left,center;"
                                      data-dim="w:772px,628px,559px,403px;" data-frame_0="y:50,39,29,17;"
                                      data-frame_1="st:500;sp:1000;sR:500;"
                                      data-frame_999="y:50,39,29,17;o:0;st:w;sp:0;sR:7500;"
                                      style={{
                                          zIndex: 8,
                                          fontFamily: 'Red Hat Display',
                                          textTransform: 'capitalize'
                                      }}>Textiles
                                are
                                materials made from fibers
                            </rs-layer>
                            <rs-layer id="slider-4-slide-16-layer-2" data-type="image" data-rsp_ch="on"
                                      data-xy="x:l,l,l,c;xo:30px,30px,30px,-90px;y:m;yo:-124px,-109px,-56px,-57px;"
                                      data-text="w:normal;s:20,15,11,6;l:0,19,14,8;"
                                      data-dim="w:32px,25px,32px,28px;h:28px,22px,28px,25px;"
                                      data-frame_0="y:50,39,29,17;"
                                      data-frame_1="st:300;sp:1000;sR:300;" data-frame_999="o:0;st:w;sp:0;sR:7700;"
                                      style={{zIndex: 10}}>
                                <img src="/rev/assets/index-2/dummy.png" alt=""
                                     className="tp-rs-img rs-lazyload" width="32"
                                     height="28"
                                     data-lazyload="rev/assets/index-2/Group-889.png"
                                     data-no-retina/>
                            </rs-layer>
                            <a id="slider-4-slide-16-layer-3"
                               className="rs-layer pq-button pq-button-flat rev-btn"
                               href="about-us.html" target="_self"
                               data-type="button"
                               data-rsp_ch="on"
                               data-xy="x:l,l,l,c;xo:30px,30px,30px,0;y:m;yo:197px,178px,137px,95px;"
                               data-text="w:normal;s:16,16,16,14;l:32,32,32,24;ls:0px,0px,0px,1px;fw:600;"
                               data-dim="minh:0px,none,none,none;"
                               data-padding="t:12,12,12,8;r:24,24,24,18;b:12,12,12,8;l:24,24,24,18;"
                               data-border="bos:solid;boc:rgba(255, 255, 255, 0);bow:2px,2px,2px,2px;"
                               data-frame_0="y:50,39,29,17;"
                               data-frame_1="st:1300;sp:1000;sR:1300;"
                               data-frame_999="y:50,39,29,17;o:0;st:w;sp:0;sR:6700;"
                               data-frame_hover="c:#fff;bgc:#272b36;boc:rgba(11,11,11,0);bor:0px,0px,0px,0px;bos:solid;bow:2px,2px,2px,2px;bri:120%;"
                               style={{
                                   zIndex: 6,
                                   backgroundColor: '#f56800',
                                   fontFamily: 'Red Hat Display',
                                   textTransform: 'uppercase'
                               }}>
                                <div className="pq-button-block"><span className="pq-button-text">read more</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" className="pq-svg-arrow" width="34.899"
                                        height="14.585"
                                        viewBox="0 0 34.899 14.585">
                                        <path
                                            d="M.5,6.388c6.609,0,11.487-6.142,11.535-6.2a.6.6,0,0,1,.684-.131.33.33,0,0,1,.176.513A19.589,19.589,0,0,1,4.765,6.388H33.4c.275,0,.5.168.5.376s-.223.376-.5.376H4.765a19.591,19.591,0,0,1,8.128,5.822.331.331,0,0,1-.179.514.6.6,0,0,1-.68-.133c-.048-.062-4.926-6.2-11.535-6.2-.275,0-.5-.168-.5-.376S.223,6.388.5,6.388Z"
                                            transform="translate(34.399 14.056) rotate(180)" fill="currentColor"
                                            stroke="currentColor" stroke-width="1"></path>
                                    </svg>
                                </div>
                            </a>
                            <rs-layer id="slider-4-slide-16-layer-4" data-type="text" data-rsp_ch="on"
                                      data-xy="xo:30px,30px,22px,13px;y:m;yo:100px,84px,116px,91px;"
                                      data-text="w:normal;s:16,16,12,7;l:24,24,18,11;"
                                      data-dim="w:716px,608px,461px,284px;"
                                      data-vbility="t,t,f,f" data-frame_0="y:50,39,29,17;"
                                      data-frame_1="st:900;sp:1000;sR:900;"
                                      data-frame_999="o:0;st:w;sp:0;sR:7100;"
                                      style={{zIndex: 7, fontFamily: 'Open Sans'}}>Textiles are
                                materials made from fibers or yarn, and they are used to create a wide range of
                                products such as
                                clothing, household items, and industrial goods.
                            </rs-layer>
                        </rs-slide>
                    </rs-slides>
                </rs-module>
            </rs-module-wrap>
        </div>
    );
};

export default Banner;
