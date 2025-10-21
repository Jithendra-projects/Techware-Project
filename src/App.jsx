import React from "react";
import HeroSection from "./components/HeroSection";
import DescriptionSection from "./components/DescriptionSection";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="app">
            <HeroSection />
            <DescriptionSection />
            <Footer />
        </div>
    );
};

export default App;
