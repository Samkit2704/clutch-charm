export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  materials: string;
  category: string;
  featured: boolean;
  image: string;
}

export type ProductCategory = "clutchers" | "clips" | "bows" | "sets" | "all";
