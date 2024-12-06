import React from 'react'
import '../assets/css/responsive.css';
import '../assets/css/style.css';
import '../assets/css/ionicons.min.css';
import '../assets/css/animations.min.css';
import '../assets/css/bootstrap.min.css';

const Provide: React.FC = () => {
    return (
        <section className="provide pq-bg-primary pq-bg-img-2 pq-py-60">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-8">
                        <div className="pq-section-title pq-style-1">
                            <h5 className="pq-section-main-title">Ofrecemos trabajos de la más alta calidad que cumplen con tus expectativas.</h5>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="button-align">
                            <a className="pq-button pq-button-flat" href="contact.html">
                                <div className="pq-button-block">
                                    <span className="pq-button-text">contactanos</span>
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
            </div>
        </section>
    )
}

export default Provide;