import "./BookVideo.css";

export default function BookVideo() {
  return (
    <section className="book-video">
      <h2 className="book-video-title">Watch the New Book Trailer</h2>
      <div className="book-video-wrapper">
        <video controls poster="/assets/book-poster.jpg" className="book-video-player">
          <source src="/assets/book-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
