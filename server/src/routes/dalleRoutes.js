import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

const size = 256;
const dalleModel = "dall-e-2";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});


router.route('/').get((req, res) => {
    res.send("Hello from DALL-E route");
})

router.route('/').post(async (req, res) => {
    console.log("Generate request for prompt: " + req.body.prompt);
    try {
        const { prompt } = req.body;

        const image = await openai.images.generate({
            model: dalleModel,
            prompt: prompt,
            n: 1,
            size: `${size}x${size}`,
            response_format: 'b64_json'
        });

        res.status(200).json({ photo: image.data[0].b64_json });
    } catch (error) {
        console.error(error);
        res.status(500).send(error?.response.data.error.message);
    }
});

export default router;

