import React from 'react';
import Mechanics from './components/Mechanics'
import Mainwrapper from './components/MainWrapper'
import Draw from './components/Draw'
import Dailydraw from './components/Dailydraw'
import Footer from './components/Menu/Footer'
import Cookie from './components/Cookie'

const Home: React.FC = () => {
    return (
        <>
            <Mainwrapper />
            <Dailydraw/>
            <Draw/>
            <Footer />
            <Cookie/>
        </>
    );
}


export default Home;
