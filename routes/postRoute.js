import express from "express";
import { requiresignin, isAdmin } from "../middleware/loginMiddleware.js";
import { createpostcontroller } from "../controllers/postController.js";


const router = express.Router();


router.post('/create', createpostcontroller);


export default router; 

