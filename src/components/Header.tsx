import { Button } from "@/components/ui/button";
import { Menu, X} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import logo from "@/assets/logos/logo.svg";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary py-4 shadow-sm border-b border-primary sticky top-0 z-50 font-[var(--heading)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-14">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-full h-8 sm:h-full object-cover"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex text-white/50 font-medium">
            <a href="#inicio" className="hover:text-white transition-colors p-3">Início</a>
            <a href="#planos" className="hover:text-white transition-colors p-3">Planos</a>
            <a href="#livro" className="hover:text-white transition-colors p-3">Livro de reclamações</a>
            <a href="#publi" className="hover:text-white transition-colors p-3">Publicações</a>
            <a href="#contato" className="hover:text-white transition-colors p-3">Contacto</a>
            <a href="#faq" className="hover:text-white transition-colors p-3">FAQs</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button className="p-0 h-auto">
              <a
                href="#"
                className="w-full py-3 px-6 text-lg text-white font-semibold"
              >
                Assinar um plano
              </a>
            </Button>
            <Button className="p-0 h-auto">
              <a
                href="#"
                className="w-full py-3 px-6 text-lg text-white font-semibold"
              >
                Login
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-6 h-6"
            >
              {isMenuOpen ? <X className="text-gray-500"/> : <Menu className="text-white"/>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 border-t border-gray-100 text-white font-medium">
            <div className="flex flex-col">
              <a href="#inicio" className="py-2 px-2">Início</a>
              <a href="#planos" className="py-2 px-2">Planos</a>
              <a href="#livro" className="py-2 px-2">Livro de reclamações</a>
              <a href="#publi" className="py-2 px-2">Publicações</a>
              <a href="#contato" className="py-2 px-2">Contacto</a>
              <a href="#faq" className="py-2 px-2">FAQs</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button className="py-3 gap-1.5 text-white text-base font-semibold h-auto">
                  <a 
                    href="#"
                    className="flex items-center justify-center"
                  >
                    Assinar um plano
                  </a>
                </Button>
                <Button className="py-3 text-white text-base font-semibold h-auto">
                  <a 
                    href="#"
                    className="flex items-center justify-center"
                  >
                    Login
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
