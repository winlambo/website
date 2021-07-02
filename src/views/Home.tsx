import React from 'react';
import Mechanics from './components/Mechanics'
import Mainwrapper from './components/MainWrapper'
import Volume from './components/Volume'
import Top from './components/Top'
import Draw from './components/Draw'
import Dailydraw from './components/Dailydraw'
import Footer from './components/Menu/Footer'
import Cookie from './components/Cookie'

const Home: React.FC = () => {
    return (
        <>
            <Mainwrapper />
            <Volume />
            <Top />
            <Draw/>
            <Dailydraw/>
            <Footer />
            <Cookie/>
        </>
    );
}


export default Home;
