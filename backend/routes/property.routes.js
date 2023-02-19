import express from 'express';
import { getAllProperties, getAllPropertyDetails, createProperty, updateProperty, 
    deleteProperty } from '../controllers/property.controller.js';

const router = express.Router();

router.route('/').get(getAllProperties);
router.route('/:id').get(getAllPropertyDetails);
router.route('/').post(createProperty);
router.route('/:id').patch(updateProperty);
router.route('/:id').delete(deleteProperty);

export default router;