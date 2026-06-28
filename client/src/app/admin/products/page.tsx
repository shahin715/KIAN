"use client";

import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "@/lib/api";
import AddProductModal from "./_components/AddProductModal";
import EditProductModal from "./_components/EditProductModal";

interface Product {
  id: string;

  name: string;

  sku: string;

  price: number;

  stock: number;

  image: string | null;

  categoryId: string;

  subCategoryId: string | null;

  category: {
    name: string;
  };

  subCategory: {
    name: string;
  } | null;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await getProducts();

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);

    setIsEditModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmed) return;

    try {
      await deleteProduct(id);

      fetchProducts();
    } catch (error) {
      console.error(error);

      alert("Failed to delete product");
    }
  };

  return (
    <>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Products</h1>

          <button
            onClick={() => setIsModalOpen(true)}
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
                <th className="p-4 text-left">Image</th>

                <th className="p-4 text-left">Name</th>

                <th className="p-4 text-left">SKU</th>

                <th className="p-4 text-left">Price</th>

                <th className="p-4 text-left">Stock</th>

                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">
  Sub Category
</th>

                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="p-4">
                    Loading...
                  </td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-4">
                    No products found
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="p-4">
                      {product.image ? (
                        <img
                          src={`http://localhost:5000${product.image}`}
                          alt={product.name}
                          width={64}
                          height={64}
                          className="
    w-16
    h-16
    object-cover
    rounded
    border
  "
                        />
                      ) : (
                        <span className="text-gray-400">No Image</span>
                      )}
                    </td>

                    <td className="p-4">{product.name}</td>

                    <td className="p-4">{product.sku}</td>

                    <td className="p-4">৳{product.price}</td>

                    <td className="p-4">{product.stock}</td>

                    <td className="p-4">{product.category.name}</td>
                    <td className="p-4">
  {product.subCategory?.name ??
    "-"}
</td>

                    <td className="p-4">
                      <button
                        onClick={() => handleEdit(product)}
                        className="
                            text-blue-600
                            mr-3
                          "
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(product.id)}
                        className="
                            text-red-600
                          "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={fetchProducts}
      />

      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSuccess={fetchProducts}
        product={selectedProduct}
      />
    </>
  );
}
