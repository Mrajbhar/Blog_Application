import express from "express";
import { loginController, registerController, testController } from "../controllers/loginController.js";
import { requiresignin, isAdmin } from "../middleware/loginMiddleware.js";

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/test',testController);

export default router; 
