
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import MenuTabs from "./MenuTabs";
import { menuItems } from "./data";
import { MenuCategory } from "./types";

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuCategory>("coffee");

  return (
    <section id="menu" className="py-24 bg-coffee-cream/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наше меню</h2>
          <p className="text-muted-foreground">
            Изысканные кофейные напитки и свежие десерты, приготовленные с любовью
          </p>
        </div>

        <MenuTabs 
          menuItems={menuItems} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

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

export default Menu;
