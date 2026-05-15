import React from "react";
import {
  FaComment,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand/About */}
        <div className="footer-column about">
          <div className="footer-logo">
            <img src="/zevolve.webp" alt="logo" />
            <h3>ZEVOLVE</h3>
          </div>

          <p>
            Smart ergonomic and embedded workspace solutions built for modern
            engineering teams, offices, and innovation labs.
          </p>

          <p>
            We combine intelligent automation, ergonomic design, and durable
            engineering to create future-ready workspaces.
          </p>

          <div className="social-icons">
            <span><FaFacebookF /></span>
            <span>X</span>
            <span><FaLinkedinIn /></span>
            <span>⌂</span>
          </div>
        </div>

        {/* Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-column">
          <h3>Solutions</h3>
          <ul>
            <li>Smart Desks</li>
            <li>Embedded Systems</li>
            <li>Automation Modules</li>
            <li>IoT Integration</li>
            <li>Custom Design</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Info</h3>

          <p><FaComment /> Get in touch</p>
          <p><FaEnvelope /> evolvedesk.in@gmail.com</p>
          <p><FaPhoneAlt /> +91 9989124466</p>
          <p>Hyderabad, Telangana</p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div>English (IN) | हिंदी | తెలుగు</div>
        <div>© 2026 Zevolve. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;