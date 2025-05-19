import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const menuItems = {
  coffee: [
    {
      id: 1,
      name: "Эспрессо",
      description: "Классический интенсивный кофе с богатым вкусом",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      name: "Капучино",
      description:
        "Эспрессо с добавлением взбитого молока и нежной молочной пены",
      price: 220,
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      name: "Латте",
      description: "Мягкий кофейный напиток с большим количеством молока",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    },
    {
      id: 4,
      name: "Флэт Уайт",
      description: "Двойной эспрессо с взбитым молоком",
      price: 230,
      image:
        "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
  ],
  desserts: [
    {
      id: 1,
      name: "Чизкейк Нью-Йорк",
      description: "Классический американский чизкейк с ванильным вкусом",
      price: 320,
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
    },
    {
      id: 2,
      name: "Тирамису",
      description:
        "Итальянский десерт на основе маскарпоне с пропитанным в кофе бисквитом",
      price: 340,
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
    {
      id: 3,
      name: "Круассан",
      description: "Свежий хрустящий круассан с маслом",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    },
    {
      id: 4,
      name: "Шоколадный фондан",
      description: "Тёплый шоколадный кекс с жидкой начинкой",
      price: 290,
      image:
        "https://images.unsplash.com/photo-1617305855058-336d24456869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
    },
  ],
  breakfast: [
    {
      id: 1,
      name: "Авокадо тост",
      description: "Тост с авокадо, яйцом пашот и микрозеленью",
      price: 370,
      image:
        "https://images.unsplash.com/photo-1603046891744-76039852702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
    },
    {
      id: 2,
      name: "Сырники",
      description: "Нежные творожные сырники с джемом и сметаной",
      price: 290,
      image:
        "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      name: "Омлет с овощами",
      description: "Пышный омлет с сезонными овощами и сыром",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80",
    },
    {
      id: 4,
      name: "Гранола с йогуртом",
      description: "Домашняя гранола с натуральным йогуртом и свежими ягодами",
      price: 320,
      image:
        "https://images.unsplash.com/photo-1620211612960-0875d615217a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
  ],
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("coffee");

  return (
    <section id="menu" className="py-24 bg-coffee-cream/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наше меню</h2>
          <p className="text-muted-foreground">
            Изысканные кофейные напитки и свежие десерты, приготовленные с
            любовью
          </p>
        </div>

        <Tabs
          defaultValue="coffee"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-12">
            <TabsList className="bg-background/20 p-1">
              <TabsTrigger
                value="coffee"
                className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Кофе
              </TabsTrigger>
              <TabsTrigger
                value="desserts"
                className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Десерты
              </TabsTrigger>
              <TabsTrigger
                value="breakfast"
                className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Завтраки
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="coffee" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuItems.coffee.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="desserts" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuItems.desserts.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="breakfast" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuItems.breakfast.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="default"
            className="bg-primary text-white hover:bg-primary/90"
          >
            Смотреть полное меню
          </Button>
        </div>
      </div>
    </section>
  );
};

const MenuCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden menu-item animate-on-scroll">
      <div className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <span className="text-primary font-medium">{item.price} ₽</span>
        </div>
        <p className="text-muted-foreground text-sm">{item.description}</p>
      </div>
    </div>
  );
};

export default Menu;
