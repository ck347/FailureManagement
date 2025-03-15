import { useState, useEffect } from 'react'
import OpenAI from "openai"
// import dotenv from 'dotenv'
// dotenv.config()

let DEEPSEEK_KEY='sk-9f137c399cdf4195b4b896bb1b623958'

// require('dotenv').config()
const openai = new OpenAI({baseURL: 'https://api.deepseek.com',
    apiKey: DEEPSEEK_KEY,
    dangerouslyAllowBrowser: true
});
function QuestionGenerator({ notes }) {
  const [questions, setQuestions] = useState("")

  useEffect(() => {
    // Mock AI function to generate questions based on notes
    const generateQuestions = async (notes) => {
        const completion = await openai.chat.completions.create({
            messages: [
            { role: "user", content: `Generate questions based on the following notes:\n\n${notes}. Give me 10 questions. Put a <br> after each question.` }
            ],
            model: "deepseek-chat",
          });
          console.log("completion")
      // This is a placeholder for the AI logic
      console.log(completion.choices[0].message.content)
      return completion.choices[0].message.content
    }

    const generatedQuestions = generateQuestions(notes)
    setQuestions(generatedQuestions)
  }, [notes])

  return (
    <div>
      <h2>Generated Questions</h2>
      
        {questions}
      
    </div>
  )
}

export default QuestionGenerator