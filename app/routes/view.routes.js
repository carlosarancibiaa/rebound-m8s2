
import {goHome } from '../controllers/view.controller.js';
import { Router } from 'express';

const router = Router();

//rutas
router.get('/', goHome);


export default router