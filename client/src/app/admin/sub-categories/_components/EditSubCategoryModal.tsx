"use client";

import { useEffect, useState } from "react";

import {
  getCategories,
  updateSubCategory,
} from "@/lib/api";

interface Category {
  id: string;
  name: string;
}

interface SubCategory {
  id: string;
  name: string;
  slug: string;

  categoryId: string;

  category: {
    id: string;
    name: string;
  };
}

interface Props {
  isOpen: boolean;

  onClose: () => void;

  onSuccess: () => void;

  subCategory: SubCategory | null;
}

export default function EditSubCategoryModal({
  isOpen,
  onClose,
  onSuccess,
  subCategory,
}: Props) {
  const [name, setName] =
    useState("");

  const [
    categoryId,
    setCategoryId,
  ] = useState("");

  const [
    categories,
    setCategories,
  ] = useState<Category[]>(
    []
  );

  const [
    loading,
    setLoading,
  ] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const load =
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

    load();
  }, [isOpen]);

  useEffect(() => {
    if (!subCategory) return;

    setName(subCategory.name);

    setCategoryId(
      subCategory.categoryId
    );
  }, [subCategory]);

  if (
    !isOpen ||
    !subCategory
  )
    return null;

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        setLoading(true);

        await updateSubCategory(
          subCategory.id,
          name,
          categoryId
        );

        onSuccess();

        onClose();
      } catch (error) {
        console.error(error);

        alert(
          "Failed to update sub category"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/40
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-5">
          Edit Sub Category
        </h2>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-4"
        >
          <div>
            <label className="block mb-1 text-sm">
              Category
            </label>

            <select
              value={
                categoryId
              }
              onChange={(e) =>
                setCategoryId(
                  e.target.value
                )
              }
              required
              className="
                w-full
                border
                rounded
                px-3
                py-2
              "
            >
              <option value="">
                Select Category
              </option>

              {categories.map(
                (
                  category
                ) => (
                  <option
                    key={
                      category.id
                    }
                    value={
                      category.id
                    }
                  >
                    {
                      category.name
                    }
                  </option>
                )
              )}
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              required
              className="
                w-full
                border
                rounded
                px-3
                py-2
              "
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
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
              disabled={
                loading
              }
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