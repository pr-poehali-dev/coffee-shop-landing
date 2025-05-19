
import React from "react";
import { MenuItem } from "./types";

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
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

export default MenuCard;
