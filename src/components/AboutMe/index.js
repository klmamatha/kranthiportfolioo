// About.jsx
import React from "react";
import { AboutMe } from "./data"; // Adjust the path as needed

const About = () => {
    return (
        <section id="about">
            {AboutMe.map((item, index) => (
                <div key={index} className="about-section">
                    <h2>{item.heading}</h2>
                    <p>{item.intro}</p>
                </div>
            ))}
        </section>
    );
};

export default About;
