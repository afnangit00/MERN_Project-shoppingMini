import express from 'express'

import { deleteProduct, getProduct, createProduct, putProduct } from '../constroll/product.constroll.js';
const router =express.Router();


router.get("/" , getProduct);

router.post("/", createProduct);

router.put('/:id', putProduct);

router.delete("/:id", deleteProduct);

export default router;