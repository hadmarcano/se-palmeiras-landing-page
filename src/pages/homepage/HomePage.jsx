import React from 'react';
import Article from '../../components/article/Article';
import Aside from '../../components/aside/Aside';
import './HomePage.css';


const HomePage = ()=>(
    <div className="home-page">
        <Article/>
        <Aside/>
    </div>
);

export default HomePage;