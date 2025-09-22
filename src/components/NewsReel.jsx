import "./NewsReel.css";
import newsItems from "../data/news.json"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function NewsReel() {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,   // show 3 cards at once (desktop)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="news-reel">
      <h2 className="news-title">Latest Engagements</h2>
      <Slider {...settings} className="news-slider">
        {newsItems.map(item => (
          <div key={item.id} className="news-card">
            <img src={item.image} alt={item.text} className="news-image" />
            <p className="news-text">{item.text}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}
