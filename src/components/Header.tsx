
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProgramsHovered, setIsProgramsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Certifications', href: '/certifications' },
  ];

  const programLinks = [
    { name: 'Exchange Program', href: '/exchange-program' },
    { name: 'University Partners', href: '/university-partner-program' },
    { name: 'Microsoft Championship', href: '/microsoft-championship' },
  ];

  const handleContactClick = () => {
    if (location.pathname === '/') {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { replace: true });
      setTimeout(() => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 transition-all duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 opacity-30 animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/78703226-2131-4fdc-b599-02e5a2be9fe0.png" 
              alt="Lotlite Technology" 
              className="h-12 w-auto transition-transform duration-300 hover:scale-105 cursor-pointer select-none"
              onClick={handleLogoClick}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              style={{ pointerEvents: 'auto', userSelect: 'none' }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-all duration-200 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Programs Dropdown with Hover Effect */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProgramsHovered(true)}
              onMouseLeave={() => setIsProgramsHovered(false)}
            >
              <DropdownMenu open={isProgramsHovered}>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-all duration-200 font-medium relative group">
                  Programs
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isProgramsHovered ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg">
                  {programLinks.map((link) => (
                    <DropdownMenuItem key={link.name}>
                      <a
                        href={link.href}
                        className="w-full text-foreground hover:text-primary transition-all duration-200"
                      >
                        {link.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-all duration-200 hover:scale-110"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-foreground hover:text-primary transition-all duration-200 font-medium px-4 transform hover:translate-x-2`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Programs Section */}
              <div className="px-4">
                <div className="text-foreground font-medium mb-2">Programs</div>
                {programLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-foreground hover:text-primary transition-all duration-200 font-medium pl-4 py-1 transform hover:translate-x-2"
                    style={{ animationDelay: `${(navigationLinks.length + index) * 100}ms` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="px-4 pt-2">
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleContactClick();
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
