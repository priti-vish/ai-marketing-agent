# AI Marketing Agent

## Overview
AI-powered marketing assistant that generates marketing insights and content ideas based on product description input.

The application helps create:
- Product analysis
- Brand tone
- Audience insights
- Platform recommendations
- Instagram captions
- Ad copy
- Hooks
- CTA suggestions
- Hashtags
- Reel ideas
- Campaign suggestions

## Tech Stack
- React.js (Frontend)
- Tailwind CSS
- Node.js + Express (Backend)
- Google Gemini AI API

## Features
- Text-based product input
- AI-generated marketing content
- Loading state UI
- Clean dashboard-style output
- Image upload UI (future enhancement for vision-based AI)

## AI Workflow
1. User enters product description
2. Frontend sends request to backend API
3. Backend processes input using Gemini AI model
4. AI generates marketing strategy response
5. Frontend displays structured output

## Note on Image Upload
Image upload is currently included in UI but not used in AI processing. It is kept for future enhancement where vision-based AI models can be integrated.

## Future Improvements
- Structured JSON output instead of text response
- AI vision support for image-based product analysis
- Save and export campaigns
- Deployment on cloud (Vercel / Render)
- Authentication system

## Setup
1. Clone repository
2. Run `npm install` in both frontend and backend
3. Start backend: `node server.js`
4. Start frontend: `npm run dev`