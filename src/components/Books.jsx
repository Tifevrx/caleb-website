import "./Books.css";

export default function Books() {
  return (
    <section className="books" id="books">
      <div className="books-container">
        <h2>Books by Caleb O. Oladipo</h2>
        <div className="book-list">
          <div className="book-card">
            <img src="/assets/book1.jpg" alt="Book 1" />
            <a
              href="https://www.amazon.com/Christians-City-Lagos-Contemporary-Christianity/dp/1350401277"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              Buy on Amazon
            </a>
          </div>
          <div className="book-card">
            <img src="/assets/book2.jpg" alt="Book 2" />
            <a
              href="https://www.amazon.in/Development-Doctrine-Indigenous-Christian-University/dp/082042708X"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              Buy on Amazon
            </a>
          </div>
          <div className="book-card">
            <img src="/assets/book3.jpg" alt="Book 3" />
            <a
              href="https://www.amazon.com/Will-Arise-Theological-Political-Christianity/dp/0820463892"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              Buy on Amazon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
