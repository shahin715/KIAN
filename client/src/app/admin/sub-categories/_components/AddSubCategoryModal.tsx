"use client";

import { useEffect, useState } from "react";

import {
  createSubCategory,
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

export default function AddSubCategoryModal({
  isOpen,
  onClose,
  onSuccess,
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

  if (!isOpen) return null;

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        setLoading(true);

        await createSubCategory(
          name,
          categoryId
        );

        setName("");
        setCategoryId("");

        onSuccess();
        onClose();
      } catch (error) {
        console.error(error);

        alert(
          "Failed to create sub category"
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
          Add Sub Category
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
                ? "Creating..."
                : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}