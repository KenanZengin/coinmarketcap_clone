

import { NextResponse } from "next/server";
export async function GET(request){

    const { searchParams} = new URL(request.url)
    const id = searchParams.get("limit")
    const start = searchParams.get("start")
    console.log(id);
   
    const res = await fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=78480638-5c2a-49ec-adbb-156acea0b508&limit=${id}&start=${start}` )
    const data = await res.json();

    return NextResponse.json(data)
}