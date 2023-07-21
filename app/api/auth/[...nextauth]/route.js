import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider  from "next-auth/providers/credentials";
import connectMongo from "../../../../database/conn";
import Users from "../../../../model/Schema";
import { compare } from "bcryptjs";

export const authOptions = ({
    providers : [
        
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET         
        }),
        CredentialsProvider({
            name:"Credentials",
            async authorize(credentials,req){
                connectMongo().catch(error => {error:"connection failed"})
                
                const result = await Users.findOne({email:credentials.email})
                
                if(!result) throw new Error("no user found with email please sign up")
            
                const checkPassword = await compare (credentials.password,result.password)

                if(!checkPassword || result.email!==credentials.email){
                    throw new Error("Username or Password does't match")
                }

                return result
            
            }
        })
    ],
})


const handler =  NextAuth(authOptions)

export {handler as GET , handler as POST}