import express from 'express'
import { getAll, add, get, remove, update } from '../controllers/category';
const router = express.Router()
router.post('/categories', add);
router.get('/categories', getAll)
router.get('/categories/:id', get)
router.delete('/categories/:id', remove)
router.put('/categories/:id', update)
export default router;