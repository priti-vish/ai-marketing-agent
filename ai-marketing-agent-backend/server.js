require('dotenv').config() //For enviroment variable
const express = require('express')
const cors = require('cors')
const multer = require('multer')

//For API Intergration
const { GoogleGenerativeAI } = require('@google/generative-ai')
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
})

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())


// app.get('/',(req,res)=>{
//     res.send({
//         message : "Server running ...."
//     })
// })

app.post('/', async (req, res) => {

    try {
        const { text } = req.body

        //For my AI call
        const prompt = `
        Analyze the product and generate: 
        - Product category
        - Brand tone
        - Audience insights
        - Platform recommendations
        - Instagram captions
        - Ad copy
        - Hooks
        - CTA suggestions
        - Hashtags
        - Reel ideas
        - Carousel ideas
        - Campaign suggestions

        Product Description: ${text}
        `

        const result = await model.generateContent(prompt)
        const response = await result.response.text()

        res.send({
            aiResponse: response
        })


        //Sample data for testing
        // res.send({
        //     productCategory: "Sports & Fitness",

        //     brandTone: "Energetic and Motivational",

        //     audienceInsights: "Young adults aged 18-30 interested in fitness and running.",

        //     platformRecommendations: [
        //         "Instagram",
        //         "TikTok",
        //         "YouTube Shorts"
        //     ],

        //     captions: [
        //         "Run faster. Train harder. Stay unstoppable.",
        //         "Your fitness journey starts with the right shoes.",
        //         "Built for performance. Designed for champions."
        //     ],

        //     adCopy: [
        //         "Experience comfort and speed like never before.",
        //         "Upgrade your workout with lightweight running shoes."
        //     ],

        //     hooks: [
        //         "Still using uncomfortable running shoes?",
        //         "Ready to transform your workouts?"
        //     ],

        //     ctaSuggestions: [
        //         "Shop Now",
        //         "Try Today",
        //         "Level Up Your Training"
        //     ],

        //     hashtags: [
        //         "#Fitness",
        //         "#Running",
        //         "#GymLife",
        //         "#Workout",
        //         "#Sportswear"
        //     ],

        //     reelIdeas: [
        //         "Before vs after workout transformation reel.",
        //         "Slow-motion running cinematic shots.",
        //         "Day in the life of a fitness enthusiast."
        //     ],

        //     carouselIdeas: [
        //         "Top 5 benefits of proper running shoes.",
        //         "Workout tips for beginners.",
        //         "Fitness myths vs facts."
        //     ],

        //     campaignSuggestions: [
        //         "30-Day Fitness Challenge",
        //         "Train Like an Athlete Campaign",
        //         "Summer Body Transformation Campaign"
        //     ]
        // })

    } catch (error) {
        console.log(error);
        res.send({
            message: "Something went wrong...",
            error: error
        })

    }

})

app.listen(port, () => {
    console.log("Server running on : ", port);

})