import express from "express";

import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  searchStudentByName,
  searchStudentByCity
} from "../controllers/studentControllers.js";

const router = express.Router();

router.post("/", createStudent);

router.get("/search", searchStudentByName);
router.get("/search/city", searchStudentByCity);

router.get("/", getAllStudents);
router.get("/:id", getStudentById);

router.put("/:id", updateStudentById);
router.delete("/:id", deleteStudentById);

export default router;