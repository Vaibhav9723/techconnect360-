import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Tech Connect 360 Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed max-w-xs">
              Smart digital solutions for modern businesses. We build the tools you need to grow, scale, and succeed in the digital era.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white/80 hover:text-white">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white/80 hover:text-white">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white/80 hover:text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white/80 hover:text-white">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/portfolio" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="/about" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">POS Systems</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">CRM Development</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Website Development</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Digital Marketing</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Branding & Identity</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#ee7c27' }} />
                <span className="text-secondary-foreground/70 text-sm">123 Innovation Drive, Tech Valley, TX 75001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" style={{ color: '#ee7c27' }} />
                <span className="text-secondary-foreground/70 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" style={{ color: '#ee7c27' }} />
                <span className="text-secondary-foreground/70 text-sm">hello@techconnect360.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} TechConnect360°. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-secondary-foreground/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-secondary-foreground/50 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
