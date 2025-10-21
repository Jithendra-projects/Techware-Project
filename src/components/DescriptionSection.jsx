import React from "react";

const logos = [
    "DescriptionLogo1.png",
    "DescriptionLogo2.png",
    "DescriptionLogo3.png",
    "DescriptionLogo4.png",
    "DescriptionLogo5.png",
];

const DescriptionSection = () => {
    return (
        <section className="description">
            <p>
             We build cutting-edge AI solutions that help businesses automate <span>processes, gain insights, and deliver smarter experiences.
                Whether you're looking to streamline operations, personalize customer journeys,
                or leverage predictive analytics, our AI-powered tools are designed to drive
                growth and innovation.</span>
            </p>
            
            <div className="logo-grid">
                {logos.map((logo, idx) => (
                    <div className="logo-card" key={idx}>
                        <img src={`./assets/logos/${logo}`} alt="Logo" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DescriptionSection;
