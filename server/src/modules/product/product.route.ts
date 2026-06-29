import { Router } from "express";

import upload from "../../middlewares/upload";

import {
  create,
  getAll,
  getByCategory,
  getByCategoryAndSubCategory,
  update,
  remove,
} from "./product.controller";

const router = Router();

router.post(
  "/",
  upload.single("image"),
  create
);

router.get("/", getAll);

router.get(
  "/category/:categorySlug/:subCategorySlug",
  getByCategoryAndSubCategory
);

router.get(
  "/category/:slug",
  getByCategory
);

router.patch(
  "/:id",
  upload.single("image"),
  update
);

router.delete("/:id", remove);

export default router;