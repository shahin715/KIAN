import prisma from "../../config/prisma";

export const createProduct =
  async (
    name: string,
    sku: string,
    price: number,
    stock: number,
    categoryId: string,
    subCategoryId: string | null,
    image?: string | null
  ) => {
    const slug = name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

    const existingProduct =
      await prisma.product.findUnique({
        where: {
          slug,
        },
      });

    if (existingProduct) {
      throw new Error(
        "Product already exists"
      );
    }

    return prisma.product.create({
      data: {
        name,
        slug,
        sku,
        price,
        stock,
        categoryId,
        subCategoryId,
        image,
      },
      include: {
        category: true,
        subCategory: true,
      },
    });
  };

export const getProducts =
  async () => {
    return prisma.product.findMany({
      include: {
        category: true,
        subCategory: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  };

export const getProductsByCategorySlug =
  async (slug: string) => {
    return prisma.product.findMany({
      where: {
        category: {
          slug,
        },
      },
      include: {
        category: true,
        subCategory: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  };

export const updateProduct =
  async (
    id: string,
    name: string,
    sku: string,
    price: number,
    stock: number,
    categoryId: string,
    subCategoryId: string | null,
    image?: string | null
  ) => {
    const slug = name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

    return prisma.product.update({
      where: {
        id,
      },
      data: {
        name,
        slug,
        sku,
        price,
        stock,
        categoryId,
        subCategoryId,
        ...(image && { image }),
      },
      include: {
        category: true,
        subCategory: true,
      },
    });
  };

export const deleteProduct =
  async (id: string) => {
    return prisma.product.delete({
      where: {
        id,
      },
    });
  };