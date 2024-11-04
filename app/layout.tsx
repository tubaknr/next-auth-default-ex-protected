"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider, useSession } from "next-auth/react";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const { data: session, status } = useSession();

  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
