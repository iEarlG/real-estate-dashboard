import mongoose from "mongoose";
import Property from "../models/property.js";
import User from "../models/user.js";

import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_KEY_SECRET,
});

const getAllProperties = async (req, res, next) => {

}

const getAllPropertyDetails = async (req, res, next) => {

}

const createProperty = async (req, res) => {
    try {
        const { title, propertyType, location, photo, price, description, email } = req.body;
    
        const sessions = await mongoose.startSession();
        sessions.startTransaction();
    
        const user = await User.findOne({ email }).session(sessions);
            if(!user) throw new Error("User not found");
    
        const photoUrl = await cloudinary.uploader.upload(photo);
    
        const newProperty = await Property.create({
            title, 
            propertyType, 
            location, 
            price, 
            description, 
            photo: photoUrl.url,
            creator: user._id,
        });
    
        user.allProperties.push(newProperty._id);
        await user.save({ session: sessions });
    
        await sessions.commitTransaction();
    
        res.status(200).json({ message: 'Property Created successfully' });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateProperty = async (req, res, next) => {

}

const deleteProperty = async (req, res, next) => {

}

export {
    getAllProperties, getAllPropertyDetails, 
    createProperty, updateProperty, 
    deleteProperty
};