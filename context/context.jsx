"use client"
import { createContext,useState } from "react";


export const CoinMarketCapContext = createContext()

export const CoinMarketCapProvider = ({children}) => {


    const [limit,setLimit] = useState(100)
    const [start,setStart] = useState(1)
    const [pageNumber,setPageNumber] = useState(1)
    const [coinDetail,setCoinDetail] = useState()
    const [searchLabel,setSearchLabel] = useState("none")
    const [search,setSearch] = useState("")
    const [showFourthCanvas,setshowFourthCanvas] = useState(false)


    const getCoins = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data.data
        } catch (error) {
          console.log(error.message);
        }
    }

    const searchContent = (dp) => {
        setSearchLabel(dp)
        setSearch("")
    }


    const data = {
        getCoins,
        searchContent,
        limit,
        setLimit,
        start,
        setStart,
        pageNumber,
        setPageNumber,
        coinDetail,
        setCoinDetail,
        searchLabel,
        setSearchLabel,
        search,
        setSearch,
        showFourthCanvas,
        setshowFourthCanvas
    }
    
    
    return(
        <CoinMarketCapContext.Provider value={data}>
            {children}
        </CoinMarketCapContext.Provider>
    )
}