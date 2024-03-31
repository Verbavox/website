"use client"
import React from 'react'

export default function App() {
//   const [paragraphShow, setParagraphShow] = useState('')
    const q = encodeURIComponent('Write a paragraph about the said topic');
    const uri = 'https://api.wit.ai/message?v=20230215&q=' + q;
    const auth = 'Bearer ' + "2WKEDP5KRDDYSIKMVSTXY36VYZO2QBHW";
    
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Verbavox</p>
        
        <button  onClick={async () => {
                    fetch(uri, {headers: {Authorization: auth}})
                    .then(res => res.json())
                    .then(res => console.log(res))
                }}>
            Generate
        </button>
    </main>
  )
}

// gpt api catch

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
