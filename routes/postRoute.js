import express from "express";
import { requiresignin, isAdmin } from "../middleware/loginMiddleware.js";
import { createpostcontroller, getprojestdata } from "../controllers/postController.js";


const router = express.Router();


router.post('/create-post', createpostcontroller);


router.get('/get-post',getprojestdata);

export default router; 

