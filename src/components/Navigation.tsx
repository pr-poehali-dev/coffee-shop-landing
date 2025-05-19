
import { useState, useEffect } from "react";
import { MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Отслеживаем прокрутку страницы для изменения стиля навигации
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Главная", href: "#hero" },
    { name: "О нас", href: "#about" },
    { name: "Меню", href: "#menu" },
    { name: "Галерея", href: "#gallery" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-montserrat font-bold tracking-tight text-primary flex items-center"
        >
          <span className="mr-2">☕</span>
          КОФЕЙНИК
        </a>

        {/* Мобильная кнопка меню */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </Button>

        {/* Десктопное меню */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="default" 
            className="bg-primary text-white hover:bg-primary/90"
          >
            Заказать столик
          </Button>
        </nav>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-md py-4 md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4 container">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-foreground/80 hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="default" 
                className="bg-primary text-white hover:bg-primary/90 mx-4"
              >
                Заказать столик
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
