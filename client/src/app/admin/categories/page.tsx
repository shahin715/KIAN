"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  getCategories,
  deleteCategory,
} from "@/lib/api";

import AddCategoryModal from "./_components/AddCategoryModal";
import EditCategoryModal from "./_components/EditCategoryModal";
import CategoryTable from "./_components/CategoryTable";

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function CategoriesPage() {
  const [
    categories,
    setCategories,
  ] = useState<Category[]>([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    isAddModalOpen,
    setIsAddModalOpen,
  ] = useState(false);

  const [
    isEditModalOpen,
    setIsEditModalOpen,
  ] = useState(false);

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState<Category | null>(
    null
  );

  const fetchCategories =
    useCallback(async () => {
      try {
        const response =
          await getCategories();

        setCategories(
          response.data
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleEdit = (
    category: Category
  ) => {
    setSelectedCategory(
      category
    );

    setIsEditModalOpen(true);
  };

  const handleDelete =
    async (id: string) => {
      try {
        await deleteCategory(id);

        await fetchCategories();
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">
            Categories
          </h1>

          <button
            onClick={() =>
              setIsAddModalOpen(
                true
              )
            }
            className="
              bg-black
              text-white
              px-4
              py-2
              rounded
            "
          >
            Add Category
          </button>
        </div>

        <CategoryTable
          categories={
            categories
          }
          loading={loading}
          onEdit={handleEdit}
          onDelete={
            handleDelete
          }
        />
      </div>

      <AddCategoryModal
        isOpen={
          isAddModalOpen
        }
        onClose={() =>
          setIsAddModalOpen(
            false
          )
        }
      />

      <EditCategoryModal
        isOpen={
          isEditModalOpen
        }
        onClose={() => {
          setIsEditModalOpen(
            false
          );

          fetchCategories();
        }}
        category={
          selectedCategory
        }
      />
    </>
  );
}