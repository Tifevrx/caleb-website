import "./Footer.css";
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube, 
  FaEnvelope 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Book Title */}
        <h2 className="footer-book-title">Quick Links</h2>

        {/* Quick Links */}
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#books">Books</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Icons with colors + tooltip */}
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className="facebook"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter" className="twitter"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="linkedin"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" className="instagram"><FaInstagram /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube" className="youtube"><FaYoutube /></a>
          <a href="mailto:info@example.com" title="Email" className="email"><FaEnvelope /></a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">&copy; {new Date().getFullYear()} Caleb O. Oladipo. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
