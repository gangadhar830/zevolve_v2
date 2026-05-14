import "./css/Navbar.css";
import "./css/Home.css";
import "./css/Product.css";
import "./css/Features.css";
import "./css/Footer.css";  
import "./css/Showcase.css";
import "./css/WorkflowSection.css";
import "./css/Contact.css";
import "./css/About.css";
import "./css/AuthPage.css";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBullseye, FaUsers, FaLeaf } from "react-icons/fa";

import {
  FaArrowsAltV,
  FaCog,
  FaGem,
  FaHome,
  FaDumbbell,
  FaShieldAlt,
} from "react-icons/fa";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaComment,
} from "react-icons/fa";

import { useState , useEffect} from "react";

function App() {
  const [home, setHome] = useState(true);    
const [open, setOpen] = useState(false);   
const [about, setAbout] = useState(false); 
const [signup, setSignup] = useState(false); 
const [user, setUser] = useState(null);

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(storedUser);

  if (storedUser) {
    setUser(storedUser);
  }
}, []);
const handleHome = () => {
  if (home) {
    setHome(true);
    setOpen(false);
    setAbout(false);
    setSignup(false);
  } else {
    setHome(true);
    setOpen(false);
    setAbout(false);
    setSignup(false);
  }
};

const handleContact = () => {
  if (open) {
    setHome(true);
    setOpen(false);
    setAbout(false);
    setSignup(false);
  } else {
    setHome(false);
    setOpen(true);
    setAbout(false);
    setSignup(false);
  }
};

const handleAbout = () => {
  if (about) {
    setHome(true);
    setOpen(false);
    setAbout(false);
    setSignup(false);
  } else {
    setHome(false);
    setOpen(false);
    setAbout(true);
    setSignup(false);
  }
};

const handleSignup = () => {
  if (signup) {
    setHome(true);
    setOpen(false);
    setAbout(false);
    setSignup(false);
  } else {
    setHome(false);
    setOpen(false);
    setAbout(false);
    setSignup(true);
  }
};
return (
  <>
    <Navbar
      handleHome={handleHome}
      handleContact={handleContact}
      handleAbout={handleAbout}
      handleSignup={handleSignup}
      homeActive={home}
      contactActive={open}
      aboutActive={about}
      signupActive={signup}
      user={user}
    />
    {home && (
      <>
        <Home />
        <Showcase />
        <Features />
        <WorkflowSection />
        <Products />
      </>
    )}
    {open && <Contact />}
    {about && <About />}
    {signup && <AuthPage setUser={setUser} handleHome={handleHome}/>}
    <Footer />
  </>
);
}


function Navbar({handleContact, contactActive,handleAbout, handleSignup, handleHome,user}) {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/zevolve.webp" alt="logoimage" />
        <span>Zevolve</span>
      </div>

    <div className="nav-links">
      <ul>
        <li onClick={handleHome}>Home</li>
        <li>Services</li>
        <li>
          products
        </li>

        <li onClick={handleAbout}>About</li>
      </ul>
        </div>

      <div className="nav-buttons">
        <button className="contact-btn" onClick={handleContact}>
          {contactActive ? "Close" : "Contact Us"}
        </button>
        {user ? (
 <div className="profile-wrapper">
  <div
    className="profile-circle"
    onClick={() => setOpenProfile(!openProfile)}
  >
    {user.email?.charAt(0).toUpperCase()}
  </div>

  {openProfile && (
    <div className="profile-dropdown">
      <div className="dropdown-item">My Profile</div>
      <div className="dropdown-item">Settings</div>

      <div
        className="dropdown-item logout"
        onClick={() => {
          localStorage.removeItem("user");
          window.location.reload();
        }}
      >
        Logout
      </div>
    </div>
  )}
</div>
) : (
  <button className="signup-btn" onClick={handleSignup}>
    Sign Up
  </button>
)}
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Zevolve Workspace</h1>
        <p>Designed to Move You</p>

        <div className="buttons">
          <button><a href="#showcase">Explore More</a></button>
        </div>
      </div>
    </div>
  );
}


function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-left">
          <img src="/contact.jpg" alt="contact" />

          <h2>Let’s Talk</h2>
          <p>
            Have questions about our ergonomic products or want custom
            workspace solutions? Reach out and our team will get back to you.
          </p>

          <div className="contact-info">
            <p><FaEnvelope /> evolvedesk.in@gmail.com</p>
            <p><FaPhoneAlt /> +91 9989124466</p>
            <p><FaMapMarkerAlt /> Hyderabad, Telangana</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <h3>Contact Us</h3>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}


function Products() {
  const products = [
    {
      id: 1,
      name: "Ergo Chair",
      image: "/chair.jpg",
    },
    {
      id: 2,
      name: "Standing Desk",
      image: "/table.jpg",
    },
    {
      id: 3,
      name: "Sofa",
      image: "/sofa.jpg",
    },
    {
      id: 4,
      name: "Functional Chair",
      image: "/functionalchair.jpg",
    },
    {
      id: 5,
      name: "relaxation chair",
      image: "/relaxchair.jpg",
    },
  ];

  return (
    <section className="products-section" >
      <h2>Explore Our Products</h2>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <button>View Product</button>
          </div>
        ))}
      </div>
    </section>
  );
}


 
function Features() {
  const features = [
  {
    id: "01",
    title: "Height Adjustment",
    subtitle: "72mm – 1200mm",
    description: "Smooth height control with memory presets.",
    icon: <FaArrowsAltV />,
  },
  {
    id: "02",
    title: "Dual Motor System",
    subtitle: "6000N lifting force",
    description: "Silent and stable dual motor movement.",
    icon: <FaCog />,
  },
  {
    id: "03",
    title: "Premium Materials",
    subtitle: "Aircraft-grade aluminum",
    description: "Strong steel frame and premium tabletop.",
    icon: <FaGem />,
  },
  {
    id: "04",
    title: "Home & Office Use",
    subtitle: "Certified",
    description: "Designed for both work and home spaces.",
    icon: <FaHome />,
  },
  {
    id: "05",
    title: "Load Capacity",
    subtitle: "Up to 120kg",
    description: "Supports heavy workstation setups.",
    icon: <FaDumbbell />,
  },
  {
    id: "06",
    title: "7-Year Warranty",
    subtitle: "Protected",
    description: "Long-term warranty support included.",
    icon: <FaShieldAlt />,
  },
];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Engineered for <span>Excellence</span>
          </h2>

          <p className="features-subtitle">
            Built with precision engineering and ergonomic design.
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

              <div className="card-border-line"></div>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <a href="#shop" className="cta-link">
            Explore all models →
          </a>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const features = [
    { title: "Smooth Height Adjustment", desc: "Adjust seamlessly between sitting and standing positions.", image: "/height.jpg", tag: "Electric motor", pos: "top-left" },
    { title: "Digital Keypad", desc: "Save custom presets with smart memory control.", image: "/keypad.jpg", tag: "4 presets", pos: "top-right" },
    { title: "Tilting Mechanism", desc: "Tilt surface for drafting, reading, and ergonomic posture.", image: "/tilt.jpg", tag: "0–30° range", pos: "bot-left" },
    { title: "Ergonomic Benefits", desc: "Built to improve posture and workspace comfort.", image: "/benefits.jpg", tag: "Health-first", pos: "bot-right" },
  ];

  return (
    <section className="showcase-section" id="showcase">
      <h2>Engineered for Modern Workspaces</h2>
      <p className="showcase-sub">Four innovations, one desk</p>

      <div className="orbit-grid">
        {features.map((f) => (
          <div key={f.title} className={`fcard ${f.pos}`}>
            <img className="fcard-img" src={f.image} alt={f.title} />
            <div className="fcard-body">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <span className="fcard-tag">{f.tag}</span>
            </div>
          </div>
        ))}

        <div className="center-col">
          <img src="/centertable.jpg" alt="Ergonomic standing desk" />
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  const steps = [
    {
      title: "Start Your Morning",
      desc: "Begin seated with your perfect ergonomic posture and saved memory preset.",
    },
    {
      title: "Switch to Standing",
      desc: "One-touch motorized adjustment smoothly lifts your desk in seconds.",
    },
    {
      title: "Stay Productive",
      desc: "Reduce fatigue, improve blood flow, and maintain better focus all day.",
    },
    {
      title: "End Strong",
      desc: "Return to your preferred height and keep your workspace organized.",
    },
  ];

  return (
    <section className="workflow-section">
      <div className="workflow-header">
        <p>WORKFLOW EXPERIENCE</p>
        <h2>Designed Around Your Day</h2>
      </div>

      <div className="timeline">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-card">
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Products</li>
            <li>Services</li>
            <li>Legal</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer-column about">
          <h3>About us</h3>
          <p>
            ZEVOLVE creates premium adjustable desks designed to support
            movement, posture and long-term well-being.
          </p>

          <p>
            We are a purpose-led team inspired by real experiences. Our mission
            is to create workspaces that care for people.
          </p>
        </div>

        <div className="footer-column">
          <h3>Connect with us</h3>

          <p><FaComment /> Contact us</p>
          <p><FaEnvelope /> evolvedesk.in@gmail.com</p>
          <p><FaPhoneAlt /> +91 9989124466</p>

          <div className="social-icons">
            <span><FaFacebookF /></span>
            <span>X</span>
            <span><FaLinkedinIn /></span>
            <span>⌂</span>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div>
          English (IN) | हिंदी | తెలుగు
        </div>

        <div>Copyright © Zevolve</div>
      </div>
    </footer>
  );
}


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
    }, 3000);

    return () => clearInterval(slider);
  }, [images.length]);

  return (
    <section className="about-page">
      {/* Hero */}
      <div className="about-hero">
        <div className="about-content">
          <p className="about-tag">ABOUT ZEVOLVE</p>
          <h1>Designed to Move You</h1>
          <p>
            Zevolve creates ergonomic workspaces built for movement,
            productivity, and long-term well-being.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="carousel-section">
        <h2>Inside Zevolve</h2>

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

      {/* Cards */}
      <div className="about-grid">
        <div className="about-card">
          <FaBullseye className="about-icon" />
          <h3>Our Mission</h3>
          <p>
            Build healthier workspaces that inspire movement and better posture.
          </p>
        </div>

        <div className="about-card">
          <FaUsers className="about-icon" />
          <h3>Our Team</h3>
          <p>
            A passionate team focused on ergonomic innovation and user comfort.
          </p>
        </div>

        <div className="about-card">
          <FaLeaf className="about-icon" />
          <h3>Sustainability</h3>
          <p>
            Durable materials and thoughtful engineering for long-lasting use.
          </p>
        </div>
      </div>
    </section>
  );
}
function AuthPage({setUser,handleHome}) {
  const [signup, setSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const data = await response.json();
      console.log("Success:", data);

      alert("Registered Successfully");
      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.text();
    console.log(data);  

if (!response.ok) {
  alert(data);
  return;
}

const userObj = { email };

localStorage.setItem("user", JSON.stringify(userObj));
setUser(userObj);

alert("Login Successful");

setEmail("");
setPassword("");

handleHome();
  } catch (error) {
    console.log(error);
  }
 

};

  return (
    <div className="auth-container">
      <div className={`auth-box ${signup ? "active" : ""}`}>

        <div className="form-box login">
          <h2>Login</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={loginUser}>Login</button>
        </div>

        <div className="form-box signup">
          <h2>Create Account</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={registerUser}>Sign Up</button>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel left-panel">
              <h2>Welcome Back!</h2>
              <p>Already have an account?</p>
              <button onClick={() => setSignup(false)}>Login</button>
            </div>

            <div className="overlay-panel right-panel">
              <h2>Hello, Friend!</h2>
              <p>Don't have an account?</p>
              <button onClick={() => setSignup(true)}>
                Create Account
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


export default App;
