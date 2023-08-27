import React from 'react';
import './Home.css';
import Section from '../section/Section';
import Footer from '../footer/Footer';
//@ts-ignore
import { Outlet } from 'react-router-dom'
import Header from '../header/Header';

const Home: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <Section />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;
