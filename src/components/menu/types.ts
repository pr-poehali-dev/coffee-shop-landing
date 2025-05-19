
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface MenuItems {
  coffee: MenuItem[];
  desserts: MenuItem[];
  breakfast: MenuItem[];
}

export type MenuCategory = keyof MenuItems;
