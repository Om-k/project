import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="nav" aria-label="Main Navigation">
        <h3 className="nav-logo">Little Lemon</h3>

        <button
          className="nav-toggle"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/booking" onClick={() => setMenuOpen(false)}>Reservations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
