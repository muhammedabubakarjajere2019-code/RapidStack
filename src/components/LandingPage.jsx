import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Demo from './Demo';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Demo />
                <Pricing />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
