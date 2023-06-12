import express from "express";
// import {
//   deleteUser,
//   getAllUser,
//   getSingleUser,
//   updateUser,
// } from "../controllers/userController.js";
const router = express.Router();

import { verifyAdmin } from "../utlis/verifyToken.js";

//get all users
router.get("/", verifyAdmin);

export default router;
