"use client";

import { useEffect, useState } from "react";

import { getProductsByCategory } from "@/lib/api";

import ProductGrid from "@/components/product/ProductGrid";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string | null;
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function CategoryPage({
  params,
}: Props) {
  const [slug, setSlug] =
    useState("");

  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const load =
      async () => {
        const {
          slug,
        } = await params;

        setSlug(slug);

        try {
          const response =
            await getProductsByCategory(
              slug
            );

          setProducts(
            response.data
          );
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    load();
  }, [params]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold capitalize mb-8">
        {slug}
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductGrid
          products={products}
        />
      )}
    </div>
  );
}