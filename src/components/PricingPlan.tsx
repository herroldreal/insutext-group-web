import React from 'react';

interface PricingItem {
    imgSrc: string;
    offer: string;
    title: string;
    price: number;
    unit: string;
    comment: string;
    features: string[];
    link: string;
}

const PricingPlan: React.FC = () => {
    const pricingPlans: PricingItem[] = [
        {
            imgSrc: '/images/pricebox/1.png',
            offer: 'best fabrics',
            title: 'cutton fabrics',
            price: 59,
            unit: '/ per meter',
            comment: 'Salary level up to $50k',
            features: ['we guarantee you always', 'specialized and annual', 'Genuine fabrics materials'],
            link: 'our-pricing.html',
        },
        {
            imgSrc: '/images/pricebox/2.png',
            offer: 'best fabrics',
            title: 'polyster fabrics',
            price: 69,
            unit: '/ per meter',
            comment: 'Salary level up to $50k',
            features: ['we guarantee you always', 'specialized and annual', 'Genuine fabrics materials'],
            link: 'our-pricing.html',
        },
        {
            imgSrc: '/images/pricebox/3.png',
            offer: 'best fabrics',
            title: 'materials fabrics',
            price: 79,
            unit: '/ per meter',
            comment: 'Salary level up to $50k',
            features: ['we guarantee you always', 'specialized and annual', 'Genuine fabrics materials'],
            link: 'our-pricing.html',
        },
    ];

    return (
        <section className="pricing-plan">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="pq-section-title pq-style-1 text-center">
              <span className="pq-section-sub-title">
                <img decoding="async" src="/images/section-title/title-icon-primary.png" alt="Pricing Icon" />
                our pricing plans
              </span>
                            <h5 className="pq-section-main-title">The textiles product apparel manufactur industries</h5>
                        </div>
                    </div>
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className={`col-xl-4 col-lg-6 col-md-6 ${index === 1 ? 'wow animated fadeInUp active' : 'wow animated fadeInLeft'}`}>
                            <div className="pq-pricebox pq-style-1 text-center">
                                <div className="pq-pricebox-img">
                                    <img decoding="async" src={plan.imgSrc} title="image" alt="price-image" />
                                    <span className="pq-offer">{plan.offer}</span>
                                </div>
                                <div className="pq-price-content">
                                    <h5 className="pq-pricebox-title">{plan.title}</h5>
                                    <h2 className="price">
                                        <span className="dollar">$</span>{plan.price}
                                        <span className="price-month">{plan.unit}</span>
                                    </h2>
                                    <span className="pq-pricebox-comment">{plan.comment}</span>
                                    <ul className="pq-list-info">
                                        {plan.features.map((feature, i) => (
                                            <li key={i}>
                                                <span>{feature}</span>
                                                <i className="fa fa-check"></i>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pq-btn-container">
                                        <a className="pq-button pq-button-flat" href={plan.link}>
                                            <div className="pq-button-block">
                                                <span className="pq-button-text">Purchase</span>
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
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPlan;
