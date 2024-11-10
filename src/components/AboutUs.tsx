import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <section className="about-us pq-bg-grey pq-bg-img-3">
            <div className="container">
                <div className="row align-items-center flex-column-reverse flex-xl-row">
                    <div className="col-xl-6 mt-4 mt-xl-0 wow animated fadeInLeft">
                        <div className="pq-section-title pq-style-1 pq-mb-45">
              <span className="pq-section-sub-title">
                <img decoding="async" src="/images/section-title/title-icon-primary.png" alt="About Us icon" />About Us
              </span>
                            <h5 className="pq-section-main-title">The History of Textiles From Handcrafted</h5>
                            <p className="pq-section-description">
                                Textiles are materials made from fibers or yarn, and they are used to create a wide range of products
                                such as clothing and industrial goods.
                            </p>
                        </div>
                        <ul className="pq-features-list">
                            <li>
                                <h5 className="pq-list-number">01.</h5>
                                <h5 className="pq-list-title">Digital Shop Available</h5>
                            </li>
                            <li>
                                <h5 className="pq-list-number">02.</h5>
                                <h5 className="pq-list-title">Great Client Support</h5>
                            </li>
                        </ul>
                        <a className="pq-button pq-button-flat" href="about-us.html">
                            <div className="pq-button-block">
                                <span className="pq-button-text">Read more</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pq-svg-arrow"
                                    width="34.899"
                                    height="14.585"
                                    viewBox="0 0 34.899 14.585"
                                >
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
                    <div className="col-xl-6 wow animated fadeInRight">
                        <img src="/images/about-us/1.jpg" className="img-fluid w-100" alt="About Us" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
