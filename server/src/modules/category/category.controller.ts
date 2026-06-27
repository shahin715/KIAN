import { Request, Response } from "express";

import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} from "./category.service";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const { name } = req.body;

    const category =
      await createCategory(name);

    res.status(201).json({
      success: true,
      data: category,
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
    const categories =
      await getCategories();

    res.status(200).json({
      success: true,
      data: categories,
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

    const { name } = req.body;

    const category =
      await updateCategory(
        id,
        name
      );

    res.status(200).json({
      success: true,
      data: category,
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

    await deleteCategory(id);

    res.status(200).json({
      success: true,
      message:
        "Category deleted successfully",
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