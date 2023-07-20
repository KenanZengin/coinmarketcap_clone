import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"



export const authOptions = ({
    providers : [
        
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
           
        }),
    ],
})


const handler =  NextAuth(authOptions)

export {handler as GET , handler as POST}