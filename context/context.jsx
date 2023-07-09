"use client"
import { createContext } from "react";


export const CoinMarketCapContext = createContext()

export const CoinMarketCapProvider = ({children}) => {


    async function getTopTenCoins(){
        const response = await fetch('http://localhost:3000/api/coins')
        const data =  await response.json()
        return data.data.data
    }
    
    return(
        <CoinMarketCapContext.Provider
        value={{
            getTopTenCoins
        }}>
            {children}
        </CoinMarketCapContext.Provider>
    )
}