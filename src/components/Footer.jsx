import "./Footer.css";

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer__bar">
        <div className="container">
          <p className="footer__copy">
            © 2026 Ritmo Dance Club. Усі права захищено.
          </p>
        </div>
      </div>
    </footer>
  );
}
