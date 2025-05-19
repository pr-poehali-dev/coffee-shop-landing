
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import MenuCard from "./MenuCard";
import { MenuItems, MenuCategory } from "./types";

interface MenuTabsProps {
  menuItems: MenuItems;
  activeTab: MenuCategory;
  onTabChange: (tab: MenuCategory) => void;
}

const MenuTabs: React.FC<MenuTabsProps> = ({ menuItems, activeTab, onTabChange }) => {
  return (
    <Tabs 
      defaultValue={activeTab} 
      className="w-full" 
      onValueChange={(value) => onTabChange(value as MenuCategory)}
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
  );
};

export default MenuTabs;
