import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const router = express.Router();

// GET A POST
router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find({});

        res.status(200).json({success: true, data: posts});
    }
    catch (e) {
        console.error(e);
        res.status(500).json({success:false, message: e.message});
    }
});

// CREATE A POST
router.route('/').post(async(req, res) => {
    try{
        const { name, prompt, photo } = req.body;
        console.log("Received a post request for", req.body);
        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await Post.create(
            {
                name,
                prompt,
                photo: photoUrl.url
            }
        );

        res.status(201).json({success:true, data: newPost});
    }
    catch (e) {
        console.error(e);
        res.status(500).json({success:false, message: e.message})
    }
})

export default router;
