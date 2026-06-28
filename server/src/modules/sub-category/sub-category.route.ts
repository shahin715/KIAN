import { Router } from "express";

import {
  create,
  getAll,
  getByCategory,
  update,
  remove,
} from "./sub-category.controller";

const router = Router();

router.post("/", create);

router.get("/", getAll);

router.get(
  "/category/:categoryId",
  getByCategory
);

router.patch("/:id", update);

router.delete("/:id", remove);

export default router;