import { Router } from "express";

import authRoutes from "../modules/auth/auth.route";
import categoryRoutes from "../modules/category/category.route";
import subCategoryRoutes from "../modules/sub-category/sub-category.route";
import productRoutes from "../modules/product/product.route";

const router = Router();

router.use("/auth", authRoutes);

router.use(
  "/categories",
  categoryRoutes
);

router.use(
  "/sub-categories",
  subCategoryRoutes
);

router.use(
  "/products",
  productRoutes
);

export default router;