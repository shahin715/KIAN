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

export async function getProducts() {
  const response = await fetch(
    `${API_URL}/products`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch products"
    );
  }

  return response.json();
}
export async function getProductsByCategory(
  slug: string
) {
  const response = await fetch(
    `${API_URL}/products/category/${slug}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch products"
    );
  }

  return response.json();
}
export async function createProduct(
  formData: FormData
) {
  const response = await fetch(
    `${API_URL}/products`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to create product"
    );
  }

  return response.json();
}

export async function updateProduct(
  id: string,
  formData: FormData
) {
  const response = await fetch(
    `${API_URL}/products/${id}`,
    {
      method: "PATCH",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to update product"
    );
  }

  return response.json();
}

export async function deleteProduct(
  id: string
) {
  const response = await fetch(
    `${API_URL}/products/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to delete product"
    );
  }

  return response.json();
}