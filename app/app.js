"use client"
import React from 'react'

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Verbavox</p>

        <button 
            onClick={async () => {
                const response = await fetch("/api/chat-gpt", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        someData: true,
                    }),
                });
                console.log(response);
            }}>
            Generate
        </button>
    </main>
  )
}