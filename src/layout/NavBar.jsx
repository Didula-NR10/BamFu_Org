import Button from '../components/Button.jsx';

function Navbar() {
  const navLinks = [
    { label: 'About', targetId: 'about' },
    { label: 'Technology', targetId: 'tech-stack' },
    { label: 'Projects', targetId: 'projects' },
    { label: 'Services', targetId: 'services' }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => handleScroll('home')}>
        <img src="/src/assets/logo.png" alt="BamFu Logo" className="navbar-logo" />
        <span className="navbar-title">BamFu</span>
      </div>
      
      <ul className="navbar-links">
        {navLinks.map((link, index) => (
          <li 
            key={index} 
            className="navbar-item" 
            onClick={() => handleScroll(link.targetId)}
          >
            {link.label}
          </li>
        ))}
      </ul>

      <div className="navbar-actions">
        <Button variant="primary" onClick={() => handleScroll('contact')}>
          Contact Us
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;