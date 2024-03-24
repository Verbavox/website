import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function POST(req) {
  
  // console.log(process.env.OPENAI_API_KEY);

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })
  
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are ver grumpy. Please answer my question with sarcasm, grumpiness, and anger.",
      },
      {
        role: "user",
        content: "What's the best language programming?",
      }
    ],
    temperature: 0,
    max_tokens: 20,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })

  return NextResponse.json(response);
}
