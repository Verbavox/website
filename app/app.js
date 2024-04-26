'use client'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

export default function App() {
    return (
    <main className={clsx(
        "flex items-center justify-center",
        "min-h-screen",
        "gap-6"
    )} >
        <h1 className={clsx(
            "text-6xl font-bold",
            "tracking-widest",
        )}>VERBOVOX</h1>
        <Image
            className={clsx(
                "rounded-full"
            )}
            width={60} 
            height={60} 
            src={'/verbavoxLogoBlackAndWhite.png'} 
            draggable="false"/>
    </main>
  )
}