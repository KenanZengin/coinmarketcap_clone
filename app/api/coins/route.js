import { NextResponse } from "next/server";

export async function GET(request){

    const { searchParams} = new URL(request.url)
    const id = searchParams.get("limit")
    const start = searchParams.get("start")
    console.log(id);
   
    const res = await fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=cf2f764e-644f-45af-80ce-ae0f0ee371ec&limit=${id}&start=${start}`,{cache:"force-cache"} )
    const data = await res.json();

    return NextResponse.json(data)
}