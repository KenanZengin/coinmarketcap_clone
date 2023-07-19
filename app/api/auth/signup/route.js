import { NextResponse } from "next/server";
import connectMongo from "../../../../database/conn";
import Users from "../../../../model/Schema";
import { hash } from "bcryptjs";

export async function POST(request,response) {

  connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))
     
  const body = await request.json()
  const {userName,email,password} = body
  
  if(!userName || !email || !password) return NextResponse.json({message:"data not found"})

  const checkexisting = await Users.findOne({email})
  if(checkexisting) return NextResponse.json({message:"User already exists..."})
    
  Users.create({userName,email,password:await hash(password,12)})
  
   
  return NextResponse.json(body)
    
    
  
  }