import userModel from '../model/userModel.js';
import JWT from 'jsonwebtoken';

export const requiresignin = async (req, res, next) => {
    try {
       
        const decoded = JWT.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        console.error('JWT verification error:', error);
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);

        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }

        if (user.role !== 1) {
            return res.status(401).json({ success: false, message: 'Unauthorized access' });
        }

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};
