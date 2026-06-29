const API_URL =
  "http://localhost:5000/api/v1";

// =====================
// Category
// =====================

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

// =====================
// Sub Category
// =====================

export async function getSubCategories() {
  const response = await fetch(
    `${API_URL}/sub-categories`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch sub categories"
    );
  }

  return response.json();
}

export async function getSubCategoriesByCategory(
  categoryId: string
) {
  const response = await fetch(
    `${API_URL}/sub-categories/category/${categoryId}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch sub categories"
    );
  }

  return response.json();
}

export async function createSubCategory(
  name: string,
  categoryId: string
) {
  const response = await fetch(
    `${API_URL}/sub-categories`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        name,
        categoryId,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to create sub category"
    );
  }

  return response.json();
}

export async function updateSubCategory(
  id: string,
  name: string,
  categoryId: string
) {
  const response = await fetch(
    `${API_URL}/sub-categories/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        name,
        categoryId,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to update sub category"
    );
  }

  return response.json();
}

export async function deleteSubCategory(
  id: string
) {
  const response = await fetch(
    `${API_URL}/sub-categories/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to delete sub category"
    );
  }

  return response.json();
}

// =====================
// Product
// =====================

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
export async function getProductsByCategoryAndSubCategory(
  categorySlug: string,
  subCategorySlug: string
) {
  const response = await fetch(
    `${API_URL}/products/category/${categorySlug}/${subCategorySlug}`
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

export async function getMenuCategories() {
  const response = await fetch(
    `${API_URL}/categories/menu`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch menu"
    );
  }

  return response.json();
}