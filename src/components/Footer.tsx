
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#footer');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Exchange Program', href: '/exchange' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ];

  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className={`space-y-4 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <img 
              src="/lovable-uploads/80e4859a-fd76-49d6-8958-daa30eaac3cb.png" 
              alt="Lotlite Technology" 
              className="h-20 w-auto transition-transform duration-300 hover:scale-105"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering careers through industry-recognized certifications and global educational opportunities.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-white/10 transition-all duration-300 hover:scale-110">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-white/10 transition-all duration-300 hover:scale-110">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-white/10 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } delay-200`}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 transform inline-block"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } delay-400`}>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <Mail className="h-4 w-4 text-gray-400 transition-colors duration-300 group-hover:text-white" />
                <span className="text-gray-300 text-sm transition-colors duration-300 group-hover:text-white">s.kumar@lotlitetechnology.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="h-4 w-4 text-gray-400 transition-colors duration-300 group-hover:text-white" />
                <span className="text-gray-300 text-sm transition-colors duration-300 group-hover:text-white">+91 9766499364</span>
              </div>
              <div className="flex items-start gap-3 group">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-white" />
                <span className="text-gray-300 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">
                  Office-122,Gera Imperium,Opp- Wipro,Hinjewadi Phase2,Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } delay-600`}>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between hover:bg-white/5 p-2 rounded transition-colors duration-300">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="text-white">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between hover:bg-white/5 p-2 rounded transition-colors duration-300">
                <span className="text-gray-300">Saturday</span>
                <span className="text-white">9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between hover:bg-white/5 p-2 rounded transition-colors duration-300">
                <span className="text-gray-300">Sunday</span>
                <span className="text-white">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t border-gray-700 mt-8 pt-8 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } delay-800`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2025 Lotlite Technology. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-300 hover:text-white transition-all duration-200 text-sm hover:scale-105 transform"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
