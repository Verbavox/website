"use client"
import React, { useState } from 'react'
// import React from "react";
// import fetch_node from 'node-fetch'


export default function App() {
    const [inputText, setInputText] = useState('')
    const [response, setResponse] = useState('')
    
    const handleInputChange = (event) => {
        setInputText(event.target.value)
    }
    // const auth = process.env.WIT_API_KEY;
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `https://api.wit.ai/message?q=${encodeURIComponent(inputText)}`,
                {
                    headers: {
                        Authorization: `Bearer 2WKEDP5KRDDYSIKMVSTXY36VYZO2QBHW`,
                    },
                }
            );
            const data = await response.json();
            // Use data to determine the appropriate response
            setResponse(data);
        } catch (error) {
            console.error('Error fetching response from wit.ai:', error);
        }
    };

    const handleResponse = (data) => {
        // Extract relevant information from the response
        const intent = data.intents.length > 0 ? data.intents[0].name : '';
        const entities = data.entities;

        // Perform actions based on the intent and entities
        switch (intent) {
            case 'greeting':
                setResponse('Hello!');
                break;
            case 'search':
                const searchTerm = entities && entities.search_query ? entities.search_query[0].value : '';
                // Perform search or any other action based on the search query
                setResponse(`You want to search for: ${searchTerm}`);
                break;
            default:
                setResponse(`I'm sorry, I didn't understand that.`);
        }
    };

    // const q = encodeURIComponent('Write a paragraph about the said topic');
    // const uri = 'https://api.wit.ai/message?v=20230215&q=' + q;
    
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={inputText} onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
            {console.log({response})}
        </div>
    </main>
  )
}

// gpt api catch
        // <p>Verbavox</p>
        
        // <button  onClick={async () => {
        //             fetch(uri, {headers: {Authorization: auth}})
        //             .then(res => res.json())
        //             .then(res => console.log(res))
        //         }}>
        //     Generate
        // </button>

// onClick={async () => {
//     const response = await fetch("/api/chat-gpt", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             someData: true,
//         }),
//     });
//     console.log(response);
// }}
