import prisma from "../../config/prisma";

export const createSubCategory = async (
  name: string,
  categoryId: string
) => {
  const slug = name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  const existingSubCategory =
    await prisma.subCategory.findUnique({
      where: {
        slug,
      },
    });

  if (existingSubCategory) {
    throw new Error(
      "Sub Category already exists"
    );
  }

  return prisma.subCategory.create({
    data: {
      name,
      slug,
      categoryId,
    },
    include: {
      category: true,
    },
  });
};

export const getSubCategories =
  async () => {
    return prisma.subCategory.findMany({
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  };

export const getSubCategoriesByCategory =
  async (categoryId: string) => {
    return prisma.subCategory.findMany({
      where: {
        categoryId,
      },
      orderBy: {
        name: "asc",
      },
    });
  };

export const updateSubCategory =
  async (
    id: string,
    name: string,
    categoryId: string
  ) => {
    const slug = name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

    return prisma.subCategory.update({
      where: {
        id,
      },
      data: {
        name,
        slug,
        categoryId,
      },
      include: {
        category: true,
      },
    });
  };

export const deleteSubCategory =
  async (id: string) => {
    return prisma.subCategory.delete({
      where: {
        id,
      },
    });
  };