import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Books from "./components/Books";
import BookVideo from "./components/BookVideo";   // ✅ New
import Testimonials from "./components/Testimonials";
import NewsReel from "./components/NewsReel";     // ✅ New
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Profile />
      <Books />
      <BookVideo />       {/* ✅ Book Video Section */}
      <Testimonials />
      <NewsReel />        {/* ✅ News Reel Section */}
      <Contact />
      <Footer />
    </div>
  );
}
