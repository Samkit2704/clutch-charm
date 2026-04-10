import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { createActor } from "../backend";
import {
  featuredProducts as staticFeatured,
  getProductsByCategory as staticGetByCategory,
  getProductById as staticGetById,
  products as staticProducts,
} from "../data/products";
import type { Product } from "../types/product";

// Map backend Product (bigint id) to frontend Product (number id)
function mapProduct(p: {
  id: bigint;
  name: string;
  price: number;
  description: string;
  materials: string;
  category: string;
  image: string;
  featured: boolean;
}): Product {
  return {
    id: Number(p.id),
    name: p.name,
    price: p.price,
    description: p.description,
    materials: p.materials,
    category: p.category,
    image: p.image || "/assets/generated/product-flower-clutch.dim_600x600.jpg",
    featured: p.featured,
  };
}

export function useProducts() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return staticProducts;
      try {
        const results = await actor.getProducts();
        return results.map(mapProduct);
      } catch {
        return staticProducts;
      }
    },
    enabled: !isFetching,
    staleTime: 5 * 60 * 1000,
    placeholderData: staticProducts,
  });
}

export function useFeaturedProducts() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product[]>({
    queryKey: ["featured-products"],
    queryFn: async () => {
      if (!actor) return staticFeatured;
      try {
        const results = await actor.getFeaturedProducts();
        return results.map(mapProduct);
      } catch {
        return staticFeatured;
      }
    },
    enabled: !isFetching,
    staleTime: 5 * 60 * 1000,
    placeholderData: staticFeatured,
  });
}

export function useProduct(id: number) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product | null>({
    queryKey: ["product", id],
    queryFn: async () => {
      if (!actor) return staticGetById(id) ?? null;
      try {
        const result = await actor.getProductById(BigInt(id));
        return result ? mapProduct(result) : null;
      } catch {
        return staticGetById(id) ?? null;
      }
    },
    enabled: !isFetching && id > 0,
    staleTime: 5 * 60 * 1000,
  });
}

export function useProductsByCategory(category: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product[]>({
    queryKey: ["products-by-category", category],
    queryFn: async () => {
      if (!actor) return staticGetByCategory(category);
      try {
        const results = await actor.getProductsByCategory(category);
        return results.map(mapProduct);
      } catch {
        return staticGetByCategory(category);
      }
    },
    enabled: !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}
