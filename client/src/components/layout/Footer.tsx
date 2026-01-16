import { Link } from "wouter";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HeartHandshake, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <HeartHandshake size={20} />
              </div>
              <span className="text-xl font-display font-bold text-white">CCI Nigeria</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Dedicated to reducing the cancer burden in Nigeria through awareness, 
              screening, and patient support initiatives.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Projects", href: "/projects" },
                { label: "Get Involved", href: "/contact" },
                { label: "Donate", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span className="text-slate-400">
                  123 Health Avenue, Victoria Island,<br />Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary shrink-0" size={20} />
                <a href="tel:+2349160462316" className="text-slate-400 hover:text-white">
                  +234 916 046 2316
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary shrink-0" size={20} />
                <a href="mailto:info@ccinitiativenig.org" className="text-slate-400 hover:text-white">
                  info@ccinitiativenig.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg mb-6">Newsletter</h3>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter for updates and health tips.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
              <button className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Comprehensive Cancer Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
