import { Scale, Phone, Mail, MapPin, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Partners', href: '/partners' },
    { name: 'Case Studies', href: '/cases' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Contract Due Diligence',
    'Claims Management',
    'Dispute Resolution',
    'Extension of Time',
    'Infrastructure Support',
    'Cost Analysis'
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-accent" />
              <div>
                <div className="text-xl font-bold">AAS Legal</div>
                <div className="text-sm opacity-80">Techno-Legal Consultancy</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Registered Limited Liability Partnership Law Firm specializing in contract management, dispute resolution, and arbitration for infrastructure projects.
            </p>
            <div className="text-sm opacity-80">
              <p>Established: June 2024</p>
              <p>Registration: LLP</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                    data-testid={`link-footer-${link.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-sm opacity-90">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <div className="text-sm opacity-90 leading-relaxed">
                  AAS Legal Office<br />
                  [Address to be provided]<br />
                  New Delhi, India
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm opacity-90">+91 (0) 11-XXXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm opacity-90">info@aaslegal.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80 text-center md:text-left">
              © 2024 AAS Legal. All rights reserved. | Registered Limited Liability Partnership
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
              <button 
                onClick={scrollToTop}
                className="p-2 bg-accent/20 rounded-lg hover:bg-accent/30 transition-all"
                data-testid="button-scroll-top"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;