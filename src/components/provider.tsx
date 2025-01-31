"use client"

import {ConvexReactClient } from 'convex/react'
import { ClerkProvider  , useAuth } from "@clerk/nextjs"
import {ConvexProviderWithClerk} from "convex/react-clerk"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || '')

const Provider = ({children} : {children : React.ReactNode}) => {
    return (
        <ClerkProvider afterSignOutUrl={"https://chatbot-tasks.vercel.app"} signUpFallbackRedirectUrl={"https://chatbot-tasks.vercel.app"}>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}

export default Provider;