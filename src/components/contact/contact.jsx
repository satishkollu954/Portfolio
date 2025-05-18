import "./contact.css";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="text-end contact-header">
        <span className="underline">`Contact`</span>
      </div>

      <div className="text-center mt-4">
        <h2 className="contact-title">
          Let's Connect<span className="text-danger">!</span>
        </h2>
        <p className="contact-description">
          Build Bridges, Stay in Touch, and Grow Together!
        </p>
      </div>

      <div className="message-container">
        <input
          type="text"
          className="form-control contact-input"
          placeholder="Enter your message..."
        />
        <button className="contact-button">
          Send <span className="ms-2">&rarr;</span>
        </button>
      </div>

      <div className="contact-footer">
        <div className="social-icons">
          <a href="mailto:satishkollu954@gmail.com" className="icon-link">
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/satish-kollu-66a512233"
            className="icon-link"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/satishkollu954"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>

        <div className="footer-text">@satishkollu</div>
      </div>
    </section>
  );
}
