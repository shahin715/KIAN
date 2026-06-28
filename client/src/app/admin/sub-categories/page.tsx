"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getSubCategories,
  deleteSubCategory,
} from "@/lib/api";

import AddSubCategoryModal from "./_components/AddSubCategoryModal";
import EditSubCategoryModal from "./_components/EditSubCategoryModal";
import SubCategoryTable from "./_components/SubCategoryTable";

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

export default function SubCategoriesPage() {
  const [
    subCategories,
    setSubCategories,
  ] = useState<
    SubCategory[]
  >([]);

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
    selectedSubCategory,
    setSelectedSubCategory,
  ] =
    useState<SubCategory | null>(
      null
    );

  const fetchSubCategories =
    async () => {
      try {
        setLoading(true);

        const response =
          await getSubCategories();

        setSubCategories(
          response.data
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchSubCategories();
  }, []);

  const handleEdit = (
    subCategory: SubCategory
  ) => {
    setSelectedSubCategory(
      subCategory
    );

    setIsEditModalOpen(true);
  };

  const handleDelete =
    async (id: string) => {
      const confirmed =
        window.confirm(
          "Are you sure you want to delete this sub category?"
        );

      if (!confirmed) return;

      try {
        await deleteSubCategory(
          id
        );

        fetchSubCategories();
      } catch (error) {
        console.error(error);

        alert(
          "Failed to delete sub category"
        );
      }
    };

  return (
    <>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">
            Sub Categories
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
            Add Sub Category
          </button>
        </div>

        <SubCategoryTable
          subCategories={
            subCategories
          }
          loading={loading}
          onEdit={handleEdit}
          onDelete={
            handleDelete
          }
        />
      </div>

      <AddSubCategoryModal
        isOpen={
          isAddModalOpen
        }
        onClose={() =>
          setIsAddModalOpen(
            false
          )
        }
        onSuccess={
          fetchSubCategories
        }
      />

      <EditSubCategoryModal
        isOpen={
          isEditModalOpen
        }
        onClose={() =>
          setIsEditModalOpen(
            false
          )
        }
        onSuccess={
          fetchSubCategories
        }
        subCategory={
          selectedSubCategory
        }
      />
    </>
  );
}