import React from 'react';
import Header from './components/Header';
import Loader from './components/Loader'

const App: React.FC = () => {
    return (
        <div>
            <Loader/>
            <Header/>
        </div>
    );
};

export default App;