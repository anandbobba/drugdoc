// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import HomeCards from "../components/HomeCards";



const Home = () => {
    return (
        <div style={{ background: "linear-gradient(to bottom, #f0f8ff, #e6f2ff)" }}>
            <HeroSection />
            <HomeCards />
            
        </div>
    );
};

export default Home;
