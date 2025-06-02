import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { LanguageSwitcher } from './language-switcher';
import { Link, useLocation } from 'wouter';

export function Header() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const navigateToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // If we're on homepage, scroll to section
    if (location === '/' || location === '/fr' || location === '/en') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      setLocation(`/#${sectionId}`);
      // After navigation, scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white sticky top-0 z-50 shadow-lg shadow-purple-500/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
          <i className="fas fa-house-laptop text-yellow-400 text-2xl drop-shadow-lg"></i>
          <span className="text-xl font-bold gradient-text">
            CatalinaHome
          </span>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <button
            onClick={() => navigateToSection('services')}
            className="nav-link font-semibold hover:text-yellow-400 transition-colors duration-300"
          >
            {t.header.services}
          </button>
          <button
            onClick={() => navigateToSection('projects')}
            className="nav-link font-semibold hover:text-yellow-400 transition-colors duration-300"
          >
            {t.header.projects}
          </button>
          <button
            onClick={() => navigateToSection('about')}
            className="nav-link font-semibold hover:text-yellow-400 transition-colors duration-300"
          >
            {t.header.about}
          </button>
          <button
            onClick={() => navigateToSection('contact')}
            className="nav-link font-semibold hover:text-yellow-400 transition-colors duration-300"
          >
            {t.header.contact}
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-sm animate-slide-in">
          <nav className="flex flex-col gap-4 p-6">
            <button
              onClick={() => navigateToSection('services')}
              className="font-semibold hover:text-yellow-400 transition-colors text-left"
            >
              {t.header.services}
            </button>
            <button
              onClick={() => navigateToSection('projects')}
              className="font-semibold hover:text-yellow-400 transition-colors text-left"
            >
              {t.header.projects}
            </button>
            <button
              onClick={() => navigateToSection('about')}
              className="font-semibold hover:text-yellow-400 transition-colors text-left"
            >
              {t.header.about}
            </button>
            <button
              onClick={() => navigateToSection('contact')}
              className="font-semibold hover:text-yellow-400 transition-colors text-left"
            >
              {t.header.contact}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
