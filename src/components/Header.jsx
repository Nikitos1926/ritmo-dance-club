import { useEffect, useState } from "react";
import "./Header.css";

export default function Header({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 576) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { id: "home", label: "Головна" },
    { id: "about", label: "Про клуб" },
    { id: "trainers", label: "Тренери" },
    { id: "contacts", label: "Контакти" },
  ];

  const handleNav = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <nav className="nav container">
        <span className="nav__logo">Ritmo</span>

        {/* Desktop links */}
        <div className="nav__links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav__link ${currentPage === link.id ? "nav__link--active" : ""}`}
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Burger button (mobile only) */}
        <button
          className={`nav__burger ${menuOpen ? "nav__burger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="nav__mobile-menu">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav__mobile-link ${currentPage === link.id ? "nav__mobile-link--active" : ""}`}
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
