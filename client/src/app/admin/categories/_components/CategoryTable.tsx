"use client";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface CategoryTableProps {
  categories: Category[];
  loading: boolean;
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
}

export default function CategoryTable({
  categories,
  loading,
  onEdit,
  onDelete,
}: CategoryTableProps) {
  return (
    <div className="border rounded-md overflow-hidden bg-white">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="text-left p-4">
              Name
            </th>

            <th className="text-left p-4">
              Slug
            </th>

            <th className="text-left p-4">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan={3}
                className="p-4"
              >
                Loading...
              </td>
            </tr>
          ) : categories.length ===
            0 ? (
            <tr>
              <td
                colSpan={3}
                className="p-4"
              >
                No categories found
              </td>
            </tr>
          ) : (
            categories.map(
              (category) => (
                <tr
                  key={category.id}
                  className="border-b"
                >
                  <td className="p-4">
                    {category.name}
                  </td>

                  <td className="p-4">
                    {category.slug}
                  </td>

                  <td className="p-4">
                    <div className="flex gap-3">
                      <button
                        onClick={() =>
                          onEdit(
                            category
                          )
                        }
                        className="
                          text-blue-600
                          hover:underline
                        "
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          const confirmDelete =
                            window.confirm(
                              "Delete this category?"
                            );

                          if (
                            confirmDelete
                          ) {
                            onDelete(
                              category.id
                            );
                          }
                        }}
                        className="
                          text-red-600
                          hover:underline
                        "
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
}