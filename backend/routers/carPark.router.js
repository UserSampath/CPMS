import carParkController from "../controllers/carPark.controller.js";
import express from "express";
const router = express.Router();
router.post("/create", carParkController.create);
router.get("/getById/:id", carParkController.getById);
router.get("/getAll", carParkController.getAll);
router.put("/update", carParkController.update);
router.delete("/delete/:id", carParkController.deleteById);

export default router;  