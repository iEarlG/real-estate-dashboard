import User from "../models/user.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).limit(req.query._end);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createUser = async (req, res, next) => {

    try {
        const { name, email, avatar } = req.body;
    
        const userExists = await User.findOne({ email });
        if(userExists) 
            res.status(200).json(userExists);
    
        const newUser = await User.create({ 
            name, email, avatar 
        });
        return res.status(200).json(newUser);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserInfoById = async (req, res, next) => {

}

export {
    getAllUsers, createUser, getUserInfoById
};
