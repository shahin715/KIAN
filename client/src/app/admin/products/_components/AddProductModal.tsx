"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  createProduct,
  getCategories,
} from "@/lib/api";

interface Category {
  id: string;
  name: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddProductModal({
  isOpen,
  onClose,
  onSuccess,
}: Props) {
  const [name, setName] =
    useState("");

  const [sku, setSku] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [stock, setStock] =
    useState("");

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

      try {
        setLoading(true);

        await createProduct(
          name,
          sku,
          Number(price),
          Number(stock),
          categoryId
        );

        setName("");
        setSku("");
        setPrice("");
        setStock("");
        setCategoryId("");

        onSuccess();
        onClose();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  if (!isOpen) return null;

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
          Add Product
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Product Name"
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
            placeholder="SKU"
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
            placeholder="Price"
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
            placeholder="Stock"
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
            <option value="">
              Select Category
            </option>

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

          <div
            className="
              flex
              justify-end
              gap-2
              pt-2
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
                ? "Creating..."
                : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}