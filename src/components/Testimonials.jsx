import { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    img: "/assets/testimonial1.jpg",
    text: "Dr. Sam Adeyemi and the Strategic Teams at Sam Adeyemi Global Consulting (SAGLC) have been a phenomenal blessing to myself and our organization with their authentic real-life offerings. Their conferences are truly inspiring and global indeed. Africa and every organization need workable systems and structures and that's what SAGLC has impacted on us to be global in acts and deeds.",
    author: "Victor Gbenga Afolabi",
    role: "GMD, GMD Group, Brand Solution Company",
  },
  {
    img: "/assets/testimonial2.jpg",
    text: "Caleb’s leadership sessions completely transformed how I manage my team. His insights are practical, powerful, and delivered with passion.",
    author: "Sarah Johnson",
    role: "CEO, Inspire Global",
  },
  {
    img: "/assets/testimonial3.jpg",
    text: "A truly inspirational speaker! Caleb has the rare ability to captivate an audience while leaving them with actionable wisdom.",
    author: "Michael Adeyemi",
    role: "Leadership Coach",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  const { img, text, author, role } = testimonials[index];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <h2>What Some People Say...</h2>
        <div className="testimonial-card">
          <img src={img} alt={author} className="testimonial-img" />
          <p className="testimonial-text">"{text}"</p>
          <h4>{author}</h4>
          <p className="testimonial-role">{role}</p>

          {/* Navigation Arrows */}
          <button className="arrow left" onClick={prevTestimonial}>
            &#8249;
          </button>
          <button className="arrow right" onClick={nextTestimonial}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
