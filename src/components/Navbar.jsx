import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav>
        {/* Logo */}
        <div className="logo">Caleb O. Oladipo</div>

        {/* Desktop Menu */}
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <a href="#about">About</a>
          <a href="#books">Books</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>
    </header>
  );
}
