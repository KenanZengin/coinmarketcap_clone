"use client"
import { useContext } from "react"
import { CoinMarketCapContext } from "@/context/context"
import useSWR from 'swr'

import {GoStarFill} from "react-icons/go"
import {BsFillShareFill} from "react-icons/go"
import {BiSolidUpArrow, BiSolidDownArrow} from "react-icons/bi"





const CoinDetail =  ({searchParams}) => {

  const {getTopTenCoins,coinDetail} = useContext(CoinMarketCapContext)
  
  const {data,error } = useSWR(`http://localhost:3000/api/coins?&start=${searchParams.rank}&limit=1`,getTopTenCoins)

  
  console.log(data);
  
  return (
    <div className="coin-detail">
      <div className="coin-stats">
        {coinDetail?.name}
        {coinDetail ? coinDetail?.name : data?.map((item)=>(<div>{item.name}</div>))}
        
      </div>
      <div className="coin-chart">

      </div>
      
      <div className="coin-community">

      </div>
    </div>
  )
}

export default CoinDetail