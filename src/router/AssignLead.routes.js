import { Router } from "express";
import { UpdateData } from "../controllers/ABC.controllers.js";

const router = Router();

router.route("/update/:id").put(UpdateData);

export default router;
