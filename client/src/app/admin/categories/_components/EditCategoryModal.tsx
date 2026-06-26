"use client";

import { useState } from "react";

import { updateCategory } from "@/lib/api";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface EditCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
}

export default function EditCategoryModal({
  isOpen,
  onClose,
  category,
}: EditCategoryModalProps) {
  const [name, setName] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleUpdate =
    async () => {
      if (!category) return;

      try {
        setLoading(true);

        await updateCategory(
          category.id,
          name || category.name
        );

        onClose();

        window.location.reload();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  if (!isOpen || !category) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div
        className="
          bg-white
          w-full
          max-w-md
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
          Edit Category
        </h2>

        <div>
          <label
            className="
              block
              mb-2
              text-sm
            "
          >
            Name
          </label>

          <input
            type="text"
            value={
              name || category.name
            }
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
          />
        </div>

        <div
          className="
            flex
            justify-end
            gap-3
            mt-6
          "
        >
          <button
            onClick={onClose}
            disabled={loading}
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
            onClick={handleUpdate}
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
      </div>
    </div>
  );
}