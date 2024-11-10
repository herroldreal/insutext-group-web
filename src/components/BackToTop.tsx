import React from 'react';
import '../assets/css/bootstrap.min.css'
import '../assets/css/responsive.css'
import '../assets/css/style.css';
import '../assets/css/ionicons.min.css'
import '../assets/css/animations.min.css'

const BackToTop: React.FC = () => {
    return (
        <div id="back-to-top">
            <a className="top" id="top" href="#top">
                <i className="ion-ios-arrow-up"></i>
            </a>
        </div>
    );
};

export default BackToTop;
