import express from "express";
import UserController from '../controllers/user.controller.js';
const router= express.Router();

router.post('/login', UserController.findone)
router.post('/register', UserController.add)

export default router;