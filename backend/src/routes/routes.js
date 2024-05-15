import express from "express"
import { allUsers, authcheck, getData, login, logout, registration } from "../controllers/session/session.controller.js";
import { authorization } from "../middileware/auth.middileware.js";

const router = express.Router();

//check
router.get("/data", getData);

// session
router.post("/register", registration);
router.get("/users",allUsers)
router.get("/login",login)
router.get("/logout",logout)
router.get("/protected",authorization,authcheck)

export default router;