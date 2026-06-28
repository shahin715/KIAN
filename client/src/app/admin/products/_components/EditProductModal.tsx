"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getCategories,
  updateProduct,
} from "@/lib/api";

interface Category {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  categoryId: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  product: Product | null;
}

export default function EditProductModal({
  isOpen,
  onClose,
  onSuccess,
  product,
}: Props) {
  const [name, setName] =
    useState("");

  const [sku, setSku] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [stock, setStock] =
    useState("");

  const [image, setImage] =
    useState<File | null>(null);

  const [
    categoryId,
    setCategoryId,
  ] = useState("");

  const [
    categories,
    setCategories,
  ] = useState<Category[]>([]);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    if (!isOpen || !product)
      return;

    setName(product.name);
    setSku(product.sku);
    setPrice(
      String(product.price)
    );
    setStock(
      String(product.stock)
    );
    setCategoryId(
      product.categoryId
    );
  }, [isOpen, product]);

  useEffect(() => {
    if (!isOpen) return;

    const fetchCategories =
      async () => {
        try {
          const response =
            await getCategories();

          setCategories(
            response.data
          );
        } catch (error) {
          console.error(error);
        }
      };

    fetchCategories();
  }, [isOpen]);

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      if (!product) return;

      try {
        setLoading(true);

        const formData =
          new FormData();

        formData.append(
          "name",
          name
        );

        formData.append(
          "sku",
          sku
        );

        formData.append(
          "price",
          price
        );

        formData.append(
          "stock",
          stock
        );

        formData.append(
          "categoryId",
          categoryId
        );

        if (image) {
          formData.append(
            "image",
            image
          );
        }

        await updateProduct(
          product.id,
          formData
        );

        onSuccess();
        onClose();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  if (!isOpen || !product)
    return null;

  return (
    <div
      className="
        fixed inset-0
        bg-black/50
        flex items-center
        justify-center
        z-50
      "
    >
      <div
        className="
          bg-white
          w-full
          max-w-lg
          rounded-lg
          p-6
        "
      >
        <h2
          className="
            text-xl
            font-semibold
            mb-6
          "
        >
          Edit Product
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="
              w-full
              border
              rounded
              px-3
              py-2
            "
            required
          />

          <input
            type="text"
            value={sku}
            onChange={(e) =>
              setSku(
                e.target.value
              )
            }
            className="
              w-full
              border
              rounded
              px-3
              py-2
            "
            required
          />

          <input
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(
                e.target.value
              )
            }
            className="
              w-full
              border
              rounded
              px-3
              py-2
            "
            required
          />

          <input
            type="number"
            value={stock}
            onChange={(e) =>
              setStock(
                e.target.value
              )
            }
            className="
              w-full
              border
              rounded
              px-3
              py-2
            "
            required
          />

          <select
            value={categoryId}
            onChange={(e) =>
              setCategoryId(
                e.target.value
              )
            }
            className="
              w-full
              border
              rounded
              px-3
              py-2
            "
            required
          >
            {categories.map(
              (category) => (
                <option
                  key={category.id}
                  value={
                    category.id
                  }
                >
                  {category.name}
                </option>
              )
            )}
          </select>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(
                e.target.files?.[0] ||
                  null
              )
            }
            className="
              w-full
              border
              rounded
              px-3
              py-2
            "
          />

          <div
            className="
              flex
              justify-end
              gap-2
            "
          >
            <button
              type="button"
              onClick={onClose}
              className="
                border
                px-4
                py-2
                rounded
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="
                bg-black
                text-white
                px-4
                py-2
                rounded
              "
            >
              {loading
                ? "Updating..."
                : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}