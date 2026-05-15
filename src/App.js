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

import { useState , useEffect} from "react";


import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Features from "./components/Features.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import Showcase from "./components/Showcase.js";
import WorkflowSection from "./components/WorkflowSection.js";
import Products from "./components/Products.js";
import AuthPage from "./components/AuthPage.js";
import Home from "./components/Home.js";

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

export default App;
