
import { Coffee, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-coffee-cream/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">О нашей кофейне</h2>
          <p className="text-muted-foreground">
            Мы создали место, где каждая чашка кофе становится особенным моментом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Наша история</h3>
            <p className="mb-4 text-muted-foreground">
              Кофейня «КОФЕЙНИК» открылась в 2018 году в историческом центре Москвы. 
              Мы начинали как небольшое кафе с одной кофемашиной и большой мечтой - 
              познакомить москвичей с культурой specialty coffee.
            </p>
            <p className="mb-6 text-muted-foreground">
              Сегодня мы - сообщество ценителей качественного кофе, где каждый 
              может найти свой любимый вкус и познакомиться с кофейной культурой 
              разных стран мира. Мы обжариваем кофе в собственной ростерии и создаем 
              уникальные бленды, которые можно попробовать только у нас.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">лет опыта</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">15</p>
                <p className="text-sm text-muted-foreground">профессиональных бариста</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground">видов кофе</p>
              </div>
            </div>
          </div>

          <div className="relative animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Кофейня интерьер"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Кофе крупным планом" 
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          </div>
        </div>

        {/* Особенности */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105 animate-on-scroll">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Coffee className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Лучшие зерна</h3>
            <p className="text-muted-foreground">
              Мы тщательно отбираем кофейные зерна высшего качества от проверенных поставщиков 
              со всего мира и обжариваем их с особой заботой.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105 animate-on-scroll">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Мастерство бариста</h3>
            <p className="text-muted-foreground">
              Наши бариста - настоящие профессионалы своего дела, регулярно 
              участвующие в чемпионатах и проходящие специальные курсы.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105 animate-on-scroll">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Атмосфера</h3>
            <p className="text-muted-foreground">
              Мы создали уютное пространство, где приятно провести время за чашечкой кофе, 
              поработать или встретиться с друзьями.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
