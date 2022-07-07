import express from "express";
import ContactController from '../controllers/contact.controller.js';
const router = express.Router();


router.get('/', ContactController.list );
router.post('/', ContactController.add)


export default router;