import '../assets/css/style.css'

import React from 'react';

const Loader: React.FC = () => {
    return (
        <div id="pq-loading">
            <div id="pq-loading-center">
                <img src="/images/logos/loader.png" alt="loading"/>
            </div>
        </div>
    );
};

export default Loader;