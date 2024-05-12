import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import PostModel from "../model/blogpsotmodel.js"
import { comarePassword, hashPassword } from "../helpers/authHelper.js";
const router = express.Router();



export const createpostcontroller = async (req,res) =>
    {
        try {
            const { title, content } = req.body; // Extract title and content from request body
    
            // Create a new post instance
            const newPost = new Post({
                title,
                content,
            });
    
            // Save the new post to the database
            const savedPost = await newPost.save();
    
            // Send a success response with the saved post data
            res.status(201).json(savedPost);
        } catch (error) {
            // If an error occurs, send an error response
            res.status(500).json({ message: error.message });
        }
    };
    