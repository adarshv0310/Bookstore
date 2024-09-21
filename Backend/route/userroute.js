import express from "express";

import {
    signup
} from '../Controllers/usercontrollers.js'

import { login } from '../Controllers/usercontrollers.js'

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);


export default router;