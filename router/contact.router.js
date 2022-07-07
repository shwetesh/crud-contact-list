import express from "express";
import ContactController from '../controllers/contact.controller.js';
const router = express.Router();


router.get('/', ContactController.list );
router.post('/', ContactController.add);
router.get('/:id',ContactController.find);
router.delete('/:id',ContactController.deleteone);
router.post('/:id', ContactController.update)

export default router;