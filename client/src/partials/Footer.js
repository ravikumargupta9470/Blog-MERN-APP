const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/login">Account</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
    <p className="developer-credits">
      Developed by: <a href="https://github.com/ravikumargupta9470">Ravi Kumar Gupta</a>
      <span className="social-icons">
        <a
          href="https://github.com/ravikumargupta9470"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="linkedin.com/in/ravi-kumar-gupta-a6325a1b5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>


      </span>
    </p>
  </footer>
);

export default Footer;
