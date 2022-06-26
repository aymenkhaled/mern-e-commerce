import express from "express";
import { createScategorie,getScatByCat, deleteScategorie, getScategorie, getScategorieById, updateScategorie } from "../controllers/scategories.controller.js";


const router = express.Router();

router.get('/', getScategorie)
router.get('/:id', getScategorieById);
router.post('/', createScategorie);
router.put('/:id', updateScategorie);
router.delete('/:id', deleteScategorie);
router.get('/cat/:categorieID',getScatByCat);

export default router;