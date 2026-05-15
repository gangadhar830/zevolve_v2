import {FaEnvelope,FaPhoneAlt,FaMapMarkerAlt} from "react-icons/fa";
function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        <div className="contact-header">
          <span className="contact-badge">GET IN TOUCH</span>
          <h2>Build Smarter Embedded Solutions With Us</h2>
          <p>
            From ergonomic embedded furniture systems to custom hardware
            integrations, our engineers help businesses create reliable,
            intelligent products.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info */}
          <div className="contact-info-panel">
            <div className="info-card">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email Us</h4>
                <p>evolvedesk.in@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt className="icon" />
              <div>
                <h4>Call Us</h4>
                <p>+91 9989124466</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Location</h4>
                <p>Hyderabad, Telangana</p>
              </div>
            </div>

            <div className="mini-stats">
              <div>
                <h3>50+</h3>
                <p>Projects Delivered</p>
              </div>
              <div>
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-box">
            <h3>Request Consultation</h3>

            <form>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <input type="text" placeholder="Company Name" />
              <textarea placeholder="Tell us about your project"></textarea>

              <button type="submit">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;