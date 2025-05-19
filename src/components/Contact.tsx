
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-coffee-cream/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-muted-foreground">
            Мы всегда рады видеть вас в нашей кофейне
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Связаться с нами</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Адрес</h4>
                  <p className="text-muted-foreground">ул. Арбат, 20, Москва, 119002</p>
                  <p className="text-muted-foreground">2 минуты от метро Арбатская</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Телефон</h4>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-muted-foreground">info@kofeinik.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Часы работы</h4>
                  <p className="text-muted-foreground">Пн-Пт: 8:00 - 22:00</p>
                  <p className="text-muted-foreground">Сб-Вс: 9:00 - 23:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90"
              >
                Забронировать столик
              </Button>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
              {/* Вставляем карту Яндекс или Google */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3685951042794!2d37.60095217677874!3d55.74903997347651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a4f28a675cf%3A0xba3dfba0e90c1398!2z0YPQuy4g0JDRgNCx0LDRgiwgMjAsINCc0L7RgdC60LLQsCwgMTE5MDAy!5e0!3m2!1sru!2sru!4v1710868325599!5m2!1sru!2sru" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
