'use client'
import clsx from 'clsx'
import Image from 'next/image'
import Logo from "@/public/verbavoxLogoBlackAndWhite.png";
import React, { useState } from 'react'

export default function App() {
    const [effect, setEffect] = useState(null)

    

    return (
    <main className={clsx(
        "flex items-center justify-center",
        "min-h-screen",
        "gap-6"
    )} >
        <h1 className={clsx(
            "text-6xl font-bold",
            "tracking-widest",
        )}>VERBAVOX</h1>
        <Image
            id='verbavox-logo'
            className={clsx(
                "rounded-full",
            )}
            width={60} 
            height={60} 
            src={Logo} 
            draggable="false"/>
    </main>
  )
}