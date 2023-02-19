import express from 'express';

import { createUser, getAllUsers, getUserInfoById } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserInfoById);

export default router;