"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getProductsByCategoryAndSubCategory,
} from "@/lib/api";

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
    subCategorySlug: string;
  }>;
}

export default function SubCategoryPage({
  params,
}: Props) {
  const [categorySlug, setCategorySlug] =
    useState("");

  const [
    subCategorySlug,
    setSubCategorySlug,
  ] = useState("");

  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const load = async () => {
      const {
        slug,
        subCategorySlug,
      } = await params;

      setCategorySlug(slug);

      setSubCategorySlug(
        subCategorySlug
      );

      try {
        const response =
          await getProductsByCategoryAndSubCategory(
            slug,
            subCategorySlug
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
      <h1 className="text-3xl font-bold capitalize mb-2">
        {subCategorySlug}
      </h1>

      <p className="text-gray-500 mb-8 capitalize">
        {categorySlug}
      </p>

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