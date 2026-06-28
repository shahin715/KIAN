import { Request, Response } from "express";

import {
  createSubCategory,
  getSubCategories,
  getSubCategoriesByCategory,
  updateSubCategory,
  deleteSubCategory,
} from "./sub-category.service";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      categoryId,
    } = req.body;

    const subCategory =
      await createSubCategory(
        name,
        categoryId
      );

    res.status(201).json({
      success: true,
      data: subCategory,
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
    const subCategories =
      await getSubCategories();

    res.status(200).json({
      success: true,
      data: subCategories,
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
      const categoryId =
        req.params.categoryId as string;

      const subCategories =
        await getSubCategoriesByCategory(
          categoryId
        );

      res.status(200).json({
        success: true,
        data: subCategories,
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
    const id =
      req.params.id as string;

    const {
      name,
      categoryId,
    } = req.body;

    const subCategory =
      await updateSubCategory(
        id,
        name,
        categoryId
      );

    res.status(200).json({
      success: true,
      data: subCategory,
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
    const id =
      req.params.id as string;

    await deleteSubCategory(id);

    res.status(200).json({
      success: true,
      message:
        "Sub Category deleted successfully",
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