
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Фоновое изображение с оверлеем */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" 
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 py-24 text-white text-center relative z-10">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Открой для себя настоящий вкус кофе
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Уютная атмосфера, профессиональные бариста и лучшие зерна со всего мира в самом сердце Москвы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-primary text-lg"
            >
              Наше меню
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/20 hover:border-white text-lg"
            >
              Забронировать столик
            </Button>
          </div>
          
          {/* Часы работы */}
          <div className="mt-16 inline-block p-4 rounded-lg bg-black/40 backdrop-blur-sm">
            <p className="text-white/70 mb-1">Мы открыты</p>
            <p className="text-xl font-medium">Пн-Пт: 8:00 - 22:00 | Сб-Вс: 9:00 - 23:00</p>
          </div>
        </div>
      </div>

      {/* Скролл вниз */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/80 hover:text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="36" 
            height="36" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
