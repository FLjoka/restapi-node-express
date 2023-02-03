import { Router } from "express";
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
} from "../controllers/employed.controller.js";

const router = Router();

router.get("/employed", getEmployees);

router.get("/employed/:id", getEmployee);

router.post("/employed", createEmployee);

router.patch("/employed/:id", updateEmployee);

router.delete("/employed/:id", deleteEmployee);

export default router;
