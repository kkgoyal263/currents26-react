import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
  <img src="/src/assets/logo.jpj" alt="Currents 26 Logo" />
  <span>Currents'26</span>
</div>


        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/events" onClick={closeMenu}>Events</Link>
          <Link to="/tronicals" onClick={closeMenu}>Tronicals</Link>
          <Link to="/accommodation" onClick={closeMenu}>Accommodation</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
