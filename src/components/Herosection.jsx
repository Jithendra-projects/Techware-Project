import React from "react";

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="overlay"></div>
            <h1>Smarter Solutions<br />Powered by AI</h1>
            <p>
                Streamline operations, reduce costs, and scale effortlessly with our
                AI-driven tools.
            </p>
            <button className="cta">Start A Project →</button>
        </section>
    );
};

export default HeroSection;


//UPDATED HERO SECTION

// import React, { useEffect, useRef } from "react";

// const HeroSection = () => {
//     const circleRef = useRef(null);

//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             const circles = circleRef.current.querySelectorAll(".circle");
//             const x = (window.innerWidth / 2 - e.clientX) / 50;
//             const y = (window.innerHeight / 2 - e.clientY) / 50;

//             circles.forEach((circle, index) => {
//                 const speed = (index + 1) * 0.2;
//                 circle.style.transform = `translate(${x * speed}px, ${y * speed}px) scale(1)`;
//             });
//         };

//         window.addEventListener("mousemove", handleMouseMove);
//         return () => window.removeEventListener("mousemove", handleMouseMove);
//     }, []);

//     return (
//         <section className="hero">
//             <div className="hero-bg" ref={circleRef}>
//                 {[...Array(5)].map((_, i) => (
//                     <div className="circle" key={i}></div>
//                 ))}
//             </div>
//             <div className="hero-content">
//                 <h1 className="hero-title">
//                     <span>Smarter Solutions</span>
//                     <br />
//                     <span>Powered by AI</span>
//                 </h1>
//                 <p className="hero-subtitle">
//                     Streamline operations, reduce costs, and scale effortlessly with our
//                     AI-driven tools.
//                 </p>
//                 <button className="cta">Start A Project →</button>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;
