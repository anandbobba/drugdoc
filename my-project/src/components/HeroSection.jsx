// src/components/HeroSection.jsx
import React from "react";
import Typical from 'react-typical';
import ScrollAnimation from 'react-animate-on-scroll';
import doctorImage from '../assets/doctor1.png'; // Adjust the path as necessary
import "animate.css";

const HeroSection = () => {
    return (
        <section 
            className="bg-blue-600 text-white text-center py-10 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
            {/* Typing effect for welcome message */}
            <h1 className="text-4xl font-bold mb-4">
                <Typical
                    steps={['Welcome to DRUG DOC', 1500, 'Your trusted health companion!', 1500]}
                    loop={Infinity}
                    wrapper="p"
                />
            </h1>

            {/* Scroll animation for tagline */}
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <p className="text-lg">
                    Your trusted partner for drug safety and consultation.
                </p>
            </ScrollAnimation>

            <div className="mt-8">
                {/* Image with hover effect */}
                <img 
                    src={doctorImage} 
                    alt="Doctor" 
                    className="mx-auto w-1/3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.6)] rounded-lg"
                />
            </div>
        </section>
    );
};

export default HeroSection;
