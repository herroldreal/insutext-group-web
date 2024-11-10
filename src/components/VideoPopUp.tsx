import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

const VideoPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <section className="video-popup pb-xl-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 wow animated fadeInUp">
                        <div className="pq-section-title pq-style-1 text-center">
              <span className="pq-section-sub-title">
                <img decoding="async" src="images/section-title/title-icon-primary.png" alt="Video Icon" />
                our shop now
              </span>
                            <h5 className="pq-section-main-title">provide best Wearable best Innovations in Textile</h5>
                        </div>
                    </div>
                    <div className="col-lg-12 p-xl-0">
                        <div className="pq-video-popup-img-1">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="pq-popup-video-block pq-popup-style-1 wow animated zoomIn">
                                        <div className="pq-video-icon">
                                            <button className="pq-video default popup-youtube" onClick={openModal}>
                                                <i aria-hidden="true" className="ion ion-ios-play"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="XHOmBV4js_E"
                    onClose={() => setIsOpen(false)}
                />
            </div>
        </section>
    );
};

export default VideoPopup;
