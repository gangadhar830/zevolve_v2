import React from "react";

function Showcase() {
  const features = [
    {
      title: "Smooth Height Adjustment",
      desc: "Seamlessly switch between sitting and standing with electric lift support.",
      image: "/height.jpg",
      tag: "Dual Motor",
      pos: "top-left",
    },
    {
      title: "Smart Digital Keypad",
      desc: "Store your preferred desk positions with memory presets.",
      image: "/keypad.jpg",
      tag: "4 Memory Modes",
      pos: "top-right",
    },
    {
      title: "Tilting Surface",
      desc: "Flexible tabletop tilt for drafting, reading and ergonomic posture.",
      image: "/tilt.jpg",
      tag: "0°–30° Tilt",
      pos: "bot-left",
    },
    {
      title: "Ergonomic Support",
      desc: "Designed to improve posture, reduce fatigue and increase productivity.",
      image: "/benefits.jpg",
      tag: "Health First",
      pos: "bot-right",
    },
  ];

  return (
    <section className="showcase-section" id="showcase">
      <div className="showcase-header">
        <span className="showcase-label">PRODUCT HIGHLIGHTS</span>
        <h2>Built for Modern Workspaces</h2>
        <p className="showcase-sub">
          Precision engineering meets ergonomic comfort and workspace efficiency.
        </p>
      </div>

      <div className="orbit-grid">
        {features.map((f) => (
          <div key={f.title} className={`fcard ${f.pos}`}>
            <img src={f.image} alt={f.title} className="fcard-img" />

            <div className="fcard-body">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <span className="fcard-tag">{f.tag}</span>
            </div>
          </div>
        ))}

        <div className="center-col">
          <img src="/centertable.jpg" alt="standing desk" />

          <div className="center-info">
            <h3>Premium Smart Desk</h3>
            <p>
              Adjustable, intelligent and engineered for productivity-driven
              environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;