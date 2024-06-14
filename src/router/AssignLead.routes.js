import { Router } from "express";
import { DeleteData, FetchAllData, FetchData, SaveData, UpdateData } from "../controllers/ABC.controllers.js";

const router = Router();

router.route("/update/:id").put(UpdateData);

router.route("/delete/:id").delete(DeleteData);

router.route("/save").post(SaveData);

router.route("/fetch-all").get(FetchAllData);

router.route("/fetch/:id").get(FetchData);




export default router;
