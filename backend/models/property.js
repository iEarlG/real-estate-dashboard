import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    decription: { type: String, required: true },
    propertyType: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: String, required: true },
    photo: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const propertyModel = mongoose.model("Property", propertySchema);

export default propertyModel;