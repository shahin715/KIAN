import prisma from "../../config/prisma";

export const createCategory = async (
  name: string
) => {
  const slug = name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  return prisma.category.create({
    data: {
      name,
      slug,
    },
  });
};

export const getCategories =
  async () => {
    return prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  };

export const updateCategory =
  async (
    id: string,
    name: string
  ) => {
    const slug = name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

    return prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
        slug,
      },
    });
  };

export const deleteCategory =
  async (id: string) => {
    return prisma.category.delete({
      where: {
        id,
      },
    });
  };