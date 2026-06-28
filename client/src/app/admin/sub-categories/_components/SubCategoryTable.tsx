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
  subCategories: SubCategory[];
  loading: boolean;

  onEdit: (
    subCategory: SubCategory
  ) => void;

  onDelete: (
    id: string
  ) => void;
}

export default function SubCategoryTable({
  subCategories,
  loading,
  onEdit,
  onDelete,
}: Props) {
  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border bg-white">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Name
            </th>

            <th className="px-6 py-3 text-left text-sm font-semibold">
              Category
            </th>

            <th className="px-6 py-3 text-center text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {subCategories.length ===
          0 ? (
            <tr>
              <td
                colSpan={3}
                className="py-8 text-center text-gray-500"
              >
                No sub categories found.
              </td>
            </tr>
          ) : (
            subCategories.map(
              (
                subCategory
              ) => (
                <tr
                  key={
                    subCategory.id
                  }
                  className="border-t"
                >
                  <td className="px-6 py-4">
                    {
                      subCategory.name
                    }
                  </td>

                  <td className="px-6 py-4">
                    {
                      subCategory
                        .category
                        .name
                    }
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() =>
                          onEdit(
                            subCategory
                          )
                        }
                        className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          onDelete(
                            subCategory.id
                          )
                        }
                        className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
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