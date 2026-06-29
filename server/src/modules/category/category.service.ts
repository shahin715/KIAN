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

  export const getMenuCategories =
  async () => {
    return prisma.category.findMany({
      where: {
        isActive: true,
      },

      include: {
        subCategories: {
          where: {
            isActive: true,
          },

          orderBy: {
            sortOrder: "asc",
          },

          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },

      orderBy: {
        sortOrder: "asc",
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