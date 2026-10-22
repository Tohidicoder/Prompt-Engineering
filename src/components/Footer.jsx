import Logo from "./Logo.jsx";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer({ t, lang }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <Logo lang={lang} />
        <div className="footer-copy">
          <p>{t.footer}</p>
          <p className="footer-credit">
            {lang === "fa" ? "طراحی و توسعه با" : "Designed & Developed with"}
            <Heart size={14} fill="currentColor" aria-hidden="true" />
            <strong>Faeza Tohidi</strong>
          </p>
          <small>© 2026 Faezeh Tohidi</small>
        </div>
        <a
          className="back-top"
          href="#top"
          aria-label={lang === "fa" ? "بازگشت به بالا" : "Back to top"}
          title={lang === "fa" ? "بازگشت به بالا" : "Back to top"}
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}
