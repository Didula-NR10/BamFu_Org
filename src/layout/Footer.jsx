function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand" onClick={handleScrollToTop}>
          <img src="/src/assets/logo.png" alt="BamFu Logo" className="footer-logo" />
          <span className="footer-title">BamFu</span>
        </div>
        
        <div className="footer-meta">
          <p className="copyright">
            &copy; {currentYear} BamFu Solutions. All rights reserved.
          </p>
          <ul className="footer-legal-links">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;