import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../assets/css/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Work: React.FC = () => {
    const portfolioItems = [
        { imgSrc: '/images/portfolio/slider/1.jpg', tag: 'Craft Decor', title: 'Textiles and Fashion', link: 'textiles-and-fashion.html' },
        { imgSrc: '/images/portfolio/slider/2.jpg', tag: 'Ethnic Textile', title: 'Cotton Fabric', link: 'textiles-and-fashion.html' },
        { imgSrc: '/images/portfolio/slider/3.jpg', tag: 'Craft Decor', title: 'Green Shutters', link: 'textiles-and-fashion.html' },
        { imgSrc: '/images/portfolio/slider/4.jpg', tag: 'Ethnic Clothing', title: 'Chiffon Curtains', link: 'textiles-and-fashion.html' },
        { imgSrc: '/images/portfolio/slider/5.jpg', tag: 'Accessories', title: 'Colorful Fabric', link: 'textiles-and-fashion.html' },
        { imgSrc: '/images/portfolio/slider/7.jpg', tag: 'Traditional Crafts', title: 'Zipper Textile', link: 'textiles-and-fashion.html' },
        { imgSrc: '/images/portfolio/slider/8.jpg', tag: 'Ethnic Textile', title: 'Fashion Project', link: 'textiles-and-fashion.html' },
        { imgSrc: '/images/portfolio/slider/9.jpg', tag: 'Craft Decor', title: 'Satin Fabric', link: 'textiles-and-fashion.html' },
        { imgSrc: '/images/portfolio/slider/6.jpg', tag: 'Ethnic Textile', title: 'Ethnic Crafts', link: 'textiles-and-fashion.html' },
    ];

    return (
        <section className="work pq-bg-dark pq-bg-img-4 wow animated fadeInUp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pq-section-title pq-style-1 text-center">
              <span className="pq-section-sub-title">
                <img decoding="async" src="/images/section-title/title-icon-primary.png" alt="Explore Recent Works" />EXPLORE RECENT WORKS
              </span>
                            <h5 className="pq-section-main-title">We Provide Best Solution For Preparing Your Own Success!</h5>
                        </div>
                    </div>
                </div>
                <div className="pq-slider-margin overflow-hidden">
                    <div className="row">
                        <div className="col-lg-12">
                            <OwlCarousel
                                className="owl-theme"
                                loop={false}
                                margin={30}
                                nav={false}
                                dots={true}
                                responsive={{
                                    0: { items: 1 },
                                    600: { items: 2 },
                                    1000: { items: 3 },
                                }}
                            >
                                {portfolioItems.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="pq-portfoliobox-1 pq-hover-slide">
                                            <div className="pq-portfolio-block">
                                                <div className="pq-portfolio-img">
                                                    <a href={item.link}>
                                                        <img decoding="async" src={item.imgSrc} alt={item.title} />
                                                    </a>
                                                </div>
                                                <div className="pq-portfolio-info">
                                                    <div className="pq-portfolio-style-1-tag">
                                                        <a href={item.link}>{item.tag}</a>
                                                    </div>
                                                    <h5 className="pq-portfolio-style-1-title">
                                                        <a href={item.link}>{item.title}</a>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
