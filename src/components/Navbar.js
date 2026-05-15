import React, { useState } from "react";

function Navbar({
  handleContact,
  contactActive,
  handleAbout,
  handleSignup,
  handleHome,
  user,
}) {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="logo" onClick={handleHome}>
        <img src="/zevolve.webp" alt="logoimage" />
        <span>Zevolve</span>
      </div>

      {/* Center */}
      <div className="nav-links">
        <ul>
          <li onClick={handleHome}>Home</li>
          <li>Services</li>
          <li>Products</li>
          <li onClick={handleAbout}>About</li>
        </ul>
      </div>

      {/* Right */}
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

export default Navbar;