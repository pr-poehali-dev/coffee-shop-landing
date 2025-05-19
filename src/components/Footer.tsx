
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">☕</span>
              КОФЕЙНИК
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Атмосферная кофейня в центре Москвы, 
              где каждая чашка кофе - это маленькое 
              путешествие в мир вкуса.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#menu" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Меню
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Галерея
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Часы работы</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-primary-foreground/80">Понедельник-пятница</span>
                <span>8:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-primary-foreground/80">Суббота-воскресенье</span>
                <span>9:00 - 23:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <address className="not-italic">
              <p className="mb-2">ул. Арбат, 20, Москва</p>
              <p className="mb-2">+7 (495) 123-45-67</p>
              <p className="mb-2">info@kofeinik.ru</p>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 КОФЕЙНИК. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
