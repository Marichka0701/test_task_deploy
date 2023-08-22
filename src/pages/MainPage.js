import React from 'react';

import Footer from "../components/Footer/Footer";
import Products from "../components/Products/Products";
import Benefits from "../components/Benefits/Benefits";
import Tips_Tricks from "../components/Tips_Tricks/Tips_Tricks";
import MainSection from "../components/MainSection/MainSection";
import Furniture from "../components/Furniture/Furniture";
import Rooms from "../components/Rooms/Rooms";

const MainPage = () => {
    return (
        <div>
            <MainSection/>
            <Benefits/>
            <Products/>
            <Rooms/>
            <Tips_Tricks/>
            <Furniture/>
            <Footer/>
        </div>
    );
};

export default MainPage;