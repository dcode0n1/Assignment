import express, { Router } from "express";
import { storeInData } from "../controllers/storein/storeIn";
import { filterData } from "../controllers";
import { isFileExist } from "../middleware/isFileExist";

export const AssignmentRoutes: Router = express.Router();

AssignmentRoutes.get("/filter", filterData);
AssignmentRoutes.post("/add-json", isFileExist, storeInData);
