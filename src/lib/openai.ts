import OpenAI from "openai"

export const Openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})