"use client"
import { useContext } from "react"
import { CoinMarketCapContext } from "@/context/context"





const CoinDetail =  ({searchParams}) => {

  const {coinDetail} = useContext(CoinMarketCapContext)
 
   console.log(coinDetail);
  return (
    <div>
      {coinDetail.name} <br />
      {coinDetail.cmc_rank} <br />
      {coinDetail.smybol} <br />
      {coinDetail.quote.USD.price} <br />
      
       <br />
      
    </div>
  )
}

export default CoinDetail