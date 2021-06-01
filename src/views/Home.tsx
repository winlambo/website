import React from 'react';
import Mechanics from './components/Mechanics'
import Mainwrapper from './components/MainWrapper'
import Volume from './components/Volume'
import Top from './components/Top'
import Footer from './components/Menu/Footer'

const Home: React.FC = () => {
    return (
        <>
            <Mainwrapper />
            <Volume />
            {/* <Mechanics /> */}
            <Top />
            
            <Footer />
        </>
    );
}


export default Home;
