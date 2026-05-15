import React, { useEffect, useState } from "react";
import {
  FaBullseye,
  FaUsers,
  FaLeaf,
  FaMicrochip,
  FaShieldAlt,
  FaArrowRight
} from "react-icons/fa";

function About() {
  const images = [
    "/benefits.jpg",
    "/functionalchair.jpg",
    "/height.jpg",
    "/keypad.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="about-page">
      {/* HERO */}
      <div className="about-hero">
        <div className="about-content">
          <p className="about-tag">ENGINEERED FOR PRODUCTIVITY</p>
          <h1>Smarter Workspaces for Modern Teams</h1>
          <p>
            Zevolve designs intelligent ergonomic solutions that combine
            embedded systems, automation, and human-centered engineering.
          </p>

          <div className="hero-stats">
            <div>
              <h3>10K+</h3>
              <p>Active Users</p>
            </div>
            <div>
              <h3>99%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* SHOWCASE */}
      <div className="carousel-section">
        <div className="carousel-left">
          <h2>Technology Meets Comfort</h2>
          <p>
            Our adjustable desks integrate precision electronics,
            smart controllers, and ergonomic science.
          </p>

          <div className="feature-list">
            <div><FaMicrochip /> Embedded Controllers</div>
            <div><FaShieldAlt /> Durable Engineering</div>
            <div><FaLeaf /> Sustainable Materials</div>
          </div>
        </div>

        <div className="carousel-container">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="about"
              className={index === current ? "slide active" : "slide"}
            />
          ))}
        </div>
      </div>

      {/* CARDS */}
      <div className="about-grid">
        <div className="about-card">
          <FaBullseye className="about-icon" />
          <h3>Our Mission</h3>
          <p>
            Building intelligent workspaces that improve health,
            movement, and productivity.
          </p>
        </div>

        <div className="about-card">
          <FaUsers className="about-icon" />
          <h3>Expert Team</h3>
          <p>
            Engineers, designers, and innovators crafting workplace solutions.
          </p>
        </div>

        <div className="about-card">
          <FaLeaf className="about-icon" />
          <h3>Sustainability</h3>
          <p>
            Premium materials, long-lasting systems, and reduced waste.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta">
        <h2>Ready to Transform Your Workspace?</h2>
        <button>
          Explore Products <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default About;