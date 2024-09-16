import express from 'express';
import { getBook } from '../Controllers/bookcontrollers.js';


const router = express.Router();


router.get("/", getBook);

export default router;