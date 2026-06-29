import { Router } from "express";

import {
  create,
  getAll,
  getMenu,
  update,
  remove,
} from "./category.controller";

const router = Router();

router.post("/", create);

router.get("/", getAll);

router.get(
  "/menu",
  getMenu
);

router.patch(
  "/:id",
  update
);

router.delete(
  "/:id",
  remove
);

export default router;