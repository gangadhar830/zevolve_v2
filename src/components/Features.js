import React from "react";

import {
  FaArrowsAltV,
  FaCog,
  FaGem,
  FaHome,
  FaDumbbell,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      id: "01",
      title: "Height Adjustment",
      subtitle: "72cm – 120cm",
      description:
        "Smooth electric lift system with programmable memory presets for daily comfort.",
      icon: <FaArrowsAltV />,
    },
    {
      id: "02",
      title: "Dual Motor System",
      subtitle: "6000N Power",
      description:
        "Silent high-performance dual motor mechanism for stable motion.",
      icon: <FaCog />,
    },
    {
      id: "03",
      title: "Premium Materials",
      subtitle: "Industrial Grade",
      description:
        "Aircraft-grade aluminum frame with durable anti-scratch tabletop.",
      icon: <FaGem />,
    },
    {
      id: "04",
      title: "Workspace Flexibility",
      subtitle: "Home + Office",
      description:
        "Designed for professional offices, creators, and remote setups.",
      icon: <FaHome />,
    },
    {
      id: "05",
      title: "Heavy Load Support",
      subtitle: "120kg Capacity",
      description:
        "Built to handle multi-monitor, workstation, and heavy hardware setups.",
      icon: <FaDumbbell />,
    },
    {
      id: "06",
      title: "Long-Term Reliability",
      subtitle: "7-Year Warranty",
      description:
        "Engineered durability backed by warranty and dedicated support.",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <span className="feature-badge">WHY CHOOSE ZEVOLVE</span>

          <h2 className="features-title">
            Precision Built for Modern Workspaces
          </h2>

          <p className="features-subtitle">
            Advanced ergonomic engineering, premium materials, and embedded
            intelligence designed for productivity and comfort.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <span className="card-number">{feature.id}</span>

              <div className="card-icon">{feature.icon}</div>

              <h3 className="card-title">{feature.title}</h3>
              <p className="card-subtitle">{feature.subtitle}</p>
              <p className="card-description">{feature.description}</p>

              <div className="card-footer">
                <FaCheckCircle />
                <span>Verified Performance</span>
              </div>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <a href="#shop" className="cta-link">
            Explore Product Collection →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Features;