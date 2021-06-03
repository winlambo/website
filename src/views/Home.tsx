import React from 'react';
import Mechanics from './components/Mechanics'
import Mainwrapper from './components/MainWrapper'
import Volume from './components/Volume'
import Top from './components/Top'
import Draw from './components/Draw'
import Footer from './components/Menu/Footer'

const Home: React.FC = () => {
    return (
        <>
            <Mainwrapper />
            <Volume />
            <Top />
            <Draw/>
            <Footer />
        </>
    );
}


export default Home;
