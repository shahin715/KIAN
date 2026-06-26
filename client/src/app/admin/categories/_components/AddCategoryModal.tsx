"use client";

import { useState } from "react";

import { createCategory } from "@/lib/api";

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddCategoryModal({
  isOpen,
  onClose,
}: AddCategoryModalProps) {
  const [name, setName] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleCreate =
    async () => {
      if (!name || !slug) {
        return;
      }

      try {
        setLoading(true);

        await createCategory(
          name,
          slug
        );

        setName("");
        setSlug("");

        onClose();

        window.location.reload();
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
          Add Category
        </h2>

        <div className="space-y-4">
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
            />
          </div>

          <div>
            <label
              className="
                block
                mb-2
                text-sm
              "
            >
              Slug
            </label>

            <input
              type="text"
              value={slug}
              onChange={(e) =>
                setSlug(
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
            onClick={handleCreate}
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
      </div>
    </div>
  );
}