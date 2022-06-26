import express from 'express';
import {getCategories, createCategorie, getCategorieById, updateCategorie, deleteCategorie} from '../controllers/categories.controller.js'
const router = express.Router();


router.get('/', getCategories);
router.get('/:id', getCategorieById);
router.post('/', createCategorie);
router.put('/:id', updateCategorie);
router.delete('/:id', deleteCategorie)


export default router;