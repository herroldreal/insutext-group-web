import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/slick.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/responsive.css'
import '../assets/css/style.css';
import '../assets/css/ionicons.min.css'
import '../assets/css/animations.min.css'

interface TestimonialItem {
    image: string;
    reviewerImage: string;
    name: string;
    title: string;
    comment: string;
    rating: number;
}

const testimonials: TestimonialItem[] = [
    {
        image: 'images/testimonial/slider/testimonial-style-1/1.jpg',
        reviewerImage: 'images/testimonial/slider/testimonial-style-1/review-from/1.png',
        name: 'Alex John Martin',
        title: 'Senior Manager',
        comment: 'These services involve cleaning and washing textiles, such as clothing, linens, and towels.',
        rating: 5,
    },
    {
        image: 'images/testimonial/slider/testimonial-style-1/2.jpg',
        reviewerImage: 'images/testimonial/slider/testimonial-style-1/review-from/1.png',
        name: 'Niku Harrison',
        title: 'Owner',
        comment: 'These services involve cleaning and washing textiles, such as clothing, linens, and towels.',
        rating: 5,
    },
    {
        image: 'images/testimonial/slider/testimonial-style-1/3.jpg',
        reviewerImage: 'images/testimonial/slider/testimonial-style-1/review-from/1.png',
        name: 'Leia Organa',
        title: 'Fashion Designer',
        comment: 'These services involve cleaning and washing textiles, such as clothing, linens, and towels.',
        rating: 5,
    },
    {
        image: 'images/testimonial/slider/testimonial-style-1/4.jpg',
        reviewerImage: 'images/testimonial/slider/testimonial-style-1/review-from/1.png',
        name: 'David K. Morris',
        title: 'Senior Manager',
        comment: 'These services involve cleaning and washing textiles, such as clothing, linens, and towels.',
        rating: 5,
    },
];

const Testimonial: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="testimonial wow animated fadeInUp">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-11">
                        <div className="pq-section-title pq-style-1 text-center">
              <span className="pq-section-sub-title">
                <img decoding="async" src="images/section-title/title-icon-primary.png" alt="testimonial icon" />
                our testimonials
              </span>
                            <h5 className="pq-section-main-title">what our happy clients say about us</h5>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div className="pq-testimonial-box pq-style-1" key={index}>
                                    <div className="pq-testimonial-img">
                                        <img src={testimonial.image} alt="testimonial-img" />
                                        <span className="pq-review-img">
                      <img src={testimonial.reviewerImage} alt="reviewer-img" />
                    </span>
                                    </div>
                                    <div className="pq-testimonial-info">
                                        <div className="pq-testimonial-meta">
                                            <div className="pq-testimonial-data">
                                                <h5>{testimonial.name}</h5>
                                                <span>{testimonial.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pq-testimonial-content">
                                        <div className="pq-quote">
                                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        </div>
                                        <p>{testimonial.comment}</p>
                                    </div>
                                    <h5 className="pq-testimonial-commnet">Quality Services</h5>
                                    <div className="pq-testimonial-star">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <i className="fa fa-star" key={i}></i>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
