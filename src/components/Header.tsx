import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', section: 'hero' },
    { label: 'À propos', section: 'about' },
    { label: 'Portfolio', section: 'portfolio' },
    { label: 'Compétences', section: 'skills' },
    { label: 'Expériences', section: 'experience' },
    { label: 'Contact', section: 'contact' },
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={() => handleNavClick('hero')}
            className="text-xl sm:text-2xl font-bold text-white hover:text-emerald-400 transition-colors"
          >
            Boune A. Mbacke
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavClick(link.section)}
                className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="src/assets/RELEVE_93993_1277_1.pdf"
              download
              className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <Download className="w-4 h-4" />
              <span>CV</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-emerald-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-sm border-t border-slate-800">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavClick(link.section)}
                className="block w-full text-left text-gray-300 hover:text-emerald-400 transition-colors py-2 font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/cv.pdf"
              download
              className="flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-lg transition-colors font-medium w-full"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger CV</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
