import React, { useState } from 'react';

interface ProgressBar {
    title: string;
    percentage: number;
}

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const progressBars: ProgressBar[] = [
        { title: 'Custom Tailoring', percentage: 90 },
        { title: 'Hemming Shortening', percentage: 70 },
        { title: 'Home Textiles', percentage: 50 },
    ];

    const faqItems: FAQItem[] = [
        {
            question: '01 what is main problems faced textile industry?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        },
        {
            question: '02 what is the importance of textile industry?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        },
        {
            question: '03 what is the demand for textile industry?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        },
        {
            question: '04 how can india improve textile industry?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq pq-bg-grey pq-pt-520">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 pe-xl-5 wow animated fadeInLeft">
                        <div className="pq-section-title pq-style-1 pq-mb-45">
              <span className="pq-section-sub-title">
                <img decoding="async" src="/images/section-title/title-icon-primary.png" alt="FAQ Icon" />
                our faq
              </span>
                            <h5 className="pq-section-main-title">why people are choose us for textile work</h5>
                        </div>
                        <div className="pq-progressbar-box pq-progressbar-style-1">
                            {progressBars.map((bar, index) => (
                                <div className="pq-progressbar-content" key={index}>
                                    <span className="progress-title">{bar.title}</span>
                                    <span className="progress-value">{bar.percentage}%</span>
                                    <div className="pq-progress-bar">
                                        <span className="show-progress" style={{ width: `${bar.percentage}%` }}></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-6 mt-4 mt-xl-0 wow animated fadeInRight">
                        <div className="pq-accordion-block">
                            {faqItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`pq-accordion-box ${activeIndex === index ? 'pq-active' : ''}`}
                                >
                                    <div className="pq-ad-title" onClick={() => toggleFAQ(index)}>
                                        <h4 className="ad-title-text">
                                            {item.question}
                                            <i
                                                aria-hidden="true"
                                                className={`ion ${activeIndex === index ? 'ion-minus' : 'ion-plus'}`}
                                            ></i>
                                        </h4>
                                    </div>
                                    {activeIndex === index && (
                                        <div className="pq-accordion-details">
                                            <p className="pq-detail-text">{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
