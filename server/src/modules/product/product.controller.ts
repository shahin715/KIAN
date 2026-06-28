import { Request, Response } from "express";

import {
  createProduct,
  getProducts,
  getProductsByCategorySlug,
  updateProduct,
  deleteProduct,
} from "./product.service";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      sku,
      price,
      stock,
      categoryId,
      subCategoryId,
    } = req.body;

    const image = req.file
      ? `/uploads/products/${req.file.filename}`
      : null;

    const product =
      await createProduct(
        name,
        sku,
        Number(price),
        Number(stock),
        categoryId,
        subCategoryId || null,
        image
      );

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};

export const getAll = async (
  req: Request,
  res: Response
) => {
  try {
    const products =
      await getProducts();

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};

export const getByCategory =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const slug =
        req.params.slug as string;

      const products =
        await getProductsByCategorySlug(
          slug
        );

      res.status(200).json({
        success: true,
        data: products,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      });
    }
  };

export const update = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const {
      name,
      sku,
      price,
      stock,
      categoryId,
      subCategoryId,
    } = req.body;

    const image = req.file
      ? `/uploads/products/${req.file.filename}`
      : undefined;

    const product =
      await updateProduct(
        id,
        name,
        sku,
        Number(price),
        Number(stock),
        categoryId,
        subCategoryId || null,
        image
      );

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};

export const remove = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    await deleteProduct(id);

    res.status(200).json({
      success: true,
      message:
        "Product deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};