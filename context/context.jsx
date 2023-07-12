"use client"
import { createContext,useState } from "react";


export const CoinMarketCapContext = createContext()

export const CoinMarketCapProvider = ({children}) => {


    const [limit,setLimit] = useState(100)
    const [start,setStart] = useState(1)
    const [pageNumber,setPageNumber] = useState(1)
    const [coinDetail,setCoinDetail] = useState()
    
    

    const getTopTenCoins = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data.data
        } catch (error) {
          console.log(error.message);
        }
       }

    const data = {
        getTopTenCoins,
        limit,
        setLimit,
        start,
        setStart,
        pageNumber,
        setPageNumber,
        coinDetail,
        setCoinDetail,
        
    }
    
    
    return(
        <CoinMarketCapContext.Provider value={data}>
            {children}
        </CoinMarketCapContext.Provider>
    )
}