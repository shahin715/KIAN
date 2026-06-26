const API_URL =
  "http://localhost:5000/api/v1";

export async function getCategories() {
  const response = await fetch(
    `${API_URL}/categories`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch categories"
    );
  }

  return response.json();
}

export async function createCategory(
  name: string,
  slug: string
) {
  const response = await fetch(
    `${API_URL}/categories`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        name,
        slug,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to create category"
    );
  }

  return response.json();
}

export async function updateCategory(
  id: string,
  name: string
) {
  const response = await fetch(
    `${API_URL}/categories/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to update category"
    );
  }

  return response.json();
}

export async function deleteCategory(
  id: string
) {
  const response = await fetch(
    `${API_URL}/categories/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to delete category"
    );
  }

  return response.json();
}