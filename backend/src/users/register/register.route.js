import express from "express";
import { createUser, getUserCount } from "./register.controller.js";

const router = express.Router();

// POST /users/register
router.post("/register", createUser);
router.get("/count", getUserCount);

export default router;
