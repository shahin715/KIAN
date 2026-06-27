"use client";

import {
  useEffect,
  useState,
} from "react";

import { getProducts } from "@/lib/api";

import AddProductModal from "./_components/AddProductModal";

interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;

  category: {
    name: string;
  };
}

export default function ProductsPage() {
  const [
    products,
    setProducts,
  ] = useState<Product[]>([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    isModalOpen,
    setIsModalOpen,
  ] = useState(false);

  const fetchProducts =
    async () => {
      try {
        const response =
          await getProducts();

        setProducts(
          response.data
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">
            Products
          </h1>

          <button
            onClick={() =>
              setIsModalOpen(true)
            }
            className="
              bg-black
              text-white
              px-4
              py-2
              rounded
            "
          >
            Add Product
          </button>
        </div>

        <div className="border rounded-md overflow-hidden bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-4 text-left">
                  Name
                </th>

                <th className="p-4 text-left">
                  SKU
                </th>

                <th className="p-4 text-left">
                  Price
                </th>

                <th className="p-4 text-left">
                  Stock
                </th>

                <th className="p-4 text-left">
                  Category
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={6}
                    className="p-4"
                  >
                    Loading...
                  </td>
                </tr>
              ) : products.length ===
                0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="p-4"
                  >
                    No products found
                  </td>
                </tr>
              ) : (
                products.map(
                  (product) => (
                    <tr
                      key={
                        product.id
                      }
                      className="border-b"
                    >
                      <td className="p-4">
                        {
                          product.name
                        }
                      </td>

                      <td className="p-4">
                        {
                          product.sku
                        }
                      </td>

                      <td className="p-4">
                        ৳
                        {
                          product.price
                        }
                      </td>

                      <td className="p-4">
                        {
                          product.stock
                        }
                      </td>

                      <td className="p-4">
                        {
                          product
                            .category
                            .name
                        }
                      </td>

                      <td className="p-4">
                        Edit Delete
                      </td>
                    </tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AddProductModal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
        onSuccess={
          fetchProducts
        }
      />
    </>
  );
}