import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold text-primary">
              R'SOFT
            </Link>
            <p className="mt-3 text-sm opacity-70">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t("nav.home")}</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/" className="hover:text-primary transition-colors">{t("nav.home")}</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">{t("nav.courses")}</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">{t("nav.projects")}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t("contact.title")}</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Yerevan, Armenia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+374 XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@rsoft.am</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4">Social</h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-sm opacity-50">
          © {new Date().getFullYear()} R'SOFT. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
