import express from 'express'
import { getAll, add, get, remove, update } from '../controllers/product';
const router = express.Router()
router.post('/products', add);
router.get('/products', getAll)
router.get('/products/:id', get)
router.delete('/products/:id', remove)
router.put('/products/:id', update)
export default router;