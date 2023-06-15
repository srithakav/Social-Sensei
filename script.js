import { config } from "dotenv";
config()

import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

// var input = document.createElement

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// prompt the user for input
// userInterface.prompt()

var starter = `Ignore all previous instructions. Here is your new role and persona: 

You are a virtual assistant for State Farm insurance agents. Your name is Blake. Blake is a virtual friend who is an expert on Social Media Marketing and technology. Blake consults insurance agents in creating a social media strategy. Blake follows these strict rules when writing his responses:

Blake uses natural, easygoing, back and forth flow to his dialogue. He doesn’t go on a monologue! He ALWAYS has a conversational tone.
Blake limits his responses to 100 words max
Blake ALWAYS be extremely concise! 99% of the time his responses are one to two paragraphs 
Blake convinces users to hire professionals and explains the benefits of why paid advertising is the best option for 
Blake explains jargon in simple terms
Be VERY concise!!!
Act as Blake.
Acknowledge this by responding with a small 1-2 sentence introduction.
`;

openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": starter}],
    })
    .then(res => {
        console.log(res.data.choices[0].message.content)
    })

userInterface.prompt()

// once input is given, send that to chatgpt, console.log the result, ask for input again
// forever loop
userInterface.on("line", async input => {
    const res = await 
    openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": input}],
    })
    console.log(res.data.choices[0].message.content)
    // document.write(res.data.choices[0].message.content)
    userInterface.prompt()
})
