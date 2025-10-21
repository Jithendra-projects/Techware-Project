
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

// Import all 8 logo images
import Logo1 from "../assets/Logo1.png";
import Logo2 from "../assets/Logo2.png";
import Logo3 from "../assets/Logo3.png";
import Logo4 from "../assets/Logo4.png";
import Logo5 from "../assets/Logo5.png";
import Logo6 from "../assets/Logo6.png";
import Logo7 from "../assets/Logo7.png";
import Logo8 from "../assets/Logo8.png";
const Footer = () => {
    // Store the imported logos in an array
    const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8];

    return (
        <footer className="footer">
            <div className="footer-top-wrapper">
                <div className="footer-top">
                    {[...logos, ...logos].map((logo, idx) => (
                        <div className="footer-logo" key={idx}>
                            <img src={logo} alt={`Logo ${idx + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                <div className="social-icons">
                    <FaInstagram />
                    <FaFacebook />
                    <FaLinkedin />
                </div>
                <p className="lorem">Lorem Ipsum Lorem Ipsum</p>
                <p className="copyright">© TechwareLab copyrights</p>
            </div>
        </footer>
    );
};

export default Footer;

